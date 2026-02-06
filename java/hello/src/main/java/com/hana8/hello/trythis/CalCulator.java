package com.hana8.hello.trythis;

import java.io.Serial;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Scanner;

public class CalCulator {
	public static BigDecimal DefaultVal = BigDecimal.ZERO;

	public static void main(String[] args) {
		try (Scanner sc = new Scanner(System.in)) {
			//noinspection InfiniteLoopStatement
			while (true) {
				BigDecimal num1 = scanNumber(sc, "값1? ");
				String opStr = scanOps(sc);
				BigDecimal num2 = scanNumber(sc, "값2? ");
				BigDecimal result = Operation.fromSymbol(opStr).apply(num1, num2);
				while (result == null) {
					opStr = scanOps(sc);
					num2 = scanNumber(sc, "값2? ");
					result = Operation.fromSymbol(opStr).apply(num1, num2);
				}
				;
				DefaultVal = result;
				System.out.println("=> " + result);
			}
		} catch (ExitException e) {
			System.out.println("계산기를 종료합니다.");
		}
	}

	public static String scanOps(Scanner sc) {
		while (true) {
			System.out.print("연산자(+, -, *, /)? ");
			String opStr = sc.nextLine();

			if (opStr.matches("[+\\-*/]")) {
				return opStr;
			}
			if (opStr.equals(".")) {
				throw new ExitException();
			}
			System.out.println("그런 연산자는 없습니다!");
		}
	}

	public static BigDecimal scanNumber(Scanner sc, String question) {
		while (true) {
			System.out.print(question);
			try {
				String input = sc.nextLine();
				if (input.isEmpty()) {
					return DefaultVal;
				}
				if (input.equals(".")) {
					throw new ExitException();
				}
				return new BigDecimal(input);
			} catch (NumberFormatException e) {
				System.out.println("숫자만 입력 가능합니다!");
			}
		}
	}

	private enum Operation {
		PLUS("+") {
			@Override
			public BigDecimal apply(BigDecimal num1, BigDecimal num2) {
				return num1.add(num2);
			}
		},
		MINUS("-") {
			@Override
			public BigDecimal apply(BigDecimal num1, BigDecimal num2) {
				return num1.subtract(num2);
			}
		},
		MULTIPLY("*") {
			@Override
			public BigDecimal apply(BigDecimal num1, BigDecimal num2) {
				return num1.multiply(num2);
			}
		},
		DIVIDE("/") {
			@Override
			public BigDecimal apply(BigDecimal num1, BigDecimal num2) {
				try {
					return num1.divide(num2, 4, RoundingMode.HALF_UP);
				} catch (ArithmeticException e) {
					System.out.println("잘못된 연산(/ by zero)");
					return null;
				}
			}
			// 소수점 10자리까지, 반올림
		};

		private final String symbol;

		Operation(String symbol) {
			this.symbol = symbol;
		}

		public static Operation fromSymbol(String symbol) {
			for (Operation op : values()) {
				if (op.symbol.equals(symbol)) {
					return op;
				}
			}
			throw new IllegalArgumentException("지원하지 않는 연산자: " + symbol);
		}

		public abstract BigDecimal apply(BigDecimal num1, BigDecimal num2);
	}

	static class ExitException extends RuntimeException {
		@Serial
		private static final long serialVersionUID = 1L;
	}
}
