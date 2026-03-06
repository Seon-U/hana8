package com.hana8.demo.dto;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
public class PostDTO extends PostRequestDTO {
	@JsonManagedReference
	private PostBodyDTO body;

	@JsonManagedReference
	private ReplyDTO reply;
}
