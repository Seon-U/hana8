package com.hana8.demo.repository;

import java.util.List;

import com.hana8.demo.dto.Post;

public interface PostRepository {
	List<Post> findAllPost();

	Post findPostById(Integer id);

	Integer createPost(Post post);

	Post updatePost(Post post);

	Integer deletePost(Integer id);
}
