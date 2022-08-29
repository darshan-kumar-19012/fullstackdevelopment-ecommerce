package com.example.shoppingbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "productTable")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long productid;

    @Column(name = "productName")
    private String productName;

    @Column(name = "productCategory")
    private String productCategory;

    @Column(name = "productDescription")
    private String productDescription;

    @Column(name = "productPrice")
    private String productPrice;

    public long getProductid() {
        return productid;
    }
    public Product(){

    }
    public Product(long productid, String productName, String productCategory, String productDescription, String productPrice) {
        this.productid = productid;
        this.productName = productName;
        this.productCategory = productCategory;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
    }

    public void setProductid(long productid) {
        this.productid = productid;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductCategory() {
        return productCategory;
    }

    public void setProductCategory(String productCategory) {
        this.productCategory = productCategory;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public String getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(String productPrice) {
        this.productPrice = productPrice;
    }
}

