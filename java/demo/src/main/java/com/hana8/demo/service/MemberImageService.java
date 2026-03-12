package com.hana8.demo.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.NoSuchElementException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.geometry.Positions;

import com.hana8.demo.entity.MemberImage;
import com.hana8.demo.repository.MemberImageRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class MemberImageService {
	private final MemberImageRepository memberImageRepository;
	@Value("${upload.path}")
	private String uploadPath;

	@Value("${upload.secure}")
	private String securePath;

	public MemberImageService(MemberImageRepository memberImageRepository) {
		this.memberImageRepository = memberImageRepository;
	}

	private Path getTodayPath() {
		LocalDateTime now = LocalDateTime.now();
		String path = String.format("%4d/%02d/%02d", now.getYear(), now.getMonthValue(), now.getDayOfMonth());
		return Paths.get(path);
	}

	public MultipartFile saveMemberImage(MultipartFile file) {
		String savedName = upload(file);//
		//SET image
		memberImageRepository.save(new MemberImage(savedName, file));
		//TODO: upload file and save it to MemberImage Entity

		return file;
	}

	public String upload(MultipartFile file) {
		Path todayPath = getTodayPath();
		return upload(file, todayPath);
	}


	public String upload(MultipartFile file, Path filePath) {
		if (file.isEmpty() || file.getOriginalFilename() == null)
			throw new IllegalArgumentException("파일이 비어있습니다.");

		// 원본 파일명
		String originalFilename = file.getOriginalFilename();

		// 확장자 추출
		String ext = originalFilename.substring(
			originalFilename.lastIndexOf("."));

		// UUID로 파일명 중복 방지
		String savedFilename = UUID.randomUUID() + ext;
		// String savedFilename = UUID.randomUUID() + "_" + originalFilename";

		// 저장 경로
		Path savePath = filePath.resolve(savedFilename);
		Path thumbPath = filePath.resolve("thumb_" + savedFilename);
		try {
			// 디렉토리 없으면 생성
			Files.createDirectories(savePath.getParent());

			// 파일 저장
			file.transferTo(savePath);

			String contentType = file.getContentType();
			System.out.println("contentType = " + contentType);
			if (contentType != null && contentType.startsWith("image/")) {
				Thumbnails.of(savePath.toFile())
					.size(200, 200)
					.crop(Positions.CENTER)
					.outputQuality(0.8)
					.toFile(thumbPath.toFile());
			}
		} catch (IOException e) {
			throw new RuntimeException("파일 저장 실패", e);
		}
		return savedFilename;
	}

	public ResponseEntity<Resource> download(String filename, boolean inline, boolean isSecure) {
		Path filePath = Paths.get(isSecure ? securePath : uploadPath, filename);
		Resource resource = new FileSystemResource(filePath);

		if (!resource.exists())
			throw new NoSuchElementException("파일을 찾을 수 없습니다: " + filename);

		// Content-Type 자동 감지
		String contentType;
		try {
			contentType = Files.probeContentType(filePath);
		} catch (IOException e) {
			contentType = "application/octet-stream";
		}  // 모르면 기본값

		String disposition = (inline ? "inline" : "attachment") + "; filename=\"" + filename + "\"";
		return ResponseEntity.ok()
			.contentType(MediaType.parseMediaType(contentType))
			.header(HttpHeaders.CONTENT_DISPOSITION, disposition)
			.body(resource);
	}

	public void delete(String filename) {
		Path filePath = Paths.get(uploadPath, filename).normalize(); // /src/upload/../../x ⇒ /x

		if (!Files.exists(filePath))
			throw new NoSuchElementException("파일을 찾을 수 없습니다: " + filename);

		if (!filePath.startsWith(Paths.get(uploadPath)))
			throw new IllegalArgumentException("잘못된 파일 경로입니다!");

		try {
			Files.delete(filePath);

			// 썸네일도 삭제
			Path thumbPath = Paths.get(uploadPath, "thumb_" + filename);
			if (Files.exists(thumbPath))
				Files.delete(thumbPath);

		} catch (IOException e) {
			throw new RuntimeException("파일 삭제 실패", e);
		}
	}
}
