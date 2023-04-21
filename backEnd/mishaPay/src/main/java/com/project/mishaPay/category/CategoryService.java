package com.project.mishaPay.category;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.mishaPay.exeption.ResourceNotFoundException;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;

	public List<Category> getCategories() {

		return categoryRepository.findAll();
	}

	public Category getCategoriesById(Long id) throws ResourceNotFoundException {

		Category categoryById = categoryRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Category does not exist with id:" + id));

		return categoryById;
	}

	public Category createCategories(Category category) {

		return categoryRepository.save(category);
	}

	public ResponseEntity<Category> updateCategories(Long id, Category categoryDetails) {

		Category category = categoryRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Category does not exist with id: " + id));

		category.setName(categoryDetails.getName());

		Category updatedCategory = categoryRepository.save(category);

		return ResponseEntity.ok(updatedCategory);
	}

	public void deleteCategories(Long id) {

		categoryRepository.deleteById(id);

	}

}
