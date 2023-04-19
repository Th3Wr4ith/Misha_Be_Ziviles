package com.project.mishaPay.category;

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

import com.project.mishaPay.dto.CategoryDTO;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "/api/v1/categories")

public class CategoryController {

	@Autowired
	public ModelMapper modelMapper;

	@Autowired
	private final CategoryService categoriesService;

	public CategoryController(CategoryService categoriesService) {

		this.categoriesService = categoriesService;
	}

	@GetMapping
	public List<CategoryDTO> getCategories() {

		return categoriesService.getCategories().stream()
				.map(categories -> modelMapper.map(categories, CategoryDTO.class)).collect(Collectors.toList());
	}

	@GetMapping("{id}")
	public ResponseEntity<CategoryDTO> getCategoriesById(@PathVariable Long id) {

		Category categories = categoriesService.getCategoriesById(id);

		CategoryDTO categoriesResponse = modelMapper.map(categories, CategoryDTO.class);

		return ResponseEntity.ok().body(categoriesResponse);
	}

	@PostMapping
	public ResponseEntity<CategoryDTO> createCategories(@RequestBody Category categoriesDTO) {

		Category categoriesRequest = modelMapper.map(categoriesDTO, Category.class);

		Category categories = categoriesService.createCategories(categoriesRequest);

		CategoryDTO categoriesResponse = modelMapper.map(categories, CategoryDTO.class);

		return new ResponseEntity<CategoryDTO>(categoriesResponse, HttpStatus.CREATED);
	}

	@PutMapping("/{id}")
	public ResponseEntity<CategoryDTO> updateCategories(@PathVariable Long id,
			@RequestBody Category updatedCategoriesDTO) {

		Category categoriesRequest = modelMapper.map(updatedCategoriesDTO, Category.class);

		ResponseEntity<Category> updatedCategories = categoriesService.updateCategories(id, categoriesRequest);

		CategoryDTO categoriesResponse = modelMapper.map(updatedCategories, CategoryDTO.class);

		return ResponseEntity.ok().body(categoriesResponse);

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteCategories(@PathVariable Long id) {

		categoriesService.deleteCategories(id);

		return new ResponseEntity<>("Expense category successfully deleted!", HttpStatus.OK);
	}

}
