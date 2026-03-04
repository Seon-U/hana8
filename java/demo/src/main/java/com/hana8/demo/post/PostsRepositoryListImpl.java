package com.hana8.demo.post;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

@Repository
@Primary
public class PostsRepositoryListImpl implements PostsRepository {
	private final List<Posts> posts = new ArrayList<>();

	@Override
	public List<Posts> findAll() {
		return posts;
	}

	@Override
	public Posts find(Long id) {
		return posts.stream().filter(post -> Objects.equals(post.getId(), id)).findFirst().orElse(null);
	}

	@Override
	public Posts createPost(PostDTO post) {
		Long id = posts.stream().mapToLong(Posts::getId).max().orElse(0) + 1;
		Posts newPost = Posts.builder().id(id).title(post.getTitle())
			.body(post.getBody()).writer(post.getWriter()).build();
		posts.add(newPost);
		return newPost;
	}

	@Override
	public Posts updatePost(PostDTO post) {
		Posts oldPost = find(post.getId());
		if (oldPost == null) {
			return null;
		}

		oldPost.setTitle(post.getTitle());
		oldPost.setBody(post.getBody());
		oldPost.setWriter(post.getWriter());

		return oldPost;

		// return posts.stream().filter(p -> p.getId() == post.getId()).findFirst().map(oldPost -> {
		// 	oldPost.setTitle(post.getTitle());
		// 	oldPost.setBody(post.getBody());
		// 	return oldPost;
		// }).orElse(null);
	}

	@Override
	public int deletePost(Long id) {
		Posts oldPost = find(id);
		if (oldPost == null) {
			return 0;
		}

		posts.remove(oldPost);
		return 1;
		// return posts.removeIf(post -> Objects.equals(post.getId(), id)) ? 1 : 0;
	}

	@Override
	public void initialize() {
		System.out.println("initialized PostRepositoryListImpl");
	}

	@Override
	public void destroy() {
		System.out.println("destroyed PostRepositoryListImpl");
	}
}
