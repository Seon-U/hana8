package com.hana8.hello.trythis;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.Set;

public class GetTransferRes {
	public static void main(String[] args) {
		String logline = """
				1001,Hong,Choi,5000
				1002,Lee,Park,20000
				1003,Hong,Jade,10000
				1004,Kim,Park,20000
				1005,Lee,Choi,5000
				1006,Hong,Choi,5000
			""";
		ArrayList<TransferLog> logs = getTransferLogs(logline);

		// sender list and receiver list
		printRecieverSenderList(logs);

		printMaxSender(logs);

		printMaxReciever(logs);

	}

	private static void printMaxReciever(ArrayList<TransferLog> logs) {
		HashMap<String, BigDecimal> recieverMap = new HashMap<>();
		for (TransferLog log : logs) {
			if (recieverMap.get(log.receiver) == null) {
				recieverMap.put(log.receiver, log.amount);
			} else {
				recieverMap.put(log.receiver, recieverMap.get(log.receiver).add(log.amount));
			}
		}

		BigDecimal maxMoney = new BigDecimal(0);
		String maxMoneyReciever = "";
		for (String receiver : recieverMap.keySet()) {
			BigDecimal money = recieverMap.get(receiver);
			if (maxMoney.compareTo(money) < 0) {
				maxMoney = money;
				maxMoneyReciever = receiver;
			}
		}
		System.out.printf("%s (%.0f원)", maxMoneyReciever, maxMoney);
	}

	private static ArrayList<TransferLog> getTransferLogs(String logline) {
		ArrayList<TransferLog> logs = new ArrayList<>();
		String[] loglines = logline.trim().split("\n");
		for (String log : loglines) {
			String[] splitedLog = log.trim().split(",");
			logs.add(new TransferLog(Integer.parseInt(splitedLog[0]), splitedLog[1], splitedLog[2],
				new BigDecimal(splitedLog[3])));
		}

		System.out.println(logs);
		return logs;
	}

	private static void printMaxSender(ArrayList<TransferLog> logs) {
		HashMap<String, SenderStat> senderStatMap = new HashMap<>();
		int maxCount = 0;
		BigDecimal maxTotalAmount = new BigDecimal(0);
		String maxTotalAmountSender = "";
		String maxCountSender = "";

		for (TransferLog log : logs) {
			if (senderStatMap.get(log.sender) == null) {
				senderStatMap.put(log.sender, new SenderStat(1, log.amount));
			} else {
				senderStatMap.get(log.sender).count++;
				senderStatMap.get(log.sender).totalAmount = senderStatMap.get(log.sender).totalAmount.add(log.amount);
			}
		}

		for (String sender : senderStatMap.keySet()) {
			SenderStat stat = senderStatMap.get(sender);
			if (stat.count > maxCount) {
				maxCount = stat.count;
				maxCountSender = sender;
			}
			if (stat.totalAmount.compareTo(maxTotalAmount) > 0) {
				maxTotalAmount = stat.totalAmount;
				maxTotalAmountSender = sender;
			}
		}
		System.out.printf("자주: %s (%d회), 최고금액: %s (%s원)%n", maxCountSender, maxCount, maxTotalAmountSender,
			maxTotalAmount);
	}

	private static void printRecieverSenderList(ArrayList<TransferLog> logs) {
		HashMap<String, Set<String>> receiverSenderMap = new HashMap<>();

		for (TransferLog log : logs) {
			Set<String> senderSet = receiverSenderMap.get(log.receiver);
			if (senderSet == null) {
				senderSet = new LinkedHashSet<String>();
				receiverSenderMap.put(log.receiver, senderSet);
			}
			senderSet.add(log.sender);
		}

		for (String receiver : receiverSenderMap.keySet()) {
			System.out.printf("%s: ", receiver);
			Set<String> senderList = receiverSenderMap.get(receiver);
			boolean isFirst = true;
			for (String sender : senderList) {
				if (isFirst) {
					System.out.printf("%s", sender);
				} else {
					System.out.printf(", %s", sender);
				}
				isFirst = false;
			}
			System.out.println();
		}
	}

	public static class TransferLog {
		private final int id;
		private final String receiver;
		private final String sender;
		private final BigDecimal amount;

		TransferLog(int id, String receiver, String sender, BigDecimal amount) {
			this.id = id;
			this.receiver = receiver;
			this.sender = sender;
			this.amount = amount;
		}

		@Override
		public String toString() {
			return "TransferLog{" + "id=" + id + ", sender='" + sender + '\'' + ", receiver='" + receiver + '\''
				+ ", amount=" + amount + '}' + "\n";
		}
	}

	public static class SenderStat {
		int count;
		BigDecimal totalAmount;

		SenderStat(int count, BigDecimal totalAmount) {
			this.count = count;
			this.totalAmount = totalAmount;
		}
	}
}
