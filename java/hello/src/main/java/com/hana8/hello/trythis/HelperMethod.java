package com.hana8.hello.trythis;

import java.util.List;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.function.Predicate;

interface MyPredicateM<T> extends Predicate<T> {
};

interface MyFunctionM<T, U> extends Function<T, U> {
};

interface MyReducerM<T, U> extends BiFunction<U, T, U> {
};

public class HelperMethod {
	public static void main(String[] args) {
		List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9);
		List<Integer> evens = filter(numbers, value -> value % 2 == 0);
		System.out.println("evens = " + evens);
		List<Integer> squares = map(numbers, value -> value * value);
		System.out.println("squares = " + squares);
		Integer bigger3 = find(numbers, value -> value > 3);
		System.out.println("bigger3 = " + bigger3);
		int sum = reducer(numbers, 100, (a, b) -> a + b);
		int sum2 = reducer(numbers, 100, Integer::sum);
		System.out.println("sum = " + sum);
		System.out.println("sum2 = " + sum2);
		int sum3 = reducer(numbers, 0, (a, b) -> a * b);
		System.out.println("sum3 = " + sum3);
		int sum4 = reducer(numbers, 10, (a, b) -> a * b);
		System.out.println("sum4 = " + sum4);
	}

	static List<Integer> filter(List<Integer> list, MyPredicateM<Integer> predicate) {
		return list.stream().filter(predicate).toList();
	}

	static List<Integer> map(List<Integer> list, MyFunctionM<Integer, Integer> function) {
		return list.stream().map(function).toList();
	}

	static Integer find(List<Integer> list, MyPredicateM<Integer> predicate) {
		for (int value : list) {
			if (predicate.test(value)) {
				return value;
			}
		}
		return -1;
	}

	static Integer reducer(List<Integer> list, int initValue, MyReducerM<Integer, Integer> reducer) {
		for (int value : list) {
			initValue = reducer.apply(initValue, value);
		}
		return initValue;
	}   // List<Integer> numbers = List.of(1,2,3,4,5,6,7,8,9)
}
