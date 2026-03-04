package com.hana8.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;

import com.hana8.demo.post.PostsRepository;
import com.hana8.demo.post.PostsRepositoryImpl;
import com.hana8.demo.post.PostsRepositoryListImpl;
import com.hana8.demo.post.PostsService;
import com.hana8.demo.post.PostsServiceImpl;
import com.hana8.demo.service.HelpCallService;

@Configuration
@Lazy
@PropertySources({
	@PropertySource("classpath:db.properties"),
	@PropertySource("classpath:email.properties"),
	@PropertySource("classpath:default.properties")
})
public class SpringConfig {
	@Bean(initMethod = "initialize", destroyMethod = "destroy")
	public HelpCallService helpCallService() {
		return new HelpCallService();
	}

	@Bean(initMethod = "initialize", destroyMethod = "destroy")
	public PostsRepository postRepositoryT() {
		return new PostsRepositoryImpl();
	}

	@Bean(initMethod = "initialize", destroyMethod = "destroy")
	public PostsRepository postRepositoryTList() {
		return new PostsRepositoryListImpl();
	}

	@Bean
	public PostsService postServiceT() {
		return new PostsServiceImpl(postRepositoryT(), postRepositoryTList());
	}
}
