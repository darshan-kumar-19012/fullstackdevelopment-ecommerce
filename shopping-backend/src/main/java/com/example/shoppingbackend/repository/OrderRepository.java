package com.example.shoppingbackend.repository;

import com.example.shoppingbackend.model.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order,Long> {
    @Query("from Order b where b.collectorName=:keyword ")
    Page<Order> findAll(Pageable pageable, @Param("keyword") String keyword);
}
