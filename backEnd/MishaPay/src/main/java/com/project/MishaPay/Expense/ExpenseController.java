package com.project.mishaPay.expense;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "/api/v1/expenses")

public class ExpenseController {

	private final ExpenseService expensesService;

	@Autowired
	public ExpenseController(ExpenseService expensesService) {

		this.expensesService = expensesService;
	}

	@GetMapping
	public List<Expense> getExpenses() {

		return expensesService.getExpenses();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Expense> getExpensesById(@PathVariable Long id) {

		return ResponseEntity.ok().body(expensesService.getExpensesById(id));
	}

	@PostMapping
	public Expense createExpenses(@RequestBody Expense expenses) {

		return expensesService.createExpenses(expenses);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Expense> updateExpenses(@PathVariable Long id, @RequestBody Expense updatedExpenses) {

		return expensesService.updateExpenses(id, updatedExpenses);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteExpenses(@PathVariable Long id) {

		expensesService.deleteExpenses(id);

		return new ResponseEntity<>("Expenses successfully deleted!", HttpStatus.OK);

	}
}
