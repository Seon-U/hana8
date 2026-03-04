package com.hana8.demo.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.hana8.demo.dto.Posts;

@Repository
public class PostsRepositoryImpl implements PostsRepository {
	private final List<Posts> posts = new ArrayList<>();

	@Override
	public List<Posts> findAllPost() {
		return posts;
	}

	@Override
	public Posts findPostById(Integer id) {
		return posts.stream().filter(post -> post.getId() == id).findFirst().orElse(null);
	}

	@Override
	public Integer createPost(Posts post) {
		int id = posts.stream().mapToInt(Posts::getId).max().orElse(0) + 1;
		post.setId(id);
		posts.add(post);
		return id;
	}

	@Override
	public Posts updatePost(Posts post) {
		return posts.stream().filter(p -> p.getId() == post.getId()).findFirst().map(oldPost -> {
			oldPost.setTitle(post.getTitle());
			oldPost.setContent(post.getContent());
			return oldPost;
		}).orElse(null);
	}

	@Override
	public Integer deletePost(Integer id) {
		return posts.removeIf(post -> post.getId() == id) ? 1 : 0;
	}
}
