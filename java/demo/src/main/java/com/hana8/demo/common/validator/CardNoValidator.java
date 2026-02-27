package com.hana8.demo.common.validator;

import java.util.regex.Pattern;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class CardNoValidator implements
	ConstraintValidator<CardNo, String> {
	@SuppressWarnings("checkstyle:OperatorWrap")
	private static final Pattern pattern = Pattern.compile("^\\d{10,19}$");

	@Override
	public boolean isValid(String value, ConstraintValidatorContext ctx) {
		if (value == null || value.isBlank()) {
			return true;
		}
		// 공백, 하이픈 제거
		String normalized = value.replaceAll("[\\s-]", "");

		// 1차: 숫자 길이 검증
		if (!pattern.matcher(normalized).matches()) {
			return false;
		}
		// 2차: Luhn 알고리즘 검증
		return luhn(normalized);
	}


	// 세계표준 10 ~ 19 카드번호 체크 알고리즘(Luhn)
	private boolean luhn(String cardno) {
		int sum = 0;
		boolean alternate = false;

		for (int i = cardno.length() - 1; i >= 0; i--) {
			int digit = cardno.charAt(i) - '0';

			if (alternate) {
				digit *= 2;
				if (digit > 9)
					digit -= 9;
			}

			sum += digit;
			alternate = !alternate;
		}

		System.out.println(sum % 10);
		return sum % 10 == 0;
	}

}
