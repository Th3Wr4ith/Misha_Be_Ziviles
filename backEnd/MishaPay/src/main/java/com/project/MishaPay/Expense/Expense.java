package com.project.mishaPay.expense;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "expenses")
public class Expense {

	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long id;

	@Column(name = "amount")
	private BigDecimal amount;

	@Column(name = "name")
	private String name;

	@Column(name = "category")
	private String category;

	@Column(name = "date")
	private LocalDate date;

	public Expense() {
	}

	public Expense(Long id, BigDecimal amount, String name, String category, LocalDate date) {

		this.id = id;
		this.amount = amount;
		this.name = name;
		this.category = category;
		this.date = date;
	}

	public Expense(BigDecimal amount, String name, String category, LocalDate date) {

		this.amount = amount;
		this.name = name;
		this.category = category;
		this.date = date;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "Expenses [id=" + id + ", amount=" + amount + ", name=" + name + ", category=" + category + ", date="
				+ date + "]";
	}
}
