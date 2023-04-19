package com.project.mishaPay.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.project.mishaPay.category.Category;

import lombok.Data;

@Data
public class ExpenseDTO {

	private Long id;
	private BigDecimal amount;
	private String name;
	private LocalDate date;
	private Category category;
}
