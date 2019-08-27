import { Product } from "../../../shared/interfaces/product.interface";
import { log } from "../decorators/log.deccorrator";
import { Component } from "./component";

export class ProductComponent extends Component {
    data: any = null;
    $el: HTMLElement = document.createElement("div");
    @log
    protected template(product: Product) {
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
