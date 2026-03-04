package com.hana8.demo.entity;

import org.hibernate.annotations.ColumnDefault;

import com.hana8.demo.common.enums.BloodType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@Entity
@Table(name = "Member", uniqueConstraints = @UniqueConstraint(
	name = "uniq_Member_email",
	columnNames = "email"
))
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
@AllArgsConstructor
@Builder
public class Member extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(updatable = false, columnDefinition = "int unsigned")
	private Long id;

	@Column(nullable = false, length = 30)
	private String nickname;

	@Column(nullable = false)
	private String email;

	// @Column(nullable = false, length = 128)
	private String passwd;

	@Builder.Default
	@ColumnDefault( "false")
	@Column(nullable = false, columnDefinition = "tinyint(1) default 0")
	private Boolean isActive = false;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private BloodType bloodType;
}
