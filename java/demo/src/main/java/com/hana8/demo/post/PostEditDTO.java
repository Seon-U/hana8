package com.hana8.demo.post;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PostEditDTO {
	@NotNull(groups = onUpdate.class)
	private Long id;

	private String title;
	private String body;

	public interface onCreate {

	}

	public interface onUpdate {

	}
}
