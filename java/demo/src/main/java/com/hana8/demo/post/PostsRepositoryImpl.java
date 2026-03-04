package com.hana8.demo.post;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PostsRepositoryImpl implements PostsRepository {
	private final Map<Long, Posts> posts = new HashMap<>();

	@Override
	public List<Posts> findAll() {
		return this.posts.values().stream().toList();
	}

	@Override
	public Posts find(Long id) {
		return this.posts.get(id);
	}

	@Override
	public Posts createPost(PostDTO post) {
		Long id = posts.keySet().stream().max(Long::compareTo).orElse(0L) + 1;
		// Post newer = new Post();
		// newer.setId(id);
		// newer.setTitle(post.getTitle());

		Posts newer = Posts.builder().id(id).title(post.getTitle()).body(post.getBody()).writer(post.getWriter()).build();

		posts.put(id, newer);
		return newer;
	}

	@Override
	public Posts updatePost(PostDTO post) {
		Posts oldPost = posts.get(post.getId());
		oldPost.setTitle(post.getTitle());
		oldPost.setBody(post.getBody());
		oldPost.setWriter(post.getWriter());

		return oldPost;
	}

	@Override
	public int deletePost(Long id) {
		if (!posts.containsKey(id)) {
			return 0;
		}
		posts.remove(id);
		return 1;
	}

	public void initialize() {
		System.out.println("init: " + this + " / class = " + this.getClass());
		// System.out.println("-----------PostRepositoryImpl initialized");
	}

	public void destroy() {
		System.out.println("----------PostRepositoryImpl destroyed");
	}
}
