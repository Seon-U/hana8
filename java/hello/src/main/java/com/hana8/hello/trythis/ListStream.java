package com.hana8.hello.trythis;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.stream.IntStream;

public class ListStream {
	public static void main(String[] args) {
		List<Integer> list = List.of(1, 10, 6, 3, 3, 5, 4, 2, 7, 7, 9, 8, 10);

		System.out.print("짝수의 개수: ");
		System.out.println(list.stream().filter(i -> i % 2 == 0).count());

		System.out.print("각 숫자를 제곱: ");
		System.out.println(list.stream().map(i -> i * i));

		System.out.print("중복 제거: ");
		System.out.println(new LinkedHashSet<>(list));

		System.out.print("기본 정렬: ");
		System.out.println(list.stream().sorted().toList());

		System.out.print("역순(내림차순) 정렬: ");
		System.out.println(list.stream()
			.sorted(Comparator.reverseOrder())
			.toList());

		System.out.print("처음 5개만 출력: ");
		System.out.println(list.stream().limit(5).toList());

		System.out.print("처음 5개 건너뛰고 출력: ");
		System.out.println(list.stream().skip(5).toList());

		System.out.printf("값이 5보다 큰 것만 출력: ");
		System.out.println(list.stream().filter(v -> v > 5).toList());

		System.out.println("1~10의 합계:");
		int sum = IntStream.rangeClosed(1, 10).reduce(Integer::sum).orElse(-1);
		System.out.println(sum);
		// 이게 뜻하는 것
		// 1번 인덱스 기준 1 ~ 10사이의 합계
		// 2번 말 그대로 1이 나오는 인덱스와 1이 나오는 10 사이의 한계
		// 3번 그냥 1 + ....+ 10

		System.out.print("random 5개의 평균: ");
		System.out.println(returnRandomAvg(5));

	}

	public static Integer returnRandomAvg(int size) {
		ArrayList<Integer> randomList = new ArrayList<>();
		for (int i = 0; i < size; i++) {
			randomList.add((int)(Math.random() * 100));
		}

		return (int)randomList.stream()
			.mapToInt(i -> i)
			.average()
			.orElse(-1);
	}
}
