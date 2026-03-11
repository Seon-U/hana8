package com.hana8.demo.entity;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Entity
@Data
@Builder
@RequiredArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Table(uniqueConstraints = {
	@UniqueConstraint(
		name = "uniq_Dept_name",
		columnNames = {"name"}
	)
})
@ToString(callSuper = true)
@AllArgsConstructor
public class Dept extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(columnDefinition = "smallint unsigned")
	private Integer id;

	@Column(nullable = false, length = 30)
	private String name;

	@ManyToOne
	@JoinColumn(name = "captain", referencedColumnName = "id",
		columnDefinition = "int unsigned",
		foreignKey = @ForeignKey(name = "fk_Dept_captain_Member"))
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Member captain;

	@ManyToMany
	@JoinTable(name = "DeptMember",
		joinColumns = @JoinColumn(name = "dept",
			foreignKey = @ForeignKey(name = "fk_DeptMember_dept")),
		inverseJoinColumns = @JoinColumn(name = "member",
			foreignKey = @ForeignKey(name = "fk_DeptMember_member",
				foreignKeyDefinition = "foreign key(member) references Member(id) in delete cascade")))
	@OnDelete(action = OnDeleteAction.CASCADE)
	@Builder.Default
	private List<Member> deptMembers = new ArrayList<>();

	public void addMembers(Member member) {
		this.deptMembers.add(member);
	}
}
