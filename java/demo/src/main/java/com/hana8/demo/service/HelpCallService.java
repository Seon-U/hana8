package com.hana8.demo.service;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class HelpCallService implements GreetingService {
	@Override
	public String call() {
		return "Hellp call service!";
	}

	@Override
	public String sayHello() {
		return "Help!";
	}

	public void initialize() {
		System.out.println("HelpCallService initialization!");
	}

	public void destroy() {
		System.out.println("HelpCallService destroyer!");
	}
}
