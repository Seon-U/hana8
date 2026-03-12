package com.hana8.demo.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
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
	@Column(columnDefinition = "int unsigned")
	private Long id;

	private String orgname;

	private String savename;

	private String savedir;

	@ManyToOne
	@JoinColumn(name = "member", referencedColumnName = "id",
		columnDefinition = "int unsigned",
		foreignKey = @ForeignKey(name = "fk_MemberImage_member"))
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Member member;
}
