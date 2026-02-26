package com.hana8.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;

import com.hana8.demo.post.PostRepository;
import com.hana8.demo.post.PostRepositoryImpl;
import com.hana8.demo.post.PostRepositoryListImpl;
import com.hana8.demo.post.PostService;
import com.hana8.demo.post.PostServiceImpl;
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
	public PostRepository postRepositoryT() {
		return new PostRepositoryImpl();
	}

	@Bean(initMethod = "initialize", destroyMethod = "destroy")
	public PostRepository postRepositoryTList() {
		return new PostRepositoryListImpl();
	}

	@Bean
	public PostService postServiceT() {
		return new PostServiceImpl(postRepositoryT(), postRepositoryTList());
	}
}
