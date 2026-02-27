package com.hana8.demo.post;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostDTO {
	@NotNull(groups = OnUpdate.class, message = "수정할 게시글 id를 입력하세요!")
	private Long id;

	@NotBlank(message = "제목은 필수값입니다.")
	private String title;

	@NotNull
	@Size(min = 3, max = 30)
	@Pattern(regexp = "^[a-zA-Z]+")
	private String writer;

	private String body;

	public interface OnCreate {
	}

	public interface OnUpdate {
	}
}
