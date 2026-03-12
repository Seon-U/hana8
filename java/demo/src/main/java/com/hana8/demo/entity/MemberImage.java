package com.hana8.demo.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class MemberImage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(columnDefinition = "int unsigned")
	private Long id;

	@Column(nullable = false, length = 60)
	private String orgname;

	@Column(nullable = false, length = 50)
	private String savename;

	//상대경로 추가
	@Column(nullable = false, length = 30)
	private String savedir;

	@Column(nullable = false, length = 2000)
	private String remark;

	@ManyToOne
	@JoinColumn(name = "member", referencedColumnName = "id",
		columnDefinition = "int unsigned not null",
		foreignKey = @ForeignKey(name = "fk_MemberImage_member"))
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Member member;
}
