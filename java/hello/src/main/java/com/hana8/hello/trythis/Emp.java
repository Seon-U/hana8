package com.hana8.hello.trythis;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

class Emp {
	String name;
	String dept;
	int score;

	Emp(String name, String dept, int score) {
		this.name = name;
		this.dept = dept;
		this.score = score;
	}

	@Override
	public String toString() {
		return "Emp{" + "name='" + name + '\'' + ", dept='" + dept + '\'' + ", score=" + score + '}';
	}

	public String getName() {
		return name;
	}

	public String getDept() {
		return dept;
	}

	public int getScore() {
		return score;
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

		printEmpWithGroup(overSeventy, false);
		System.out.println("----------------------------------------------------------------------------");

		// 부서 별 최고 점수 1명만 남기기
		Map<String, Emp> maxEmp = emps.stream().sorted(Comparator.comparing(Emp::getName))
			.collect(Collectors.toMap(Emp::getDept, (e) -> e, (e1, e2) -> e1.score > e2.score ? e1 : e2));
		List<Emp> maxEmpList = maxEmp.values().stream().toList();

		printEmpWithGroup(maxEmpList, true);
		System.out.println("----------------------------------------------------------------------------");

	}
}
