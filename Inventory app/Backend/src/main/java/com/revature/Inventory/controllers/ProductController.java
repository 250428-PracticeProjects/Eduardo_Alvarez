package com.revature.Inventory.controllers;

import com.revature.Inventory.models.Product;
import com.revature.Inventory.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("products")
public class ProductController {
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("/")
    @ResponseStatus(HttpStatus.CREATED)
    public Product createProduct(@RequestBody Product newProductRequest) {
        return productService.createProduct(newProductRequest);
    }
}
