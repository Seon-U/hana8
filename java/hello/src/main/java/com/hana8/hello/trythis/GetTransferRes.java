package com.hana8.hello.trythis;

import java.util.ArrayList;
import java.util.HashSet;

public class GetTransferRes {
	public static void main(String[] args) {
		ArrayList<TransferLog> logs = new ArrayList<>();
		// 1001,Hong,Choi,5000
		// 1002,Lee,Park,20000
		// 1003,Hong,Jade,10000
		// 1004,Kim,Park,20000
		// 1005,Lee,Choi,5000
		// 1006,Hong,Choi,5000
		logs.add(new TransferLog(1001, "Hong", "Choi", 5000));
		logs.add(new TransferLog(1002, "Lee", "Park", 20000));
		logs.add(new TransferLog(1003, "Hong", "Jade", 10000));
		logs.add(new TransferLog(1004, "Kim", "Park", 20000));
		logs.add(new TransferLog(1005, "Lee", "Choi", 5000));
		logs.add(new TransferLog(1006, "Hong", "Choi", 5000));

		// System.out.println(logs);

		// sender list and receiver list
		printRecieverSenderList(logs);

		printMaxSender(logs);

		printMaxReciever(logs);

	}

	private static void printMaxReciever(ArrayList<TransferLog> logs) {
		HashSet<String> recieverSet = new HashSet<>();
		for (TransferLog log : logs) {
			recieverSet.add(log.receiver);
		}

		double maxMoney = 0;
		String maxMoneyReciever = "";
		for (String receiver : recieverSet) {
			double money = 0;
			for (TransferLog log : logs) {
				if (receiver.equals(log.receiver)) {
					money += log.amount;
				}
			}
			if (maxMoney < money) {
				maxMoney = money;
				maxMoneyReciever = receiver;
			}
		}
		System.out.printf("%s (%.0f원)", maxMoneyReciever, maxMoney);
	}

	private static void printMaxSender(ArrayList<TransferLog> logs) {
		HashSet<String> senderSet = new HashSet<>();
		for (TransferLog log : logs) {
			senderSet.add(log.sender);
		}
		int maxCount = 0;
		String maxSender = "";
		String maxMoneySender = "";
		double maxMoney = 0;
		for (String sender : senderSet) {
			int count = 0;
			double money = 0;
			for (TransferLog log : logs) {
				if (sender.equals(log.sender)) {
					count++;
					money += log.amount;
				}
			}
			if (maxCount < count) {
				maxCount = count;
				maxSender = sender;
			}
			if (maxMoney < money) {
				maxMoney = money;
				maxMoneySender = sender;
			}
		}
		System.out.printf("자주: %s (%d회), 최고금액: %s (%.0f원)%n", maxSender, maxCount, maxMoneySender, maxMoney);
	}

	private static void printRecieverSenderList(ArrayList<TransferLog> logs) {
		HashSet<String> receiverList = new HashSet<>();
		for (TransferLog log : logs) {
			receiverList.add(log.receiver);
		}

		for (String receiver : receiverList) {
			HashSet<String> senderList = new HashSet<>();
			System.out.printf("%s: ", receiver);
			for (TransferLog log : logs) {
				if (receiver.equals(log.receiver)) {
					senderList.add(log.sender);
				}
			}
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
		int id;
		String receiver;
		String sender;
		double amount;

		TransferLog(int id, String receiver, String sender, double amount) {
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
}
