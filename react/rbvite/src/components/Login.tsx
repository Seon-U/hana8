import { useEffect, useImperativeHandle, useRef, type FormEvent } from 'react';
import { useSession } from '../hooks/SessionContext';
import Btn from './ui/btn';
import LabelInput from './ui/LabelInput';

export type LoginHandler = {
  validate: () => void;
  focusName: () => void;
};

export default function Login() {
  const { login, loginHandlerRef: ref } = useSession();
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    validate() {
      if (!nameRef.current?.value) {
        alert('Input the name!');
        nameRef.current?.focus();
        return false;
      }

      if (!ageRef.current?.value) {
        alert('Input the age!');
        ageRef.current?.focus();
        return false;
      }

      return true;
    },

    focusName() {
      nameRef.current?.focus();
    },
  }));

  const makeLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (nameRef.current?.value && ageRef.current?.value)
    login(nameRef.current?.value ?? '', Number(ageRef.current?.value));
  };

  const loginAction = (formData: FormData) => {
    const formObj = Object.fromEntries(formData);
    console.log('🚀 ~ loginAction ~ formData:', formObj);
    login(String(formData.get('name')), Number(formData.get('age')));
  };

  useEffect(() => {
    alert('login plz....');
    nameRef.current?.focus();

    return () => alert('login success!');
  }, []);

  return (
    <div className='border border-red-300 p-3 rounded-lg'>
      <h1 className='text-2xl text-center font-medium'>Login</h1>
      <form action={loginAction} className='space-y-3'>
        <input type='text' name='name' />
        <input type='text' name='age' />
        <button type='submit'> LoginAction </button>
      </form>
      <form onSubmit={makeLogin} className='space-y-3'>
        <LabelInput label='Name' ref={nameRef} />
        <LabelInput
          type='number'
          ref={ageRef}
          // onChange={(e) => setAge(+e.target.value)}
          placeholder='Age...'
        />
        {/* <div>
          <label htmlFor='age' className='text-sm text-gray-600'>
            Age
          </label>
          <input
            type='number'
            id='age'
            ref={ageRef}
            // onChange={(e) => setAge(+e.target.value)}
            placeholder='user name...'
            className='w-full'
            required
          />
        </div> */}

        <div className='text-center'>
          <button type='reset'>Cancel</button>
          <Btn
            // type='submit'
            // onClick={() => login(name, age)}
            className='bg-blue-500 text-white hover:bg-blue-600'
          >
            Login
          </Btn>
        </div>
      </form>
    </div>
  );
}
