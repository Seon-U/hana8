package com.hana8.hello;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Scanner;
import java.util.concurrent.ThreadLocalRandom;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main implements Serializable {
	// static int createCnt = 0;
	volatile  int createCnt = 0;
	public static void main(String[] args) {
		//TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
		// to see how IntelliJ IDEA suggests fixing it.
		int iaa = 10;
		int ii = 0;
		System.out.printf("iaa = %d, a=%d%n", iaa, ii);
		System.out.printf("Hello and welcome!%n");
		for (int i = 1; i <= 5; i++) {
			System.out.println("i = " + i);
		}
		StringBuilder sb = new StringBuilder(4);
		sb.append('A').append('B').append('C');
		if (Math.random() > 0.5) {
			sb.append("D");
		}
		System.out.println("sb.toString* = " + sb);
		String sbb = sb.toString();
		String ab = sbb.replace("AB", sb);

		String tb1 = "hello";
		String tb2 = """
				hello - %s
			""".formatted(ab);
		System.out.printf("tb1 + `%s`", tb1);
		System.out.printf("tb2 + `%s`", tb2);
		System.out.println();
		System.out.println("---------------------------------");

		double d1 = 0.3;
		double d2 = 0.2;
		System.out.println("(d1 + d2) = " + (d1 + d2));

		BigDecimal bd1 = new BigDecimal("0.1");

		String season = "";
		int month = ThreadLocalRandom.current().nextInt(1, 13);
		season = switch (month) {
			case 11, 12, 1, 2, 3, 4 -> {
				System.out.println("Winter!!!!");
				yield "겨울";
			}
			default -> "여름";
		};
		System.out.println(season);
		System.out.println("input num dbl ?");
		Scanner scan = new Scanner(System.in);
		int num = scan.nextInt();
		double dbl = scan.nextDouble();
		String name = scan.nextLine();
		scan.nextLine();
		System.out.printf("num dbl = %d %.1f%n", num, dbl);
		scan.close();
	}
}
