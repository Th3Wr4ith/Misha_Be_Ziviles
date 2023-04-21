package com.project.mishaPay.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.Data;

@Data
public class ExpenseDTO {

	private Long id;
	private BigDecimal amount;
	private String name;
	private LocalDate date;

	public String getCategoryName() {
		return name;
	}
}
