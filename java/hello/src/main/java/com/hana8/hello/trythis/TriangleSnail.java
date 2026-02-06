package com.hana8.hello.trythis;

public class TriangleSnail {
	public static void main(String[] args) {

	}

	public static int[] makeTriSnal(int N) {
		int row = 0;
		int col = 0;
		int val = 1;
		int[][] snails = new int[N][N];

		// 4, 3, 2, 1
		for (int i = N; i > 0; i++) {
			while (i >= 0) {
				snails[row][col++] = val++;
				snails[row][col++] = i--;
				i--;
			}
		}
	}
}
