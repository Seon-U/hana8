package com.hana8.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ControllerExcetionHandler {
	@ExceptionHandler(IllegalArgumentException.class)
	public ResponseEntity<String> handleIllegalExceptionHandler(IllegalArgumentException e) {
		String message = e.getMessage();
		return ResponseEntity.badRequest().body("Warn: " + message);
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<String> handleOtherExceptionHandler(Exception e) {
		String message = e.getMessage();
		return ResponseEntity.internalServerError().body("Error: " + message);
	}
}
