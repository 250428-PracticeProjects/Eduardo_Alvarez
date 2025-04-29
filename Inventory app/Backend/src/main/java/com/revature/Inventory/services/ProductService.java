package com.revature.Inventory.services;

import com.revature.Inventory.models.Product;
import com.revature.Inventory.repos.ProductDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductDao productDao;

    @Autowired
    public ProductService(ProductDao productDao) {
        this.productDao = productDao;
    }

    public List<Product> GetAllProducts(){
        return productDao.findAll();
    }

    public Product CreateProduct(Product productRequest){
        return productDao.save(productRequest);
    }

    public  void DeleteProduct(int productID)
    {
        productDao.deleteById(productID);
    }
}
