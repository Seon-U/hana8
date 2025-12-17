import {
  createContext,
  use,
  useEffect,
  useReducer,
  useRef,
  useState,
  type PropsWithChildren,
  type RefObject,
} from 'react';
import type { LoginHandler } from '../components/Login';
export type ItemType = {
  id: number;
  name: string;
  price: number;
  isSoldOut?: boolean;
};
export type LoginUser = { id: number; name: string; age: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: ItemType[];
};
export type LoginFunction = (name: string, age: number) => void;

const DefaultSession = {
  // loginUser: null,
  loginUser: { id: 1, name: 'Hong', age: 33 },
  cart: [
    { id: 100, name: '라면234', price: 3000 },
    { id: 101, name: '컵라면111', price: 2000 },
    { id: 200, name: '파004', price: 5000 },
  ],
};

type SessionContextValue = {
  session: Session;
  login: LoginFunction;
  logout: () => void;
  loginHandlerRef: RefObject<LoginHandler | null> | null;
  removeItem: (id: number) => void;
  saveItem: (item: ItemType) => void;
  cacheItem: (items?: ItemType[]) => void;
};

const SessionContext = createContext<SessionContextValue>({
  session: DefaultSession,
  login: () => {},
  logout: () => {},
  loginHandlerRef: null,
  removeItem: () => {},
  saveItem: () => {},
  cacheItem: () => {},
});

type Action =
  | { type: 'LOGIN'; payload: LoginUser }
  | { type: 'LOGOUT'; payload: null }
  // | { type: 'ADD-ITEM'; payload: Omit<ItemType, 'id'> }
  | { type: 'ADD-ITEM'; payload: ItemType }
  | { type: 'EDIT-ITEM'; payload: ItemType }
  | { type: 'REMOVE-ITEM'; payload: number };

const reducer = (session: Session, { type, payload }: Action) => {
  switch (type) {
    case 'LOGIN':
    case 'LOGOUT':
      return { ...session, loginUser: payload };
    case 'ADD-ITEM':
      return { ...session, cart: [...session.cart, payload] };
    case 'EDIT-ITEM':
      return {
        ...session,
        cart: session.cart.map((item) =>
          item.id === payload.id ? payload : item
        ),
      };
    case 'REMOVE-ITEM':
      return {
        ...session,
        cart: session.cart.filter((item) => item.id !== payload),
      };
    default:
      return session;
  }
};

export function SessionProvider({ children }: PropsWithChildren) {
  // const [session, setSession] = useState<Session>(DefaultSession);
  const [session, dispatch] = useReducer(reducer, DefaultSession);

  const logout = () => {
    dispatch({ type: 'LOGOUT', payload: null });
  };

  const loginHandlerRef = useRef<LoginHandler>(null);

  const login: LoginFunction = (name, age) => {
    if (loginHandlerRef.current?.validate())
      dispatch({ type: 'LOGIN', payload: { id: 1, name, age } });
  };

  const removeItem = (id: number) => {
    if (!confirm('Are u sure?')) return;

    dispatch({ type: 'REMOVE-ITEM', payload: id });
  };

  const saveItem = ({ id, name, price }: ItemType) => {
    const item = id && session.cart.find((item) => item.id === id);

    // updateItem
    // session.cart.map(item => item.id === id ? { id: item.id, name, price } : item);

    if (item) {
      // item.name = name;
      // item.price = price;
      dispatch({ type: 'EDIT-ITEM', payload: { id, name, price } });
    } else {
      const newItem = {
        id: Math.max(...session.cart.map((item) => item.id), 0) + 1,
        name,
        price,
      };
      dispatch({ type: 'ADD-ITEM', payload: newItem });
    }
  };

  const [sessionSample, setSessionSample] = useState<Response>();

  useEffect(() => {
    fetch('public/sample.json').then((data) => setSessionSample(data));
  }, []);

  const cacheItem = (items: ItemType[] = DefaultSession.cart) => {
    const expireDate = Number(localStorage.getItem('EXPIRE'));
    const cart = localStorage.getItem('CART');

    if (cart && expireDate >= Date.now()) return;
    if (cart && expireDate < Date.now()) return localStorage.clear();

    if (items.length || DefaultSession.cart.length) {
      localStorage.setItem('CART', JSON.stringify(items));
      localStorage.setItem('EXPIRE', String(Date.now() + 86400));
      return;
    }

    localStorage.setItem('CART', JSON.stringify(sessionSample));
    localStorage.setItem('EXPIRE', String(Date.now() + 86400));
  };

  return (
    <SessionContext.Provider
      value={{
        session,
        login,
        logout,
        loginHandlerRef,
        removeItem,
        saveItem,
        cacheItem,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => use(SessionContext);

// localStorage.setItem('CART', JSON.stringify(DefaultSession.cart));
