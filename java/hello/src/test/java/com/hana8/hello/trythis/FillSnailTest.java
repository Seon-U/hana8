package com.hana8.hello.trythis;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class FillSnailTest {
	
	@Test
	void makeSnail1() {
		int[][] expected = {{1}};
		int[][] res = FillSnail.makeSnail(1);
		assertEquals(expected.length, res.length);
		assertArrayEquals(expected[0], FillSnail.makeSnail(1)[0]);
	}

	@Test
	void makeSnail2() {
		int[][] expected = {{1, 2}, {4, 3}};
		int[][] result = FillSnail.makeSnail(2);
		for (int i = 0; i < 2; i++) {
			assertArrayEquals(expected[i], result[i]);
		}
	}

	@Test
	void makeSnail5() {
		int[][] expected = {{1, 2, 3, 4, 5}, {16, 17, 18, 19, 6}, {15, 24, 25, 20, 7}, {14, 23, 22, 21, 8},
			{13, 12, 11, 10, 9}};
		int[][] res5 = FillSnail.makeSnail(5);
		assertEquals(expected.length, res5.length);
		for (int i = 0; i < expected.length; i++) {
			assertArrayEquals(expected[i], res5[i], "row " + i + " mismatch");
		}
	}

}
