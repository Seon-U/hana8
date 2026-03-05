package com.hana8.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hana8.demo.dto.Posts;
import com.hana8.demo.service.PostsService;

@RestController("/postsM")
@RequestMapping("/postsM")
public class PostsController {
	private final PostsService service;

	public PostsController(PostsService postService) {
		this.service = postService;
	}

	@GetMapping("")
	public List<Posts> getPostList() {
		return service.getList();
	}

	@GetMapping("/{id}")
	public Posts getPost(@PathVariable Integer id) {
		return service.getPost(id);
	}

	@PostMapping("")
	public Integer createPost(@RequestBody Posts post) {
		return service.createPost(post);
	}

	@PutMapping("/{id}")
	public Posts editPost(@PathVariable("id") Integer id, @RequestBody Posts post) {
		post.setId(id);
		return service.editPost(post);
	}

	@DeleteMapping("/{id}")
	public Integer deletePost(@PathVariable("id") Integer id) {
		return service.deletePost(id);
	}
}
