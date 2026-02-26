package com.hana8.demo.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.hana8.demo.dto.Post;

@Repository
public class PostRepositoryImpl implements PostRepository {
	private final List<Post> posts = new ArrayList<>();

	@Override
	public List<Post> findAllPost() {
		return posts;
	}

	@Override
	public Post findPostById(Integer id) {
		return posts.stream().filter(post -> post.getId() == id).findFirst().orElse(null);
	}

	@Override
	public Integer createPost(Post post) {
		int id = posts.stream().mapToInt(Post::getId).max().orElse(0) + 1;
		post.setId(id);
		posts.add(post);
		return id;
	}

	@Override
	public Post updatePost(Post post) {
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
