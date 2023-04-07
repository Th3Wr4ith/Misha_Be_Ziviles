package com.project.MishaPay.Income;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/income")

public class IncomeController {

	private final IncomeService incomeService;

	@Autowired
	public IncomeController(IncomeService incomeService) {

		this.incomeService = incomeService;
	}

	@GetMapping
	public List<Income> getIncome() {

		return incomeService.getIncome();
	}

	@PostMapping
	public Income createIncome(@RequestBody Income income) {

		return incomeService.createIncome(income);
	}

	@GetMapping("{incomeId}")
	public ResponseEntity<Income> getIncomeById(Income incomeById) {

		return incomeService.getIncomeById(null);
	}

	@PutMapping("{incomeId}")
	public ResponseEntity<Income> updateIncome(@RequestBody Income incomeDetails) {

		return updateIncome(incomeDetails);
	}

	@DeleteMapping("{incomeId}")
	public ResponseEntity<Income> deleteIncome(@RequestBody Income income) {

		return deleteIncome(income);

	}
}
