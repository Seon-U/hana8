package com.hana8.hello.trythis;

import java.util.Arrays;

public class StringLogParser {
	public static void main(String[] args) {
		String log = """
			2024-02-05 09:15:23 ERROR UserService: Login failed for user admin
			2024-02-05 09:16:45 INFO PaymentService: Payment processed for order #1234
			2024-02-05 09:17:12 ERROR DatabaseService: Connection timeout
			2024-02-05 09:18:33 WARN UserService: Password retry limit reached for user john
			2024-02-05 09:19:01 ERROR UserService: Login failed for user admin
			2024-02-05 09:20:15 INFO OrderService: New order created #1235""";
		String[] loglist = log.split("\n");
		String[] service = new String[loglist.length];
		String[] adminLog = new String[loglist.length];
		String[] errorLog = new String[loglist.length];

		int errorNumber = 0;
		int infoNumber = 0;
		int warnNumber = 0;
		for (int i=0; i< loglist.length ;i++) {
			String[] tokens = loglist[i].trim().split("\\s+");
			String type = tokens[2];
			if (type.contains("ERROR")) {
				errorNumber += 1;
				errorLog[i] = loglist[i];
			} else if (type.contains("INFO")) {
				infoNumber += 1;
			} else if (type.contains("WARN")) {
				warnNumber += 1;
			}
			service[i] = tokens[3];
			if (loglist[i].contains("admin")) {
				adminLog[i] = loglist[i];
			}
		}

		for (String s : service) {

		}

		System.out.println("전체로그 수: " + loglist.length + "개");
		System.out.printf("ERROR: %d개, INFO: %d개, WARN: %d개", errorNumber, infoNumber, warnNumber);
		System.out.printf("최다 등장한 서비스: %s (%d회)");
		System.out.println("admin 관련 로그");
		System.out.println(Arrays.toString(adminLog));
		System.out.println("ERROR 로그 모음");
		System.out.println(Arrays.toString(errorLog));

	}
}
