package com.hana8.hello;

import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.Period;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;

public class DateTime {
	public static void main(String[] args) {
		LocalDate nowLd = LocalDate.now();
		System.out.println("nowLd = " + nowLd);
		LocalTime nowLt = LocalTime.now();
		System.out.println("nowLt = " + nowLt);
		LocalDateTime now = LocalDateTime.now();
		System.out.println("now = " + now);

		LocalDate graduation = LocalDate.of(2025, 9, 19);
		System.out.println("graduation = " + graduation);

		LocalDateTime ldt = LocalDateTime.of(2026, 3, 1, 14, 0, 0); // ldt.getHour(), ldt.getMinutes(), …
		System.out.println(LocalDateTime.now().isAfter(ldt));

		// for (String zone : ZoneId.getAvailableZoneIds()) {
		// 	ZoneId zoneId = ZoneId.of(zone);
		// 	if (zoneId.toString().contains("Europe")) {
		// 		System.out.println(zoneId + "=>" + zoneId.getRules());
		// 	}
		// }

		ZoneId rome = ZoneId.of("Europe/Rome");
		System.out.println("rome = " + rome + ">" + rome.getRules());
		ZoneId newYork = ZoneId.of("America/New_York");
		System.out.println("newYork = " + newYork + " > " + newYork.getRules());

		LocalDateTime ldt2 = LocalDateTime.of(2026, 7, 25, 14, 0, 0);
		ZonedDateTime zonedDateTime = ZonedDateTime.of(ldt2, newYork);
		boolean isNYDST = newYork.getRules().isDaylightSavings(zonedDateTime.toInstant());
		System.out.println("isNYDST = " + isNYDST);

		Instant iNow = Instant.now();
		System.out.println("iNow = " + iNow);
		Instant epoq = Instant.ofEpochSecond(0);
		System.out.println("epoq = " + epoq);

		LocalDate ldStart = LocalDate.of(2025, 10, 28);
		LocalDateTime ldtStart = LocalDateTime.of(2025, 10, 28, 9, 0, 0);
		System.out.println("ldtStart = " + ldtStart);

		Period btDate = Period.between(ldStart, LocalDate.now());
		System.out.println("btDate = " + btDate);
		System.out.printf("%d년 %d월 %d일%n", btDate.getYears(), btDate.getMonths(), btDate.getDays());

		Duration dDate = Duration.between(ldtStart, LocalDateTime.now());
		System.out.println("dDate = " + dDate.getSeconds() / 86400);
		System.out.println("dDate = " + dDate.getSeconds() % 86400 / 3600);
		System.out.println("dDate = " + dDate.getSeconds() % 86400 % 3600 / 60);

		long days = ChronoUnit.DAYS.between(ldtStart, LocalDateTime.now());
		System.out.println("days = " + days);
		long hours = ChronoUnit.HOURS.between(ldtStart, LocalDateTime.now());
		System.out.println("hours = " + hours);
		long months = ChronoUnit.MONTHS.between(ldtStart, LocalDateTime.now());
		System.out.println("months = " + months);

	}
}
