package com.project.MishaPay.Income;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.MishaPay.Exeption.ResourceNotFoundException;

@Service
public class IncomeService {

	@Autowired
	private IncomeRepository incomesRepository;

	public List<Income> getIncomes() {

		return incomesRepository.findAll();
	}

	public Income getIncomesById(Long id) throws ResourceNotFoundException {

		Income incomesById = incomesRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Incomes does not exist with id:" + id));

		return incomesById;
	}

	public Income createIncomes(Income incomes) {

		return incomesRepository.save(incomes);
	}

	public ResponseEntity<Income> updateIncomes(Long id, Income incomesDetails) {

		Income incomes = incomesRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Incomes does not exist with id: " + id));

		incomes.setAmount(incomesDetails.getAmount());
		incomes.setName(incomesDetails.getName());
		incomes.setDate(incomesDetails.getDate());

		Income updatedIncomes = incomesRepository.save(incomes);

		return ResponseEntity.ok(updatedIncomes);
	}

	public void deleteIncomes(Long id) {

		incomesRepository.deleteById(id);

	}
}
