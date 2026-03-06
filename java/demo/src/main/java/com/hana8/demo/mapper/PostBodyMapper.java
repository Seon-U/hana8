package com.hana8.demo.mapper;

import org.mapstruct.Mapper;

import com.hana8.demo.dto.PostBodyDTO;
import com.hana8.demo.entity.PostBody;

@Mapper(componentModel = "spring")
public interface PostBodyMapper {
	PostBodyDTO toDTO(PostBody post);

	PostBody toEntity(PostBodyDTO dto);
}
