package com.hana8.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class GreetingService {
	private HelloService service;

	public  GreetingService() {}

	@Autowired
	public void setService(HelloService service) {
		this.service = service;
	}

	// public GreetingService(HelloService service) {
	// 	this.service = service;
	// }


	public String call() {
		return "Morning call service!";
	}

	public String sayHello() {
		return service.sayHello();
	}
}
