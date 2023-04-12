package com.project.mishaPay.income;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "incomes")
public class Income {

	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long id;

	@Column(name = "amount")
	private BigDecimal amount;

	@Column(name = "name")
	private String name;

	@Column(name = "date")
	private LocalDate date;

	public Income() {
	}

	public Income(Long id, BigDecimal amount, String name, LocalDate date) {

		this.id = id;
		this.amount = amount;
		this.name = name;
		this.date = date;
	}

	public Income(BigDecimal amount, String name, LocalDate date) {

		this.amount = amount;
		this.name = name;
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

	public void setAmount(BigDecimal incomeAmount) {
		this.amount = incomeAmount;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "Incomes [id=" + id + ", amount=" + amount + ", name=" + name + ", date=" + date + "]";
	}
}
