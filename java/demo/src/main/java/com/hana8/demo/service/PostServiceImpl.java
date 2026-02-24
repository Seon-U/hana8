package com.hana8.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hana8.demo.dto.Post;
import com.hana8.demo.repository.PostRepository;

@Service
public class PostServiceImpl implements PostService {
	public final PostRepository repository;

	public PostServiceImpl(PostRepository repository) {
		this.repository = repository;
	}

	@Override
	public List<Post> getList() {
		return repository.findAllPost();
	}

	@Override
	public Post getPost(Integer id) {
		return repository.findPostById(id);
	}

	@Override
	public Integer createPost(Post post) {
		return repository.createPost(post);
	}

	@Override
	public Post editPost(Post post) {
		return repository.updatePost(post);
	}

	@Override
	public Integer deletePost(Integer id) {
		return repository.deletePost(id);
	}
}
