package com.project.MishaPay.Income;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.project.MishaPay.Exeptions.ResourceNotFoundException;

@Service
public class IncomeService {

	@Autowired
	private IncomeRepository incomeRepository;

	public List<Income> getIncome() {

		return incomeRepository.findAll();
	}

	public Income createIncome(Income income) {

		return incomeRepository.save(income);
	}

	public ResponseEntity<Income> getIncomeById(@PathVariable Long incomeId) {

		Income incomeById = incomeRepository.findById(incomeId)
				.orElseThrow(() -> new ResourceNotFoundException("Income not exist with id:" + incomeId));

		return ResponseEntity.ok(incomeById);
	}

	public ResponseEntity<Income> updateIncome(@PathVariable Long incomeId, Income incomeDetails) {

		Income updateIncome = incomeRepository.findById(incomeId)
				.orElseThrow(() -> new ResourceNotFoundException("Income not exist with id: " + incomeId));

		updateIncome.setIncomeAmount(incomeDetails.getIncomeAmount());
		updateIncome.setIncomeCategory(incomeDetails.getIncomeCategory());
		updateIncome.setIncomeDate(incomeDetails.getIncomeDate());

		incomeRepository.save(updateIncome);

		return ResponseEntity.ok(updateIncome);
	}

	public ResponseEntity<Income> deleteIncome(@PathVariable Long incomeId) {

		Income income = incomeRepository.findById(incomeId)
				.orElseThrow(() -> new ResourceNotFoundException("Income not exist with id: " + incomeId));

		incomesRepository.delete(income);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);

	}
}
