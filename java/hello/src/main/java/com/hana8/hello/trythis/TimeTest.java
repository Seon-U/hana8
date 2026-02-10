package com.hana8.hello.trythis;

import java.time.DayOfWeek;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class TimeTest {
	public static boolean isWeekend(LocalDate target) {
		return target.getDayOfWeek() == DayOfWeek.SATURDAY || target.getDayOfWeek() == DayOfWeek.SUNDAY;
	}

	public static boolean isBetween(LocalDate start, LocalDate end, LocalDate target) {
		return target.isAfter(start.minusDays(1)) && target.isBefore(end.plusDays(1));
	}

	public static long getWeekDays(LocalDate start, LocalDate end) {
		long days = ChronoUnit.DAYS.between(start, end) + 1;
		long result = days / 7 * 5;
		long leftDays = days % 7;

		for (int i = 0; i < leftDays; i++) {
			LocalDate day = start.plusDays(i);
			if (!isWeekend(day)) {
				result++;
			}
		}

		return result;
	}

	public static void main(String[] args) {
		//1
		LocalDateTime birth = LocalDateTime.of(1998, Month.of(5), 1, 7, 30, 0, 0);
		LocalDateTime now = LocalDateTime.now();

		Duration gap = Duration.between(birth, now);
		System.out.println("총 일 수 =" + gap.toDays());
		System.out.println("총 시간 수 = " + gap.toHours());

		//2
		LocalDateTime nextBirth = birth.withYear(now.getYear());
		Duration gap2 = Duration.between(now, nextBirth);

		System.out.println("남은 일 수 = " + gap2.toDays());
		// 3
		ZoneId milano = ZoneId.of("Europe/Rome");
		ZonedDateTime milanoDt = ZonedDateTime.now(milano);
		DateTimeFormatter fmt = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		System.out.printf("%s%n", milanoDt.format(fmt));

		//4
		LocalDate[] holidays = {LocalDate.of(2026, 3, 25)};
		LocalDateTime prStart = LocalDateTime.of(2026, 3, 23, 9, 0, 0);
		LocalDateTime prEnd = LocalDateTime.of(2026, 4, 20, 17, 0, 0);
		long workDay = getWeekDays(prStart.toLocalDate(), prEnd.toLocalDate());
		System.out.println("workDay = " + workDay);

		LocalDate restDay = LocalDate.of(2026, 3, 25);
		if (isBetween(prStart.toLocalDate(), prEnd.toLocalDate(), restDay) && !isWeekend(restDay)) {
			workDay--;
		}

		LocalDate fullHDayStart = LocalDate.of(2026, 4, 13);
		LocalDate fullHDayEnd = LocalDate.of(2026, 4, 17);
		long fullHDay = getWeekDays(fullHDayStart, fullHDayEnd);

		long workHour = workDay * 8 + fullHDay - 1;
		System.out.println("workHour = " + workHour);
	}
}
