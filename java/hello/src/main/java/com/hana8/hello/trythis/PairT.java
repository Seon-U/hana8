package com.hana8.hello.trythis;

public class PairT<T, U> {
	private T first;
	private U second;

	public PairT(T first, U second) {
		this.first = first;
		this.second = second;
	}

	@Override
	public String toString() {
		return "PairT{" + "first=" + first + ", second=" + second + '}';
	}

	public T getFirst() {
		return first;
	}

	public void setFirst(T first) {
		this.first = first;
	}

	public U getSecond() {
		return second;
	}

	public void setSecond(U second) {
		this.second = second;
	}

	public PairT<U, T> swap() {
		return new PairT<>(second, first);
	}

	public static void main(String[] args) {
		// 1. String과 Integer 쌍
		PairT<String, Integer> pair1 = new PairT<>("Age", 25);
		System.out.println(pair1.getFirst());   // "Age"
		System.out.println(pair1.getSecond());  // 25

		// 2. 값 변경
		pair1.setFirst("Name");
		pair1.setSecond(30);
		System.out.println(pair1);  // Pair{first=Name, second=30}

		// 3. 두 값 교환
		PairT<Integer, String> pair2 = new PairT<>(100, "Score");
		PairT<String, Integer> swapped = pair2.swap();
		System.out.println(swapped);  // Pair{first=Score, second=100}

		// 4. 같은 타입 쌍
		PairT<Double, Double> pair3 = new PairT<>(3.14, 2.71);
		System.out.println(pair3.getFirst() + pair3.getSecond());  // 5.85
	}
}
