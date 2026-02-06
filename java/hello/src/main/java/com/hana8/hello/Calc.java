package com.hana8.hello;

public class Calc {
	private final int firstNumber;
	private final int secondNumber;

	public Calc(int firstNumber, int secondNumber) {
		this.firstNumber = firstNumber;
		this.secondNumber = secondNumber;
	}

	public static void main(String[] args) {
		Calc c1 = new Calc(10, 20);
		System.out.println("c.add() = " + c1.add());
		System.out.println("c.sub() = " + c1.sub());
		Calc c2 = new Calc(10, 20);
		System.out.println(c2.sub());
	}

	public int add() {
		return this.firstNumber + this.secondNumber;
	}

	public int sub() {
		return Math.abs(this.firstNumber - this.secondNumber);
	}
}
