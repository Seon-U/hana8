package com.hana8.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

import com.hana8.demo.entity.Post;
import com.hana8.demo.entity.Reply;

import jakarta.transaction.Transactional;

public interface ReplyRepository extends JpaRepository<Reply, Long>, QuerydslPredicateExecutor<Post> {
	// List<Reply> findAllByPost(Post post);

	List<Reply> findAllByPostId(Long postId);

	@Query("delete from Reply where id = :id")
	@Transactional
	@Modifying
	int deleteByReplyId(Long id);
}
