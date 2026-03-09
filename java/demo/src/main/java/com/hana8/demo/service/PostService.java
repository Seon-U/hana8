package com.hana8.demo.service;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.hana8.demo.dto.PostDTO;
import com.hana8.demo.dto.PostListDTO;
import com.hana8.demo.dto.ReplyDTO;
import com.hana8.demo.entity.Hashtag;
import com.hana8.demo.entity.Post;
import com.hana8.demo.entity.PostBody;
import com.hana8.demo.entity.QPost;
import com.hana8.demo.entity.Reply;
import com.hana8.demo.mapper.HashtagMapper;
import com.hana8.demo.mapper.PostMapper;
import com.hana8.demo.mapper.ReplyMapper;
import com.hana8.demo.repository.HashtagRepository;
import com.hana8.demo.repository.MemberRepository;
import com.hana8.demo.repository.PostRepository;
import com.hana8.demo.repository.ReplyRepository;
import com.querydsl.core.BooleanBuilder;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostService {
	private final PostRepository repository;
	private final ReplyRepository replyRepository;
	private final MemberRepository memberRepository;
	private final HashtagRepository hashtagRepository;

	private final PostMapper mapper;
	private final ReplyMapper replyMapper;
	private final HashtagMapper	hashtagMapper;

	public List<PostDTO> getPostList(PostListDTO dto) {
		PageRequest pager = PageRequest.of(
			dto.getPage() - 1, dto.getPageSize(),
			Sort.by("id").descending());

		// int page = dto.getPage() - 1;
		// if (page < 0) {
		// 	throw new IllegalArgumentException("page must be greater than 0");
		// }

		QPost post = QPost.post;
		BooleanBuilder bb = new BooleanBuilder();

		if (StringUtils.hasText(dto.getTitle())) {
			bb.and(post.title.contains(dto.getTitle()));
		}

		if (StringUtils.hasText(dto.getBody())) {
			bb.and(post.body.body.contains(dto.getBody()));
		}

		if (StringUtils.hasText(dto.getWriter())) {
			bb.and(post.writer.nickname.eq(dto.getWriter()));
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

		List<Post> posts = repository.findAll(bb, pager).getContent();
		return posts.stream().map(mapper::toDTO).toList();
	}

	public PostDTO createPost(PostDTO dto) {
		Post savedPost = repository.save(mapper.toEntity(dto));
		
		List<Hashtag> hashtags = dto.getHashtags().stream().map(h -> {
			Hashtag hashtag = hashtagRepository.findByTag(h.getTag()).orElseGet(() ->
				hashtagRepository.save(new Hashtag(h.getTag())));
			hashtag.addPost(savedPost);
			return hashtag;
		}).toList();

		// TODO loginedMemberId

		savedPost.setWriter(memberRepository.findById(dto.getWriter().getId()).orElseThrow());

		PostBody body = mapper.toEntity(dto.getBody());
		savedPost.setBody(body);

		PostDTO postDTO = mapper.toDTO(repository.save(savedPost));

		postDTO.setHashtags(hashtags.stream().map(hashtagMapper::toDTO).toList());
		return postDTO;
	}

	public PostDTO editPost(Long id, PostDTO post) {
		Post oldPost = repository.findById(id)
			.orElseThrow(() -> new IllegalArgumentException("Post #%d is not found!".formatted(id)));

		oldPost.setTitle(post.getTitle());
		oldPost.setBody(mapper.toEntity(post.getBody()));
		// oldPost.setWriter(post.getWriter());

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

		PostDTO dto = mapper.toDTO(post);
		dto.setReplies(replyMapper.toDTOList(replyRepository.findAllByPostId(id)));
		return dto;
	}

	public ReplyDTO getReply(Long id) {
		return replyMapper.toDTO(replyRepository.findById(id)
			.orElseThrow(() -> new IllegalArgumentException(
				"Reply #%d is not found!".formatted(id))));
	}

	public List<ReplyDTO> getReplies(Long postId) {
		List<Reply> replies = replyRepository.findAllByPostId(postId);
		return replyMapper.toDTOList(replies);
		// replyRepository.findAllByPostId(postId).stream()
		// 	.map(replyMapper::toDTO).toList();
	}

	public ReplyDTO addReply(ReplyDTO dto) {
		Post post = repository.findById(dto.getPostId()).orElseThrow();
		Reply reply = replyMapper.toEntity(dto);
		reply.setPost(post);

		reply.setReplier(memberRepository.findById(dto.getReplier().getId()).orElseThrow());
		return replyMapper.toDTO(replyRepository.save(reply));
	}

	public ReplyDTO editReply(ReplyDTO dto) {
		Reply reply = replyRepository.findById(dto.getId())
			.orElseThrow(() -> new IllegalArgumentException("Reply #%d is not found!".formatted(dto.getId())));

		reply.setReply(dto.getReply());
		return replyMapper.toDTO(replyRepository.save(reply));
	}

	public int removeReply(Long id) {
		replyRepository.findById(id).orElseThrow();
		return replyRepository.deleteByReplyId(id);
	}
}
