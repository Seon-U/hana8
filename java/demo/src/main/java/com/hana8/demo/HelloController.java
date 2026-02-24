package com.hana8.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class HelloController {
	// private static final Logger log = LoggerFactory.getLogger(HelloController.class);

	@GetMapping("/")
	public String index() {
		return "hana8 Demo";
	}
	@GetMapping("/hello")
	public String hello() {
		return "Hello, World!";
	}

	@GetMapping("/hello-servlet")
	public String helloServlet(String name) {
		log.info("INFO: {} - {}", name, 123);
		log.debug("DEBUG" + "xxx" + "yyy");
		log.warn("WARN: www");
		log.error("ERROR!!");
		return "Hello~ " + name + "!!";
	}
}
