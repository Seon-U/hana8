package com.hana8.demo.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class User {
	private Integer id;

	@NotBlank
	private String username;

	@Email
	private String email;

	@Pattern(regexp = "^[A-Za-z0-9_.]+@hanabank.com$", message = "사내 이메일 주소 형식이 잘못되었습니다!")
	private String comail;

	@Past
	private LocalDate birthdt;

	@Future
	private LocalDate deletedt;

	private String tel;
}
