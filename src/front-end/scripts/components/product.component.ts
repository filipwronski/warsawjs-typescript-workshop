import { Product } from "../interfaces/product.interface";
import { log } from "../decorators/log.deccorrator";

export class ProductComponent {
    data: any = null;
    $el: HTMLElement = document.createElement("div");
    @log
    template(product: Product) {
        return `
        <div class="card product">
            <img src="${ product.imageUrl }" class="card-img-top" alt=""/>
            <div class="card-body">
                <h5 class="card-title">${ product.name }</h5>
                <p class="card-text">${ product.description }</p>
                <button class="btn btn-primary">
                    Dodaj do koszyka
                </button>
            </div>
        </div>
        `;
    }

    setData<T>(data: Product) {
        this.data = data;
    }

    render($target: HTMLElement) {
        this.$el.innerHTML = this.template(this.data);
        $target.append(this.$el);
    }
}
