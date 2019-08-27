import "../index.html";
import "../main.css";

import { ProductComponent } from "./components/product.component";
import { Product } from "./interfaces/product.interface";
// import { Products } from './services/fake-product.service';
import { Products } from "./services/product.service";

async function main() {
    const $app = document.querySelector<HTMLDivElement>("#app")!;
    const products = await Products.getProducts();

    products.forEach((product) => {
        const product1 = new ProductComponent();
        product1.setData<Product>(product);
        product1.render($app);
    });
}

main();
