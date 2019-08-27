import { config } from "../configs/base";
import { ProductList } from "../interfaces/product-list.interface";
import makeRequest from "../../../make-request";
import { log } from "../decorators/log.deccorrator";

class ProductsService {
    @log
    async getProducts() {
        return makeRequest<ProductList, string>(config.productsUrl);
    }
}

export const Products = new ProductsService();