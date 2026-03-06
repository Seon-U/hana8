package com.hana8.demo.dto;

import java.time.LocalDateTime;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class PostRequestDTO {
	@NotNull(groups = OnUpdate.class, message = "수정할 게시글 id를 입력하세요!")
	private Long id;

	@NotBlank(message = "제목은 필수값입니다.")
	private String title;

	@NotBlank
	private String writer;

	private LocalDateTime createdAt;
	private LocalDateTime updatedAt;

	public interface OnCreate {
	}

	public interface OnUpdate {
	}
}
