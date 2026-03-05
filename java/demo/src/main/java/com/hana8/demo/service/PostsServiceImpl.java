package com.hana8.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hana8.demo.dto.Posts;
import com.hana8.demo.repository.PostsRepository;

@Service
public class PostsServiceImpl implements PostsService {
	public final PostsRepository repository;

	public PostsServiceImpl(PostsRepository repository) {
		this.repository = repository;
	}

	@Override
	public List<Posts> getList() {
		return repository.findAllPost();
	}

	@Override
	public Posts getPost(Integer id) {
		return repository.findPostById(id);
	}

	@Override
	public Integer createPost(Posts post) {
		return repository.createPost(post);
	}

	@Override
	public Posts editPost(Posts post) {
		return repository.updatePost(post);
	}

	@Override
	public Integer deletePost(Integer id) {
		return repository.deletePost(id);
	}
}
