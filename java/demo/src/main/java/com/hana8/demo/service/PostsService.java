package com.hana8.demo.service;

import java.util.List;

import com.hana8.demo.dto.Posts;

public interface PostsService {
	List<Posts> getList();

	Posts getPost(Integer id);

	Integer createPost(Posts post);

	Posts editPost(Posts post);

	Integer deletePost(Integer id);
}
