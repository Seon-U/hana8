package com.hana8.demo.repository;

import java.util.List;

import com.hana8.demo.dto.Posts;

public interface PostsRepository {
	List<Posts> findAllPost();

	Posts findPostById(Integer id);

	Integer createPost(Posts post);

	Posts updatePost(Posts post);

	Integer deletePost(Integer id);
}
