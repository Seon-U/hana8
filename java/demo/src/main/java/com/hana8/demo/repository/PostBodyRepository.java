package com.hana8.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

import com.hana8.demo.entity.Post;
import com.hana8.demo.entity.PostBody;

public interface PostBodyRepository extends JpaRepository<PostBody, Long>, QuerydslPredicateExecutor<Post> {
}
