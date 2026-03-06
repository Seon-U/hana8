package com.hana8.demo.post;

import java.util.List;

public interface PostsRepository {
	List<Posts> findAll();

	Posts find(Long id);

	Posts createPost(PostsDTO post);

	Posts updatePost(PostsDTO post);

	int deletePost(Long id);

	void initialize();

	void destroy();
}
