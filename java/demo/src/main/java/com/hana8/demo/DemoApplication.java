package com.hana8.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.hana8.demo.controller.GreetingController;
import com.hana8.demo.controller.HelloController;
import com.hana8.demo.post.PostRepositoryImpl;
import com.hana8.demo.post.PostServiceImpl;
import com.hana8.demo.service.EagerCallService;
import com.hana8.demo.service.HelloService;
import com.hana8.demo.service.HelpCallService;
import com.hana8.demo.service.LazyCallService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@SpringBootApplication
public class DemoApplication {
	public static void main(String[] args) {
		ConfigurableApplicationContext ctx = SpringApplication.run(DemoApplication.class, args);

		System.out.println("===== context ready =====");

		HelloController helloController = ctx.getBean(HelloController.class);
		log.debug("{}", helloController.hello());

		HelloService helloService = ctx.getBean(HelloService.class);
		log.debug("helloService = {}", helloService.sayHello());

		HelloService helloService2 = (HelloService)ctx.getBean("hello-service");
		log.debug("helloService2 = {}", helloService2.sayHello());

		// GreetingService greetingService = ctx.getBean(GreetingService.class);
		GreetingController greetingService = ctx.getBean(GreetingController.class);
		log.debug("greetingService = {}", greetingService.call());

		HelpCallService help = ctx.getBean(HelpCallService.class);
		log.debug("help = {}", help.call());

		LazyCallService lazy = ctx.getBean(LazyCallService.class);
		log.debug("lazy.name = {}", lazy.getName());
		log.debug("lazy.name = {}", lazy.getPassword());
		log.debug("lazy.emailName = {}", lazy.getEmailName());
		log.debug("lazy.emailPwd = {}", lazy.getEmailPassword());


		int eagerCallService1 = ctx.getBean(EagerCallService.class).hashCode();
		int eagerCallService2 = ctx.getBean(EagerCallService.class).hashCode();
		int eagerCallService3 = ctx.getBean(EagerCallService.class).hashCode();

		System.out.println("eagerCallService1 = " + eagerCallService1);
		System.out.println("eagerCallService2 = " + eagerCallService2);
		System.out.println("eagerCallService3 = " + eagerCallService3);

		PostServiceImpl post = ctx.getBean(PostServiceImpl.class);
		PostRepositoryImpl postRepository = ctx.getBean(PostRepositoryImpl.class);

		System.out.println("postService = " + post);
		System.out.println("postRepository = " + postRepository);
	}

}
