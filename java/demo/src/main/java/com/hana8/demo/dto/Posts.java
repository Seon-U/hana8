package com.hana8.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class Posts {
	private int id;
	private String title;
	private String content;
	private int author;
}
