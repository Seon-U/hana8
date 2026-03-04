package com.hana8.demo.post;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;

import lombok.RequiredArgsConstructor;

// @Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
@RequiredArgsConstructor
public class PostsServiceImpl implements PostsService {
	private final PostsRepository repository;
	private final PostsRepository repositoryList;

	@Value("${default.writer}")
	private String defaultWriter;

	// @Autowired
	// public PostServiceImpl(PostRepository repository, PostRepository repositoryList) {
	// 	this.repository = repository;
	// 	this.repositoryList = repositoryList;
	// }

	@Override
	public List<Posts> getList(boolean isList) {
		return isList ? repositoryList.findAll() : repository.findAll();
	}

	@Override
	public Posts getPost(Long id, boolean isList) {
		return isList ? repositoryList.find(id) : repository.find(id);
	}

	@Override
	public Posts addPost(PostDTO post, boolean isList) {
		if (post.getWriter() == null) {
			post.setWriter(defaultWriter);
		}
		return isList ? repositoryList.createPost(post) : repository.createPost(post);
	}

	@Override
	public Posts editPost(PostDTO post, boolean isList) {
		return isList ? repositoryList.updatePost(post) : repository.updatePost(post);
	}

	@Override
	public int removePost(Long id, boolean isList) {
		return isList ? repositoryList.deletePost(id) : repository.deletePost(id);
	}
}
