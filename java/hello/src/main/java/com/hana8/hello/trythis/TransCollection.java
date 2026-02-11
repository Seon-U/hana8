package com.hana8.hello.trythis;

import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;

public class TransCollection {
	public static void main(String[] args) {
		String fullLog = """
			1001,Hong,Choi,5000
			1002,Lee,Park,20000
			1003,Hong,Jade,10000
			1004,Kim,Park,20000
			1005,Lee,Choi,5000
			1006,Hong,Choi,5000""";

		// Map<String, Map<String, Integer>>

		// Map<String, LinkedHashSet<String>> sendersByReceiver = new HashMap<>();
		Map<String, Set<String>> sendersByReceiver = new HashMap<>();
		Map<String, Integer> senderCnt = new HashMap<>();
		Map<String, Integer> senderAmt = new HashMap<>();
		Map<String, Integer> recieverAmt = new HashMap<>();

		for (String log : fullLog.split("\n")) {
			String[] row = log.split(",");
			String receiver = row[1];
			String sender = row[2];
			int amt = Integer.parseInt(row[3]);

			//[reciever : Set[sender]]
			// if (sendersByReceiver.containsKey(receiver)) {
			// 	Set<String> senders = sendersByReceiver.get(receiver);
			// 	senders.add(sender);
			// } else {
			// 	Set<String> senders = new LinkedHashSet<>();
			// 	senders.add(sender);
			// 	sendersByReceiver.put(receiver, senders);
			// }

			sendersByReceiver.computeIfAbsent(receiver, k -> new LinkedHashSet<>()).add(sender);
			// if (senderCnt.containsKey(sender)) {
			// 	int cnt = senderCnt.get(sender) + 1;
			// 	senderCnt.put(sender, cnt);
			// } else {
			// 	senderCnt.put(sender, 1);
			// }

			senderCnt.compute(sender, (k, v) -> (v == null ? 0 : v) + 1);
			// senderCnt.computeIfPresent(sender, (k, v) -> v + 1);
			// senderCnt.computeIfAbsent(sender, k -> 1);
			senderAmt.compute(sender, (k, v) -> (v == null ? 0 : v) + amt);
			recieverAmt.compute(receiver, (k, v) -> (v == null ? 0 : v) + amt);
		}
		System.out.println("sendersByReceiver = " + sendersByReceiver);
		System.out.println("senderCnt" + senderCnt);
		System.out.println("senderAmt = " + senderAmt);
		System.out.println("recieverAmt = " + recieverAmt);

		System.out.print("1. ");
		for (Map.Entry<String, Set<String>> entry : sendersByReceiver.entrySet()) {
			System.out.printf("%s: %s\t", entry.getKey(), entry.getValue());
		}

		System.out.println();
		printMax(senderCnt, "2. 자주: %s (%d회)#n");
		printMax(senderCnt, "최고금액: %s (%d원)%n");
		printMax(recieverAmt, "3. %s: (%, d원)%n");
	}

	private static void printMax(Map<String, Integer> senderCnt, String fmtStr) {
		String key = "";
		int max = 0;
		for (Map.Entry<String, Integer> entry : senderCnt.entrySet()) {
			if (entry.getValue() > max) {
				key = entry.getKey();
				max = entry.getValue();
			}
		}
		System.out.printf(fmtStr, key, max);
	}
}
