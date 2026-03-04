package com.hana8.demo.post;

import java.util.List;

public interface PostsService {
	public List<Posts> getList(boolean isList);
	public Posts getPost(Long id, boolean isList);
	public Posts addPost(PostDTO post, boolean isList);
	public Posts editPost(PostDTO post, boolean isList);
	public int removePost(Long id, boolean isList);
}
