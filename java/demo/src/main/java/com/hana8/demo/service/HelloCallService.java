package com.hana8.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class HelloCallService implements GreetingService {
	private HelloService service;

	public HelloCallService() {}

	public String call() {
		return "Hello call service!";
	}

	// public GreetingService(HelloService service) {
	// 	this.service = service;
	// }

	@Autowired
	public void setService(HelloService service) {
		this.service = service;
	}

	public String sayHello() {
		return service.sayHello();
	}
}
