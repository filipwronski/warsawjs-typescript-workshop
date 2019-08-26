import { config } from "../configs/base";
import { ProductList } from "../interfaces/product-list.interface";
import makeRequest from "../../../make-request";

class ProductsService {
    async getProducts() {
        return makeRequest<ProductList, string>(config.productsUrl);
    }
}

export const Products = new ProductsService();