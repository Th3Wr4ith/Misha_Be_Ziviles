package com.project.mishaPay.category;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.NoArgsConstructor;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "categories")

public class Category {

	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long id;

	@Column(name = "category")
	private String category;
	
	
}
