package com.hana8.demo.service;

import java.util.List;

import com.hana8.demo.dto.Post;

public interface PostService {
	List<Post> getList();

	Post getPost(Integer id);

	Integer createPost(Post post);

	Post editPost(Post post);

	Integer deletePost(Integer id);
}
