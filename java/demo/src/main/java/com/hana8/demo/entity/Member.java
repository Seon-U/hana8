package com.hana8.demo.entity;

import java.util.List;

import org.hibernate.annotations.ColumnDefault;

import com.hana8.demo.common.enums.BloodType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Data
@Entity
@Table(name = "Member",
	uniqueConstraints = @UniqueConstraint(
	name = "uniq_Member_email",
	columnNames = "email")
)
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

	@ColumnDefault( "false")
	private Boolean isActive;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private BloodType bloodType;

	@OneToMany(mappedBy = "writer")
	private List<Post> posts;

	@OneToMany(mappedBy = "replier")
	private List<Reply> replies;
}
