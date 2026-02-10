package com.hana8.hello;

import java.math.BigDecimal;
import java.math.RoundingMode;

public enum Operation {
	PLUS('+') {
		@Override
		public BigDecimal apply(BigDecimal v1, BigDecimal v2) {
			return v1.add(v2);
		}
	}, MINUS('-') {
		@Override
		public BigDecimal apply(BigDecimal v1, BigDecimal v2) {
			return v1.subtract(v2);
		}
	}, MULTIPLY('*') {
		@Override
		public BigDecimal apply(BigDecimal v1, BigDecimal v2) {
			return v1.multiply(v2);
		}
	}, DIVIDE('/') {
		@Override
		public BigDecimal apply(BigDecimal v1, BigDecimal v2) {
			return v1.divide(v2, RoundingMode.HALF_UP);
		}
	};

	private final char cmd;

	Operation(char cmd) {
		this.cmd = cmd;
	}

	public boolean isMe(char cmd) {
		return this.cmd == cmd;
	}

	public abstract BigDecimal apply(BigDecimal v1, BigDecimal v2);

}
