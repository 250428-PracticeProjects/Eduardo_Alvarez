package com.revature.Inventory.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "products")
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productID;

    @Column(nullable = false, unique = true)
    private String productName;
    @Column
    private String description;
    @Column(nullable = false)
    private float price;
    @Column (nullable = false)
    private int stock;
}