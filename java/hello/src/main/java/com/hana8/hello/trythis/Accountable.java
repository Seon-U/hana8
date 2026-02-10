package com.hana8.hello.trythis;

import java.math.BigDecimal;
import java.math.RoundingMode;

interface Transferable {
	void transferTo(Accountable target, BigDecimal val);
}

interface Withdrawable {
	void withdraw(BigDecimal val);
}

public class Accountable {
	public static int sequance = 0;

	private final int id;
	String name;
	BigDecimal balance;

	public Accountable(String name, BigDecimal balance) {
		this.id = sequance++;
		this.name = name;
		this.balance = balance;
	}

	public static void main(String[] args) {
		DemandDepositAccount freeInout = new DemandDepositAccount("Free Inout", BigDecimal.ZERO);
		ReqularInput monthlyMoney = new ReqularInput("Monthly Money", BigDecimal.ZERO);
		Accountable pensionMoney = new Accountable("Pension Money", BigDecimal.ZERO);

		Accountable[] accounts = new Accountable[] {freeInout, monthlyMoney, pensionMoney};

		for (Accountable account : accounts) {
			System.out.printf("name = %s, balance = %s\n", account.name, account.balance);
		}

		freeInout.contribute(new BigDecimal(100000));
		freeInout.transferTo(monthlyMoney, BigDecimal.valueOf(50000));
		freeInout.transferTo(pensionMoney, BigDecimal.valueOf(50000));
		freeInout.withdraw(freeInout.balance.divide(BigDecimal.valueOf(2), RoundingMode.HALF_UP));

		for (Accountable account : accounts) {
			System.out.printf("name = %s, balance = %s\n", account.name, account.balance);
		}

		monthlyMoney.contribute(BigDecimal.valueOf(10000));
		monthlyMoney.contribute(BigDecimal.valueOf(50000));

		//만기 처리
		// 계좌 따로 잡아야 하나?
		monthlyMoney.transferTo(freeInout, freeInout.balance);

		for (Accountable account : accounts) {
			System.out.printf("name = %s, balance = %s\n", account.name, account.balance);
		}
	}

	void contribute(BigDecimal amount) {
		balance = balance.add(amount);
	}
}

class DemandDepositAccount extends Accountable implements Transferable, Withdrawable {

	public DemandDepositAccount(String name, BigDecimal balance) {
		super(name, balance);
	}

	@Override
	public void withdraw(BigDecimal val) {
		this.balance = balance.subtract(val);
	}

	@Override
	public void transferTo(Accountable target, BigDecimal val) {
		this.balance = balance.subtract(val);
		target.balance = balance.add(val);
	}
}

class ReqularInput extends Accountable implements Transferable {
	private boolean isMature = false;

	public ReqularInput(String name, BigDecimal balance) {
		super(name, balance);
	}

	@Override
	public void transferTo(Accountable target, BigDecimal val) {
		this.balance = balance.subtract(val);
		target.balance = balance.add(val);
		isMature = true;
	}
}
