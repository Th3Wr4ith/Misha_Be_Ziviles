package com.project.mishaPay.category;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.mishaPay.exeption.ResourceNotFoundException;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoriesRepository;

	public List<Category> getCategories() {

		return categoriesRepository.findAll();
	}

	public Category getCategoriesById(Long id) throws ResourceNotFoundException {

		Category categoryById = categoriesRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Category does not exist with id:" + id));

		return categoryById;
	}

	public Category createCategories(Category categories) {

		return categoriesRepository.save(categories);
	}

	public ResponseEntity<Category> updateCategories(Long id, Category categoryDetails) {

		Category categories = categoriesRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Category does not exist with id: " + id));

		categories.setName(categoryDetails.getName());

		Category updatedCategories = categoriesRepository.save(categories);

		return ResponseEntity.ok(updatedCategories);
	}

	public void deleteCategories(Long id) {

		categoriesRepository.deleteById(id);

	}

}
