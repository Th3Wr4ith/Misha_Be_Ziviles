package com.project.mishaPay.category;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin("*")
@RestController
@RequestMapping(path = "/api/v1/categories")

public class CategoryController {

	private final CategoryService categoriesService;

	@Autowired
	public CategoryController(CategoryService categoriesService) {

		this.categoriesService = categoriesService;
	}

	@GetMapping
	public List<Category> getCategories() {

		return categoriesService.getCategories();
	}

	@PostMapping

	public Category createCategories(@RequestBody Category categories) {
			
		return categoriesService.createCategories(categories);
	}
	
	
	
}
