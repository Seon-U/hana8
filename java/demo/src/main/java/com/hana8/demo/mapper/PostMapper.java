package com.hana8.demo.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.hana8.demo.dto.PostBodyDTO;
import com.hana8.demo.dto.PostDTO;
import com.hana8.demo.entity.Post;
import com.hana8.demo.entity.PostBody;

@Mapper(componentModel = "spring")
public interface PostMapper {
	@Mapping(target = "replies", ignore = true)
	PostDTO toDTO(Post post);

	@Mapping(target = "body", ignore = true)
	@Mapping(target = "replies", ignore = true)
	Post toEntity(PostDTO dto);

	@Mapping(target = "post", ignore = true)
	PostBody toEntity(PostBodyDTO dto);
}
