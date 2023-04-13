package com.project.mishaPay.income;

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
@RequestMapping(path = "/api/v1/incomes")

public class IncomeController {

	private final IncomeService incomesService;

	@Autowired
	public IncomeController(IncomeService incomesService) {

		this.incomesService = incomesService;
	}

	@GetMapping
	public List<Income> getIncomes() {

		return incomesService.getIncomes();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Income> getIncomesById(@PathVariable Long id) {

		return ResponseEntity.ok().body(incomesService.getIncomesById(id));
	}

	@PostMapping
	public Income createIncomes(@RequestBody Income incomes) {

		return incomesService.createIncomes(incomes);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Income> updateIncomes(@PathVariable Long id, @RequestBody Income updatedIncomes) {

		return incomesService.updateIncomes(id, updatedIncomes);

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteIncomes(@PathVariable Long id) {

		incomesService.deleteIncomes(id);

		return new ResponseEntity<>("Incomes successfully deleted!", HttpStatus.OK);
	}
}
