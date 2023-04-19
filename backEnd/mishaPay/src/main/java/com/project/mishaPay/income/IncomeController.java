package com.project.mishaPay.income;

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

import com.project.mishaPay.dto.IncomeDTO;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "/api/v1/incomes")

public class IncomeController {

	@Autowired
	public ModelMapper modelMapper;

	@Autowired
	private final IncomeService incomesService;

	public IncomeController(IncomeService incomesService) {

		this.incomesService = incomesService;
	}

	@GetMapping
	public List<IncomeDTO> getIncomes() {

		return incomesService.getIncomes().stream().map(incomes -> modelMapper.map(incomes, IncomeDTO.class))
				.collect(Collectors.toList());
	}

	@GetMapping("/{id}")
	public ResponseEntity<IncomeDTO> getIncomesById(@PathVariable Long id) {

		Income incomes = incomesService.getIncomesById(id);

		IncomeDTO incomesResponse = modelMapper.map(incomes, IncomeDTO.class);

		return ResponseEntity.ok().body(incomesResponse);
	}

	@PostMapping
	public ResponseEntity<IncomeDTO> createIncomes(@RequestBody IncomeDTO incomesDTO) {

		Income incomesRequest = modelMapper.map(incomesDTO, Income.class);

		Income incomes = incomesService.createIncomes(incomesRequest);

		IncomeDTO incomesResponse = modelMapper.map(incomes, IncomeDTO.class);

		return new ResponseEntity<IncomeDTO>(incomesResponse, HttpStatus.CREATED);

	}

	@PutMapping("/{id}")
	public ResponseEntity<IncomeDTO> updateIncomes(@PathVariable Long id, @RequestBody IncomeDTO updatedIncomesDTO) {

		Income incomesRequest = modelMapper.map(updatedIncomesDTO, Income.class);

		ResponseEntity<Income> updatedIncomes = incomesService.updateIncomes(id, incomesRequest);

		IncomeDTO incomesResponse = modelMapper.map(updatedIncomes, IncomeDTO.class);

		return ResponseEntity.ok().body(incomesResponse);

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteIncomes(@PathVariable Long id) {

		incomesService.deleteIncomes(id);

		return new ResponseEntity<>("Incomes successfully deleted!", HttpStatus.OK);
	}
}
