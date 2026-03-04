package com.hana8.demo.post;

import java.util.List;

public interface PostsRepository {
	public List<Posts> findAll();
	public Posts find(Long id);
	public Posts createPost(PostDTO post);
	public Posts updatePost(PostDTO post);
	public int deletePost(Long id);

	void initialize();

	void destroy();
}
