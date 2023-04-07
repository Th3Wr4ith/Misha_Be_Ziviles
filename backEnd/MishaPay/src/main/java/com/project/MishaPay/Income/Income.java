package com.project.MishaPay.Income;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Income")
public class Income {

	@Id
	@GeneratedValue
	private Long incomeId;

	@Column(name = "Amount")
	private BigDecimal incomeAmount;

	@Column(name = "Category")
	private String incomeCategory;

	@Column(name = "Date")
	private LocalDate incomeDate;

	public Income() {
	}

	public Income(Long incomeId, BigDecimal incomeAmount, String incomeCategory, LocalDate incomeDate) {

		this.incomeId = incomeId;
		this.incomeAmount = incomeAmount;
		this.incomeCategory = incomeCategory;
		this.incomeDate = incomeDate;
	}

	public Income(BigDecimal incomeAmount, String incomeCategory, LocalDate incomeDate) {

		this.incomeAmount = incomeAmount;
		this.incomeCategory = incomeCategory;
		this.incomeDate = incomeDate;
	}

	public Long getIncomeId() {
		return incomeId;
	}

	public void setIncomeId(Long incomeId) {
		this.incomeId = incomeId;
	}

	public BigDecimal getIncomeAmount() {
		return incomeAmount;
	}

	public void setIncomesAmount(BigDecimal incomeAmount) {
		this.incomeAmount = incomeAmount;
	}

	public String getIncomesCategory() {
		return incomeCategory;
	}

	public void setIncomesCategory(String incomeCategory) {
		this.incomeCategory = incomeCategory;
	}

	public LocalDate getIncomesDate() {
		return incomeDate;
	}

	public void setIncomesDate(LocalDate incomeDate) {
		this.incomeDate = incomeDate;
	}

	@Override
	public String toString() {
		return "Income [id=" + incomeId + ", incomeAmount=" + incomeAmount + ", incomeCategory=" + incomeCategory
				+ ", incomeDate=" + incomeDate + "]";
	}
}
