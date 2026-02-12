package com.hana8.hello.trythis;

import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("checkstyle:OneTopLevelClass")
@FunctionalInterface
interface MyPredicate<T> {
	boolean test(T t);
}

@FunctionalInterface
interface MyFunction<T, R> {
	R apply(T t);
};

@FunctionalInterface
interface MyReducer<T, R> {
	R reduce(R acc, T t);
}

public class MyLambda {
	MyPredicate<Integer> mp = (Integer i) -> i % 2 == 0;

	static List<Integer> filter(List<Integer> list, MyPredicate<Integer> predicate) {
		// return list.stream().filter(i -> predicate.test(i)).toList();
		List<Integer> result = new ArrayList<>();
		for (int i : list) {
			if (predicate.test(i)) {
				result.add(i);
			}
		}
		return result;
	}

	static List<Integer> map(List<Integer> list, MyFunction<Integer, Integer> function) {
		//구현체 준 것 function::
		return list.stream().map(function::apply).toList();
	}

	static Integer find(List<Integer> list, MyPredicate<Integer> predicate) {
		for (int i : list) {
			if (predicate.test(i)) {
				return i;
			}
		}
		return -1;
	}

	static Integer reducer(List<Integer> list, int iv, MyReducer<Integer, Integer> reducer) {
		int acc = iv;
		for (int i : list) {
			acc = reducer.reduce(acc, i);
		}
		return acc;
	}   // List<Integer> numbers = List.of(1,2,3,4,5,6,7,8,9)

}
