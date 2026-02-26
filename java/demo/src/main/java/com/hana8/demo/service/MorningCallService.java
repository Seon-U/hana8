package com.hana8.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class MorningCallService implements GreetingService {
	private HelloService service;

	public MorningCallService() {}

	public String call() {
		return "Morning call service!";
	}

	@Autowired
	public void setService(HelloService service) {
		this.service = service;
	}

	public String sayHello() {
		return service.sayHello();
	}
}
