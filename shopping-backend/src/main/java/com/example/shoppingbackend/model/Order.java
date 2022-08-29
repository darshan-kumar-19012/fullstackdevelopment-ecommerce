package com.example.shoppingbackend.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "orderTable")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long orderId;

    @Column(name = "collectorName")
    private String collectorName;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "delivery_address")
    private String deliveryAddress;

    @Column(name = "phone_no")
    private String phoneNo;

    @Column(name = "quantity")
    private String quantity;
    @Column(name = "delivery_status")
    private String deliveryStatus;

    @Column(name = "delivery_date", columnDefinition = "DATE")
    private Date deliveryDate;

    @Column(name = "delivery_boy")
    private String deliveryBoy;

    public Order() {
    }


    public Order(String collectorName, String productName, String deliveryAddress, String phoneNo, String quantity, String deliveryStatus, Date deliveryDate, String deliveryBoy) {
        super();
        this.collectorName = collectorName;
        this.productName = productName;
        this.deliveryAddress = deliveryAddress;
        this.phoneNo = phoneNo;
        this.quantity = quantity;
        this.deliveryStatus = deliveryStatus;
        this.deliveryDate = deliveryDate;
        this.deliveryBoy = deliveryBoy;
    }

    public long getOrderid() {
        return orderId;
    }

    public void setOrderid(long orderid) {
        this.orderId = orderid;
    }

    public String getCollectorName() {
        return collectorName;
    }

    public void setCollectorName(String collectorName) {
        this.collectorName = collectorName;
    }

    public String getproductName() {
        return productName;
    }

    public void setproductName(String productName) {
        this.productName = productName;
    }

    public String getdeliveryStatus() {
        return deliveryStatus;
    }

    public void setdeliveryStatus(String deliveryStatus) {
        this.deliveryStatus = deliveryStatus;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getdeliveryAddress() {
        return deliveryAddress;
    }

    public void setdeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public Date getdeliveryDate() {
        return deliveryDate;
    }

    public void setdeliveryDate(Date deliveryDate) {
        this.deliveryDate = deliveryDate;
    }

    public String getDeliveryBoy() {
        return deliveryBoy;
    }

    public void setDeliveryBoy(String deliveryBoy) {
        this.deliveryBoy = deliveryBoy;
    }
}

