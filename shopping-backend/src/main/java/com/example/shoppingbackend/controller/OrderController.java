package com.example.shoppingbackend.controller;


import com.example.shoppingbackend.exception.ResourceNotFoundException;
import com.example.shoppingbackend.model.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.shoppingbackend.repository.OrderRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    // get all orders
    @GetMapping("/orders")
    public List<Order> getAllOrders(){
        return orderRepository.findAll();
    }

    //create order rest api
    @PostMapping("/orders")
    public Order createOrder(@RequestBody Order order){
        return orderRepository.save(order);
    }

    //get order by id rest api
    @GetMapping("/orders/{orderid}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long orderid) {
        Order order = orderRepository.findById(orderid)
                .orElseThrow(()-> new ResourceNotFoundException("Order not exist with id :"+ orderid));
        return ResponseEntity.ok(order);
    }

    // update order rest api
    @PutMapping("/orders/{orderid}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long orderid, @RequestBody Order orderDetails){
        Order order = orderRepository.findById(orderid)
                .orElseThrow(()-> new ResourceNotFoundException("Order not exist with id :"+ orderid));

        order.setCollectorName(orderDetails.getCollectorName());
        order.setproductName(orderDetails.getproductName());
        order.setdeliveryAddress(orderDetails.getdeliveryAddress());
        order.setPhoneNo(orderDetails.getPhoneNo());
        order.setQuantity(orderDetails.getQuantity());
        order.setdeliveryStatus(orderDetails.getdeliveryStatus());
        order.setDeliveryBoy(orderDetails.getDeliveryBoy());
        Order updatedOrder = orderRepository.save(order);
        return ResponseEntity.ok(updatedOrder);
    }

    // delete order  rest api
    @DeleteMapping("/orders/{orderid}")
    public ResponseEntity<Map<String, Boolean>> deleteOrder(@PathVariable Long orderid){
        Order order = orderRepository.findById(orderid)
                .orElseThrow(()-> new ResourceNotFoundException("Order not exist with id :"+ orderid));

        orderRepository.delete(order);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
