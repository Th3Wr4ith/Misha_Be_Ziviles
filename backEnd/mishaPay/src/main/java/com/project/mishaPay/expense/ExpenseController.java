package com.project.mishaPay.expense;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
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

import com.project.mishaPay.category.Category;
import com.project.mishaPay.category.CategoryService;
import com.project.mishaPay.dto.ExpenseDTO;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "/api/v1/expenses")

public class ExpenseController {

	@Autowired
	public ModelMapper modelMapper;

	@Autowired
	private ExpenseService expensesService;

	@Autowired
	private CategoryService categoriesService;

	public ExpenseController(ExpenseService expensesService) {

		this.expensesService = expensesService;
	}

	@GetMapping
	public List<ExpenseDTO> getExpenses() {

		return expensesService.getExpenses().stream().map(expenses -> modelMapper.map(expenses, ExpenseDTO.class))
				.collect(Collectors.toList());
	}

	@GetMapping("/{id}")
	public ResponseEntity<ExpenseDTO> getExpensesById(@PathVariable Long id) {

		Expense expenses = expensesService.getExpensesById(id);

		ExpenseDTO expensesResponse = modelMapper.map(expenses, ExpenseDTO.class);

		return ResponseEntity.ok().body(expensesResponse);
	}

	@PostMapping
	public ResponseEntity<ExpenseDTO> createExpenses(@RequestBody ExpenseDTO expensesDTO) {

		Expense expensesRequest = modelMapper.map(expensesDTO, Expense.class);

		Expense expenses = expensesService.createExpenses(expensesRequest);

		ExpenseDTO expensesResponse = modelMapper.map(expenses, ExpenseDTO.class);

		return new ResponseEntity<ExpenseDTO>(expensesResponse, HttpStatus.CREATED);

	}

	@PutMapping("/{id}")
	public ResponseEntity<ExpenseDTO> updateExpenses(@PathVariable Long id,
			@RequestBody ExpenseDTO updatedExpensesDTO) {

		Expense expensesRequest = modelMapper.map(updatedExpensesDTO, Expense.class);

		ResponseEntity<Expense> updatedExpenses = expensesService.updateExpenses(id, expensesRequest);

		ExpenseDTO expensesResponse = modelMapper.map(updatedExpenses, ExpenseDTO.class);

		return ResponseEntity.ok().body(expensesResponse);
	}

	@PutMapping("/{expensesId}/categories/{categoriesId}")
	ResponseEntity<Expense> expensesCategory(@PathVariable Long expensesId, @PathVariable Long categoriesId) {

		Expense expenses = expensesService.getExpensesById(expensesId);

		Category category = categoriesService.getCategoriesById(categoriesId);

		expenses.assignCategory(category);

		return expensesService.updateExpenses(categoriesId, expenses);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteExpenses(@PathVariable Long id) {

		expensesService.deleteExpenses(id);

		return new ResponseEntity<>("Expenses successfully deleted!", HttpStatus.OK);

	}
}
