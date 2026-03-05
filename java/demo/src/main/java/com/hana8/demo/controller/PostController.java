package com.hana8.demo.controller;

import java.util.List;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hana8.demo.post.PostDTO;
import com.hana8.demo.service.PostService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/posts")
@RequiredArgsConstructor
public class PostController {
	private final PostService service;

	@GetMapping("/{id}")
	public PostDTO getPost(@PathVariable Long id) {
		return service.getPost(id);
	}

	@GetMapping("")
	public List<PostDTO> getPostList(
		@RequestParam int page, @RequestParam int pageSize
	) {
		return service.getPostList(page, pageSize);
	}

	@PostMapping
	public PostDTO createPost(@Validated(PostDTO.OnCreate.class) @RequestBody PostDTO post) {
		return service.createPost(post);
	}

	@PutMapping("/{id}")
	public PostDTO editPost(@PathVariable Long id, @Validated(PostDTO.OnUpdate.class) @RequestBody PostDTO post) {
		return service.editPost(id, post);
	}

	@DeleteMapping("/{id}")
	public int removePost(@PathVariable Long id) {
		return service.deletePost(id);
	}
}
