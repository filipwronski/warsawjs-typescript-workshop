import "../index.html";
import "../main.css";

import { ProductComponent } from './components/product.component';
import { Products } from './services/product.service';
import { Product } from "./interfaces/product.interface";

async function main() {
    console.log('main');

    const $app = document.querySelector<HTMLDivElement>('#app')!;
    const products = await Products.getProducts();

    products.forEach((product) => {
        const product1 = new ProductComponent();
        product1.setData<Product>(product);
        product1.render($app);
    });
}

main();