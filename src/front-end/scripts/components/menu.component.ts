import { Component } from "./component";

export class MenuComponent extends Component {
    protected template() {
        return `
        <div class="container-fluid mt-3">
            <div class="jumbotron py-2 mb-2">
                <h1 class="display-4">
                    Sklep internetowy
                </h1>
                <p class="lead">
                    Kup dziś, odbierz jutro!
                </p>

                <div class="cart float-right">
                    <button class="btn btn-info js-display-cart">
                        Cart (<span class="cart-size">0</span>)
                    </button>
                </div>

                <div class="clearfix"></div>
            </div>
        </div>
        `;
    }
}
