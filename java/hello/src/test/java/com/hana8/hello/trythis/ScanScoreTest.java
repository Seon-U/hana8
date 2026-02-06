package com.hana8.hello.trythis;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

class ScanScoreTest {
	@Test
	void grading() {
		assertEquals('A', ScanScore.grading(90));
		assertEquals('A', ScanScore.grading(99));
		assertEquals('A', ScanScore.grading(100));
	}

	@ParameterizedTest
	@CsvSource({
		"90, A",
		"80, B",
		"70, C"
	})
	void grading(int score, char grade) {
		assertEquals(grade, ScanScore.grading(score));
	}

	@Test
	void calcScore() throws Exception {
		String[] names = {"Hong", "Kim", "Lee"};
		int[] scores = {71, 80, 92};

		// int totScore = 0;
		// for (int score : scores) {
		// 	totScore += score;
		// }

		ScanScore ss = new ScanScore();
		// int bestScore = Arrays.stream(scores).max().stream().findFirst().orElse(-1);
		String expectStr1 = "총점은 243점, 평균은 81.00점, 최고점은 92점, 최고득점자는 Lee, 학점은 A입니다";
		assertEquals(expectStr1, ss.calcScore(names, scores));

		int[] scores2 = {1, 0, 100};
		String expectStr2 = "총점은 101점, 평균은 33.67점, 최고점은 100점, 최고득점자는 Lee, 학점은 A입니다";
		assertEquals(expectStr2, ss.calcScore(names, scores2));
	}
}
