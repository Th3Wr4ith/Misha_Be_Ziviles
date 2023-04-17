package com.project.mishaPay.category;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.mishaPay.expense.Expense;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

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

	@JsonIgnore
	@OneToMany(mappedBy = "expenseCategory")
	@Getter
	private List<Expense> expenses;
}
