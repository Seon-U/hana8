package com.hana8.demo.repository;

import static org.assertj.core.api.Assertions.*;

import java.util.List;
import java.util.stream.LongStream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;

import com.hana8.demo.entity.Post;
import com.hana8.demo.entity.PostBody;

/**
 * [설계 원칙]
 * - 모든 테스트는 개별 실행 가능 (순서 무관, static 상태 공유 없음)
 * - 각 테스트가 자신이 필요한 데이터를 직접 생성하고, 직접 검증
 * - @Order, @TestMethodOrder 불필요
 * - @Rollback(true) 기본 동작 활용 → 테스트 간 데이터 간섭 없음
 *
 * BaseRepositoryTest에 @Rollback(false)가 있다면
 * 이 클래스에서 @Rollback(true)로 오버라이드하거나,
 * BaseRepositoryTest 대신 직접 어노테이션을 선언할 수 있음
 */
@Rollback(true)
class PostRepositoryTestModul extends BaseRepositoryTest {

	@Autowired
	private PostRepository repository;

	// -------------------------------------------------------
	// 헬퍼: 테스트용 Post를 생성하고 DB에 저장까지 완료
	// 여러 테스트에서 반복되는 "데이터 준비" 로직을 한 곳에서 관리
	// -------------------------------------------------------
	private Post createAndSavePost(String title, String writer, String body) {
		PostBody newbody = new PostBody(body);

		Post post = Post.builder()
			.title(title)
			.writer(writer)
			.body(newbody)
			.build();

		return repository.save(post);
	}

	@Test
	void createTest() {
		long countBefore = repository.count();

		Post saved = createAndSavePost("going home", "seonu", "I'm gonna home today~");

		// ID가 자동 할당되었는지
		assertThat(saved.getId()).isNotNull();

		// DB에서 다시 조회하여 일치 확인
		Post found = repository.findById(saved.getId()).orElseThrow();
		assertThat(found.getTitle()).isEqualTo("going home");
		assertThat(found.getWriter()).isEqualTo("seonu");
		assertThat(found.getBody()).isEqualTo("I'm gonna home today~");

		// count가 1 증가했는지
		assertThat(repository.count()).isEqualTo(countBefore + 1);
	}

	@Test
	void readTest() {
		// 자체 데이터 준비
		createAndSavePost("read test title", "reader", "read body");

		List<Post> all = repository.findAll();

		assertThat(all).isNotEmpty();
		assertThat(all).hasSize((int) repository.count());

		// 방금 넣은 데이터가 목록에 존재하는지
		assertThat(all)
			.extracting(Post::getTitle)
			.contains("read test title");
	}

	@Test
	void updateTest() {
		// 자체 데이터 준비
		Post saved = createAndSavePost("before update", "updater", "update body");

		// 수정
		saved.setTitle("after update");
		repository.saveAndFlush(saved);

		// DB에서 재조회하여 반영 확인
		Post updated = repository.findById(saved.getId()).orElseThrow();
		assertThat(updated.getTitle()).isEqualTo("after update");
	}

	@Test
	void deleteTest() {
		// 자체 데이터 준비
		Post saved = createAndSavePost("to be deleted", "deleter", "delete body");
		long countAfterSave = repository.count();

		// 삭제
		repository.delete(saved);

		// 삭제 확인
		assertThat(repository.findById(saved.getId())).isEmpty();
		assertThat(repository.count()).isEqualTo(countAfterSave - 1);
	}

	@Test
	void createAllTest() {
		long countBefore = repository.count();
		List<Post> posts = LongStream.rangeClosed(1, 50)
			.mapToObj(l -> {
				PostBody newbody = new PostBody("bulk body" + l);
				Post post = Post.builder()
						.title("Bulk Title " + l)
						.body(newbody)
						.writer("writer" + l)
						.build();

				newbody.setPost(post);
				return post;
				}).toList();

		repository.saveAll(posts);

		assertThat(repository.count()).isEqualTo(countBefore + 50);
	}

	/**
	 * CRUD 전체 흐름을 한 번에 검증하고 싶을 때
	 * 하나의 메서드 안에서 수행하면 순서 의존 문제가 원천 차단됨
	 */
	@Test
	void crudFlowTest() {
		long countBefore = repository.count();

		// 1. Create
		Post saved = createAndSavePost("flow test", "tester", "flow body");
		assertThat(saved.getId()).isNotNull();
		assertThat(repository.count()).isEqualTo(countBefore + 1);

		// 2. Read
		Post found = repository.findById(saved.getId()).orElseThrow();
		assertThat(found.getTitle()).isEqualTo("flow test");

		// 3. Update
		found.setTitle("flow test updated");
		repository.saveAndFlush(found);
		Post updated = repository.findById(saved.getId()).orElseThrow();
		assertThat(updated.getTitle()).isEqualTo("flow test updated");

		// 4. Delete
		repository.delete(updated);
		assertThat(repository.findById(saved.getId())).isEmpty();
		assertThat(repository.count()).isEqualTo(countBefore);
	}
}
