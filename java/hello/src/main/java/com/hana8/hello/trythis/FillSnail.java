package com.hana8.hello.trythis;

public class FillSnail {
	@SuppressWarnings("checkstyle:AbbreviationAsWordInName")
	public static void main(String[] args) {
		printTwodeps(makeSnail(5));
		// int MAX_NUM = 5;
		// int[] arr = new int[MAX_NUM * MAX_NUM];
		//
		// // 0, 1, 2, 3,  + 1 * 4 // 4, 9, 14, 19, 24, + 5 * 4//  23, 22, 21, 20  // -1 * 4 // -5 * 3 // +1 * 3// ,
		// int[] addNum = {1, MAX_NUM, -1, -MAX_NUM};
		// for (int i = 1; i < MAX_NUM * MAX_NUM; i++) {
		//
		// 	arr[j] = i;
		// }

		// System.out.println(Arrays.toString(arr));
	}

	public static int[][] makeSnail(int N) {
		int[][] snails = new int[N][N];

		int val = 0;
		int row = -1;
		int col = 0;
		int flag = 1;

		// w: 9 => 7 -> 5 -> 3 -> 1
		for (int w = N + N - 1; w > 0; w -= 2) {
			for (int i = 0; i < w; i++) {
				if (i <= w / 2) {
					row += flag;
				} else {
					col += flag;
				}

				System.out.printf("col, row = %d, %d %d%n", col, row, val + 1);
				snails[col][row] = ++val;
			}
			flag *= -1;
		}
		return snails;
		// System.out.println("snails = " + Arrays.deepToString(snails));
	}

	private static void printTwodeps(int[][] twoDimArray) {
		for (int[] arr : twoDimArray) {
			for (int n : arr) {
				System.out.printf("%3d", n);
			}
			System.out.println();
		}
	}
}
