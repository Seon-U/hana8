package com.hana8.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hana8.demo.entity.Hashtag;

public interface HashtagRepository extends JpaRepository<Hashtag, Long> {
	Optional<Hashtag> findByTag(String tag);

	// @Query("select h from Hashtag h join hashtagPosts p on h.id = p.hashtag where h.id = :id")
	// List<Hashtag> findByHashtagId(@Param("id") Long id);
}
