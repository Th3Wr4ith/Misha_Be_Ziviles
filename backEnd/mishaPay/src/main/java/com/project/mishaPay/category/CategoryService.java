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

	public Category createCategories(Category categories) {

		return categoriesRepository.save(categories);
	}

	public Category getCategoryById(Long id) throws ResourceNotFoundException {

		Category categoryById = categoriesRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Category does not exist with id:" + id));

		return categoryById;
	}

	public ResponseEntity<Category> updateCategory(Long id, Category categoryDetails) {

		Category category = categoriesRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Category does not exist with id: " + id));

		category.setCategory(categoryDetails.getCategory());


		Category updatedCategory = categoriesRepository.save(category);

		return ResponseEntity.ok(updatedCategory);
	}
	
	public void deleteCategory(Long id) {

		categoriesRepository.deleteById(id);

	}
	
	
	
}
