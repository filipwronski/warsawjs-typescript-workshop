import { Product } from "../interfaces/product.interface";

export class ProductComponent {
    data: any = null;
    $el: HTMLElement;

    constructor() {
        this.$el = document.createElement('div');
        this.$el.classList.add('product');
    }

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
        `
    }

    setData<T>(data: Product) {
        this.data = data;
    }

    render($target: HTMLElement) {
        this.$el.innerHTML = this.template(this.data);
        $target.append(this.$el);
    }
}