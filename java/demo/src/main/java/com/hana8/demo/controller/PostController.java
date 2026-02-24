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

import com.hana8.demo.dto.Post;
import com.hana8.demo.service.PostService;

@RestController("/posts")
@RequestMapping("/posts")
public class PostController {
	private final PostService service;

	public PostController(PostService postService) {
		this.service = postService;
	}

	@GetMapping("")
	public List<Post> getPostList() {
		return service.getList();
	}

	@GetMapping("/{id}")
	public Post getPost(@PathVariable Integer id) {
		return service.getPost(id);
	}

	@PostMapping("")
	public Integer createPost(@RequestBody Post post) {
		return service.createPost(post);
	}

	@PutMapping("/{id}")
	public Post editPost(@PathVariable("id") Integer id, @RequestBody Post post) {
		post.setId(id);
		return service.editPost(post);
	}

	@DeleteMapping("/{id}")
	public Integer deletePost(@PathVariable("id") Integer id) {
		return service.deletePost(id);
	}
}
