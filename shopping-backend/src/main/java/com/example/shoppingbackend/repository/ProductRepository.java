package com.example.shoppingbackend.repository;

import com.example.shoppingbackend.model.Product;
import com.example.shoppingbackend.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {
    @Query("from Product b where b.productName=:keyword ")
    Page<Product> findAll(Pageable pageable, @Param("keyword") String keyword);
}
