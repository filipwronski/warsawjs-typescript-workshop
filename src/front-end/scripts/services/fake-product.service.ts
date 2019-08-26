import products from '../../../shared/fakes/products.json';
import { ProductList } from '../interfaces/product-list.interface.js';
class FakeProductService {
    
    async getProducts(): Promise<ProductList> {
        return products;
    }
}

export const Products = new FakeProductService();