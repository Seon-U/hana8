package com.hana8.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.hana8.demo.controller.HelloController;
import com.hana8.demo.service.GreetingService;
import com.hana8.demo.service.HelloService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@SpringBootApplication
public class DemoApplication {
	public static void main(String[] args) {
		ConfigurableApplicationContext ctx = SpringApplication.run(DemoApplication.class, args);

		HelloController helloController = ctx.getBean(HelloController.class);
		log.debug("{}", helloController.hello());

		HelloService helloService = ctx.getBean(HelloService.class);
		log.debug("helloService = {}", helloService.sayHello());

		HelloService helloService2 = (HelloService)ctx.getBean("hello-service");
		log.debug("helloService2 = {}", helloService2.sayHello());

		GreetingService greetingService = ctx.getBean(GreetingService.class);
		log.debug("greetingService = {}", greetingService.call());

	}

}
