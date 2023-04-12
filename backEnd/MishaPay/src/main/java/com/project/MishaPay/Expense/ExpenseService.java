package com.project.mishaPay.expense;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.mishaPay.exeption.ResourceNotFoundException;

@Service
public class ExpenseService {

	@Autowired
	private ExpenseRepository expensesRepository;

	public List<Expense> getExpenses() {

		return expensesRepository.findAll();
	}

	public Expense getExpensesById(Long id) throws ResourceNotFoundException {

		Expense expensesById = expensesRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Expenses does not exist with id:" + id));

		return expensesById;
	}

	public Expense createExpenses(Expense expenses) {

		return expensesRepository.save(expenses);
	}

	public ResponseEntity<Expense> updateExpenses(Long id, Expense expensesDetails) {

		Expense expenses = expensesRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Expenses not exist with id: " + id));

		expenses.setAmount(expensesDetails.getAmount());
		expenses.setName(expensesDetails.getName());
		expenses.setCategory(expensesDetails.getCategory());
		expenses.setDate(expensesDetails.getDate());

		Expense updatedExpenses = expensesRepository.save(expenses);

		return ResponseEntity.ok(updatedExpenses);
	}

	public void deleteExpenses(Long id) {

		expensesRepository.deleteById(id);

	}
}