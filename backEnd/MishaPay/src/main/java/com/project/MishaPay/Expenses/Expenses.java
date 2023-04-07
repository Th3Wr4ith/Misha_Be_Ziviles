package com.project.MishaPay.Expenses;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Expenses")
public class Expenses {

	@Id
	@GeneratedValue
	private Long expensesId;

	@Column(name = "Amount")
	private BigDecimal expensesAmount;

	@Column(name = "Category")
	private String exspensesCategory;

	@Column(name = "Date")
	private LocalDate expensesDate;

	public Expenses() {
	}

	public Expenses(Long expensesId, BigDecimal expensesAmount, String exspensesCategory, LocalDate exspensesDate) {

		this.expensesId = expensesId;
		this.incomesAmount = incomesAmount;
		this.incomesCategory = incomesCategory;
		this.incomesDate = incomesDate;
	}

	public Incomes(BigDecimal incomesAmount, String incomesCategory, LocalDate incomesDate) {

		this.incomesAmount = incomesAmount;
		this.incomesCategory = incomesCategory;
		this.incomesDate = incomesDate;
	}

	public Long getIncomesId() {
		return incomesId;
	}

	public void setIncomesId(Long incomesId) {
		this.incomesId = incomesId;
	}

	public BigDecimal getIncomesAmount() {
		return incomesAmount;
	}

	public void setIncomesAmount(BigDecimal incomesAmount) {
		this.incomesAmount = incomesAmount;
	}

	public String getIncomesCategory() {
		return incomesCategory;
	}

	public void setIncomesCategory(String incomesCategory) {
		this.incomesCategory = incomesCategory;
	}

	public LocalDate getIncomesDate() {
		return incomesDate;
	}

	public void setIncomesDate(LocalDate incomesDate) {
		this.incomesDate = incomesDate;
	}

	@Override
	public String toString() {
		return "Incomes [incomesId=" + incomesId + ", incomesAmount=" + incomesAmount + ", incomesCategory="
				+ incomesCategory + ", incomesDate=" + incomesDate + "]";
	}
}
