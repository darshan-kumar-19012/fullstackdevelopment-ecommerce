package com.example.shoppingbackend.repository;

import com.example.shoppingbackend.model.Order;
import com.example.shoppingbackend.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    @Query("from User b where b.userName=:keyword ")
    Page<User> findAll(Pageable pageable, @Param("keyword") String keyword);
}
