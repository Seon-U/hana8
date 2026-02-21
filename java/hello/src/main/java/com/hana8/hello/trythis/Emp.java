package com.hana8.hello.trythis;

import java.util.Arrays;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
@ToString
class Emp {
	String name;
	String dept;
	int score;

	public void print() {
		System.out.printf("%s: %s(%d)", dept, name, score);
	}

	public void println() {
		System.out.printf("%s: %s(%d)%n", dept, name, score);
	}

	public static void printEmpWithGroup(List<Emp> emplist, boolean reverse) {
		Comparator<? super Emp> comparator =
			reverse ? (e1, e2) -> e1.dept.compareTo(e2.dept) : (e1, e2) -> e2.dept.compareTo(e1.dept);

		List<Emp> sortedList = emplist.stream().sorted(comparator).toList();
		sortedList.forEach(e -> System.out.printf("%s: %s(%d)%n", e.dept, e.name, e.score));
	}

	public static void main(String[] args) {
		// 다음과 같이 직원들 목록이 있다.
		List<Emp> emps = Arrays.asList(
			new Emp("Hong", "Sales", 85),
			new Emp("Kim", "Sales", 95),
			new Emp("Choi", "HR", 55),
			new Emp("Nam", "HR", 75),
			new Emp("Lee", "IT", 82),
			new Emp("Park", "IT", 92),
			new Emp("Ahn", "Sales", 95)
		);

		// 	고과 점수가 70점 미만인 사람은 제외
		int minLimit = 70;
		List<Emp> overSeventy = emps.stream()
			.filter(emp -> emp.score >= minLimit)
			.toList();
		List<Emp> candidates = emps.stream().filter(emp -> emp.getScore() >= 70).toList();
		candidates.forEach(Emp::println);

		var empsByDept = candidates.stream()
			.sorted(Comparator.comparing(Emp::getDept, String::compareToIgnoreCase))
			.collect(Collectors.groupingBy(Emp::getDept, LinkedHashMap::new, Collectors.toList()));
		printEmpWithGroup(overSeventy, false);
		System.out.println("----------------------------------------------------------------------------");

		// 부서 별 최고 점수 1명만 남기기
		LinkedHashMap<String, Optional<Emp>> maxScoreByDept = candidates.stream()
			.sorted(Comparator.comparing(Emp::getDept))
			.sorted(Comparator.comparing(Emp::getName))
			.collect(Collectors.groupingBy(Emp::getDept, LinkedHashMap::new,
				Collectors.maxBy(Comparator.comparingInt(Emp::getScore))));
		System.out.println(maxScoreByDept);

		Map<String, Emp> maxEmp = emps.stream().sorted(Comparator.comparing(Emp::getName).reversed())
			.collect(Collectors.toMap(Emp::getDept, (e) -> e, (e1, e2) -> e1.score > e2.score ? e1 : e2));
		List<Emp> maxEmpList = maxEmp.values().stream().toList();

		printEmpWithGroup(maxEmpList, true);
		LinkedHashMap<String, Optional<Emp>> maxScoreByDeptOrder = candidates.stream()
			.sorted(Comparator.comparing(Emp::getDept).reversed())
			.sorted(Comparator.comparing(Emp::getName))
			.collect(Collectors.groupingBy(Emp::getDept, LinkedHashMap::new,
				Collectors.maxBy(Comparator.comparing(Emp::getScore))));
		System.out.println(maxScoreByDeptOrder);

		Set<Map.Entry<String, Optional<Emp>>> entries = maxScoreByDeptOrder.entrySet();

		for (Map.Entry<String, Optional<Emp>> entry : entries) {
			String dept = entry.getKey();
			Emp tEmp = entry.getValue().orElse(null);
			if (tEmp == null) {
				System.out.printf("%s: 최고 득점자 없음!%n", dept);
			} else {
				tEmp.println();
			}
		}
		System.out.println("----------------------------------------------------------------------------");

	}
}
