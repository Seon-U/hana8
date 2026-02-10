package com.hana8.hello.generic;

import java.util.ArrayList;
import java.util.List;

public class Animal {
	protected String name;

	public Animal(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Animal{" + "name='" + name + '\'' + '}';
	}

	//static void Sound(Anmial CatOrDog)
	public static <T extends Animal> void sound(T catOrDog) {
		System.out.println(catOrDog);
	}

	public static void main(String[] args) {
		Dog maxx = new Dog("Maxx");
		Cat navi = new Cat("Navi");
		Animal.sound(maxx);
		Animal.sound(navi);
		Animal.sound(new Cat("yebbi"));

		CatOrDog cd = new CatOrDog(maxx, navi);
		cd.sound();

		List<Dog> dogList = new ArrayList<>();
		dogList.add(maxx);
		List<Cat> catList = new ArrayList<>();
		catList.add(navi);
		System.out.println("cat = " + catList);

		List<String> list = new ArrayList<>();
		List<? extends Animal> extList1 = new ArrayList<>();
		List<? extends Animal> extList2 = dogList;
		List<? extends Animal> extList3 = catList;
		List<? super Animal> superList1 = new ArrayList<>();
		// extList1.add(maxx);
		System.out.println("extList1.size()" + extList1.size());
		System.out.println("extList2.size()" + extList2.size());
		System.out.println("extList3.size()" + extList3.size());
	}
}
