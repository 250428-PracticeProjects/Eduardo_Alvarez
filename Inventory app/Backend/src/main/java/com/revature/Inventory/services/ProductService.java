package com.revature.Inventory.services;

import com.revature.Inventory.models.Product;
import com.revature.Inventory.repos.ProductDAO;
import jakarta.persistence.criteria.Root;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    private final ProductDAO productDAO;

    @Autowired
    public ProductService(ProductDAO productDAO){
        this.productDAO = productDAO;
    }

    public Product createProduct(Product productCreationRequest){

        return productDAO.
    }
}
