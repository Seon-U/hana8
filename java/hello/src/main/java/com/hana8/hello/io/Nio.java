package com.hana8.hello.io;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.util.List;

public class Nio {
	private final static Path path = Path.of("t.txt");

	public static void main(String[] args) throws IOException {
		// smallFile();
		// bigFileRead();
		// bigFileWrite();
		writeLyricsToFile();
		// readAndWrite();
	}

	private static void readAndWrite() throws IOException {
		// Path srcPath = Path.of("").resolve()
		Path srcPath = Path.of("")
			.resolve("src/main/java")
			.resolve("com/hana8/hello/io")
			.resolve("Nio.java");
		System.out.println("srcPath.toAbsolutePath() = " + srcPath.toAbsolutePath());
		// Files.exists(srcPath)
		try (BufferedReader br = Files.newBufferedReader(srcPath); BufferedWriter bw = Files.newBufferedWriter(path)) {
			String ln;
			while ((ln = br.readLine()) != null) {
				bw.write(ln);
				bw.newLine();
			}
		} catch (Exception e) {
			e.printStackTrace(System.out);
		}
	}

	private static void typeLine(String line) throws InterruptedException {
		for (char c : line.toCharArray()) {
			System.out.print(c);
			Thread.sleep(80);
		}
		System.out.println();
	}

	private static void writeLyricsToFile() {
		Path janePath = Path.of("jane-doe.txt");
		Path path = Path.of("lyrics.txt");
		try (BufferedReader br = Files.newBufferedReader(janePath);
			 BufferedWriter bw = Files.newBufferedWriter(path, StandardOpenOption.CREATE,
				 StandardOpenOption.TRUNCATE_EXISTING);) {
			// int cnt = 0;
			// String ln;
			// while ((ln = br.readLine()) != null) {
			// 	System.out.println(ln);
			// 	bw.write(ln);
			// 	cnt++;
			//
			// 	if (cnt % 3 == 0) {
			// 		Thread.sleep(1000);
			// 	}
			// }
			// int ch;
			//
			// while ((ch = br.read()) != -1) {
			//
			// 	char c = (char)ch;
			//
			// 	System.out.print(c);
			// 	bw.write(c);
			// 	Thread.sleep(80);
			// 	if (c == '\n') {   // 줄바꿈 문자 감지
			// 		Thread.sleep(2000);
			// 	}
			// }
			while (true) {
				String jp = br.readLine();
				String reading = br.readLine();
				String kr = br.readLine();

				if (jp == null || reading == null || kr == null) {
					break;
				}

				System.out.println();
				System.out.println();
				System.out.println();

				int max = Math.max(jp.length(),
					Math.max(reading.length(), kr.length()));

				for (int i = 0; i <= max; i++) {

					System.out.print("\033[3A");  // 위로 3줄 이동

					System.out.println(jp.substring(0, Math.min(i, jp.length())));
					System.out.println(reading.substring(0, Math.min(i, reading.length())));
					System.out.println(kr.substring(0, Math.min(i, kr.length())));

					Thread.sleep(80);
				}

				bw.write(jp + "\n" + reading + "\n" + kr + "\n");
			}
		} catch (IOException | InterruptedException e) {
			e.printStackTrace(System.out);
		}
	}

	private static void bigFileWrite() throws IOException {
		try (BufferedWriter bw = Files.newBufferedWriter(path, StandardOpenOption.APPEND)) {
			for (int i = 0; i < 1000; i++) {
				bw.write("write" + i);
			}
		} catch (Exception e) {
			e.printStackTrace(System.out);
		}
	}

	private static void bigFileRead() throws IOException {
		try (BufferedReader br = Files.newBufferedReader(path)) {
			String ln;
			while ((ln = br.readLine()) != null) {
				System.out.println("ln = " + ln);
			}
		} catch (Exception e) {
			e.printStackTrace(System.out);
		}
	}

	private static void smallFile() throws IOException {
		Files.writeString(path, "안녕하세요 자바 21입니다%n", StandardOpenOption.APPEND);

		String s = Files.readString(path);
		System.out.println("s = " + s);

		List<String> ss = Files.readAllLines(path);
		for (String x : ss) {
			if (x.startsWith("ERROR:"))
				System.out.println("x = " + x);
		}
		System.out.println(ss.stream().filter(sx -> sx.startsWith("Error:")).toList());
	}
}
