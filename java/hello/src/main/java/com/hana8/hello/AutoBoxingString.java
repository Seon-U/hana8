package com.hana8.hello;

import java.util.Arrays;

public class AutoBoxingString {
	public static void main(String[] args) {
		// Integer iObj = new Integer(100); deprecated auto-boxing internal processing
		//wrapper class
		Integer iObj = 100;
		System.out.println("iObj.byteValue() = " + iObj.byteValue());
		int i1 = iObj;

		String email = "hong@gmail.com";
		int idxAt = email.indexOf('@');
		System.out.println("idxAt = " + idxAt);
		String name = email.substring(0, idxAt);
		System.out.println("name = " + name);
		String domain = email.substring(idxAt + 1);
		System.out.println("domain = " + domain);

		String[] nameDomain = email.split("@");
		System.out.println("nameDomain = " + Arrays.toString(nameDomain));
		String name1 = nameDomain[0];

		for (String stri : email.split("@")) {
			System.out.println("str1" + stri);
		}
		boolean contains = email.contains("@");
		System.out.println("contains = " + contains);

	}
}
