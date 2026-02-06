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

	@Test
	void makeTriangleSnail() {
		int[] arr4 = {1, 2, 9, 3, 10, 8, 4, 5, 6, 7};
		int[] arr5 = {1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9};
		int[] arr6 = {1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11};

		assertArrayEquals(arr4, FillSnail.makeTriangleSnail(4));
		assertArrayEquals(arr5, FillSnail.makeTriangleSnail(5));
		assertArrayEquals(arr6, FillSnail.makeTriangleSnail(6));
	}
}
