package com.hana8.demo.service;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;

import org.flywaydb.core.internal.util.StringUtils;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.hana8.demo.dto.PostListDTO;
import com.hana8.demo.entity.Post;
import com.hana8.demo.entity.QPost;
import com.hana8.demo.mapper.PostMapper;
import com.hana8.demo.post.PostDTO;
import com.hana8.demo.repository.PostRepository;
import com.querydsl.core.BooleanBuilder;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostService {
	private final PostRepository repository;
	private final PostMapper mapper;

	public List<PostDTO> getPostList(PostListDTO dto) {
		System.out.println("dto = " + dto);
		int page = dto.getPage() - 1;
		if (page < 0) {
			throw new IllegalArgumentException("page must be greater than 0");
		}
		Pageable pageable = PageRequest.of(page,
			dto.getPageSize(), Sort.by("id").descending());

		BooleanBuilder bb = new BooleanBuilder();

		QPost post = QPost.post;
		if (StringUtils.hasText(dto.getTitle())) {
			bb.and(post.title.contains(dto.getTitle()));
		}

		if (StringUtils.hasText(dto.getBody())) {
			bb.and(post.body.contains(dto.getBody()));
		}

		if (StringUtils.hasText(dto.getWriter())) {
			bb.and(post.writer.eq(dto.getWriter()));
		}

		if (StringUtils.hasText(dto.getWritedate())) {
			ZoneId zone = ZoneId.of("Asia/Seoul");
			// LocalDateTime start = dto.parseWritedate().atStartOfDay();
			ZonedDateTime start = dto.parseWritedate().atStartOfDay(zone);
			// LocalDateTime end = dto.parseWritedate().atTime(LocalTime.MAX);
			// LocalDateTime end = dto.parseWritedate().plusDays(1).atStartOfDay();
			ZonedDateTime end = dto.parseWritedate().plusDays(1).atStartOfDay(zone);
			System.out.println("start, end = " + start + ',' + end);
			// bb.and(post.createdAt.between(start, end));
			bb.and(post.createdAt.goe(start.toLocalDateTime()).and(post.createdAt.lt(end.toLocalDateTime())));
		}

		List<Post> posts = repository.findAll(bb, pageable).getContent();
		return posts.stream().map(mapper::toDTO).toList();
	}

	public PostDTO createPost(PostDTO post) {
		return mapper.toDTO(repository.save(mapper.toEntity(post)));
	}

	public PostDTO editPost(Long id, PostDTO post) {
		Post oldPost = repository.findById(id)
			.orElseThrow(() -> new IllegalArgumentException("Post #%d is not found!".formatted(id)));

		oldPost.setTitle(post.getTitle());
		oldPost.setBody(post.getBody());
		oldPost.setWriter(post.getWriter());

		return mapper.toDTO(repository.save(oldPost));
	}

	public int removePost(Long id) {
		repository.findById(id)
			.orElseThrow(() -> new IllegalArgumentException("Post #%d is not found!".formatted(id)));

		return repository.deletePost(id);
	}

	public PostDTO getPost(Long id) {
		Post post = repository.findById(id)
			.orElseThrow(() -> new IllegalArgumentException("Post #%d is not found!".formatted(id)));
		return mapper.toDTO(post);
	}
}
