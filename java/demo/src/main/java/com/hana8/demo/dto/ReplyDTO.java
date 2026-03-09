package com.hana8.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReplyDTO {
	private Long id;

	private String reply;
	// private Long replierId;

	private MemberDTO replier;

	private Long postId;

	// @JsonBackReference
	// private PostDTO post;
}
