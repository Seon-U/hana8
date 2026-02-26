package com.hana8.demo.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component
@Lazy
@Setter
@Getter
public class LazyCallService {
	@Value("${db.name}")
	private String name;

	@Value("${db.password}")
	private String password;

	@Value("${db.user}")
	private String user;

	@Value("${email.user}")
	private String emailName;

	@Value("${email.password}")
	private String emailPassword;

	public LazyCallService() {
		System.out.println("------------------LazyCallService!");
	}

	public String call() {
		return "Lazy Call Service!";
	}
}
