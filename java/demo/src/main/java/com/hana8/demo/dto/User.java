package com.hana8.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class User {
	private Integer id;
	private String username;
	private String email;
	private String tel;
}
