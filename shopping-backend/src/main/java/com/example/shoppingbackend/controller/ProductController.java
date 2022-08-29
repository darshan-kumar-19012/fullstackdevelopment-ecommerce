package com.example.shoppingbackend.controller;


import com.example.shoppingbackend.exception.ResourceNotFoundException;
import com.example.shoppingbackend.model.Product;
import com.example.shoppingbackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // get all users
    @GetMapping("/products")
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    //create user rest api
    @PostMapping("/products")
    public Product createProduct(@RequestBody Product product){
        return productRepository.save(product);
    }

    //get user by id rest api
    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id){
        Product product = productRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Product not exist with id :"+ id));
        return ResponseEntity.ok(product);
    }

    // update user rest api

    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateUsers(@PathVariable Long id, @RequestBody Product userDetails){
        Product user = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));

        user.setProductName(userDetails.getProductName());
        user.setProductCategory(userDetails.getProductCategory());
        user.setProductDescription(userDetails.getProductDescription());
        user.setProductPrice(userDetails.getProductPrice());
        Product updatedUser = productRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }
    // delete user  rest api
    @DeleteMapping("/products/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable Long id){
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));

        productRepository.delete(product);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/products/search/{keyword}")
    public Page<Product> getProductSearch(Pageable pageable, @PathVariable("keyword") String keyword) {
        return productRepository.findAll(pageable,keyword);
    }
}
