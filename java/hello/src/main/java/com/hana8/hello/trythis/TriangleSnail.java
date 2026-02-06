package com.hana8.hello.trythis;

import java.util.Arrays;
import java.util.List;

public class TriangleSnail {
	public static void main(String[] args) {
		List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
		System.out.println("makeTriSnail" + Arrays.toString(makeTriSnail(5)));
	}

	public static int[] makeTriSnail(int N) {
		int row = 0;
		int col = 0;
		int val = 1;
		int[][] snails = new int[N][N];
		int flag = 0; // 0: 아래, 1: 오른쪽, 2: 대각
		// int flag = 1;

		// 4, 3, 2, 1
		for (int i = N; i > 0; i--) {
			if (flag == 0) {
				for (int j = 0; j < i; j++) {
					snails[row++][col] = val++;
				}
				row--;
				col++;
			} else if (flag == 1) {
				for (int j = 0; j < i; j++) {
					snails[row][col++] = val++;
				}
				col -= 2;
				row--;
			} else {
				for (int j = 0; j < i; j++) {
					snails[row--][col--] = val++;
				}
				row += 2;
				col++;
			}
			flag = (flag + 1) % 3;
		}
		int[] res = new int[N * (N + 1) / 2];
		int idx = 0;
		for (int i = 0; i < N; i++) {
			for (int j = 0; j <= i; j++) {
				res[idx++] = snails[i][j];
			}
		}
		return res;
	}
}
