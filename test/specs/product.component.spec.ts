import { ProductComponent } from "../../src/front-end/scripts/components/product.component";
import { Product } from "../../src/front-end/scripts/interfaces/product.interface";

describe("ProductComponent", () => {
    let data: Product;
    let $target: HTMLElement;
    beforeEach(() => {
        data = {
            id: "fake-id",
            name: "fake-name",
            description: "fake-descripton",
            imageUrl: "fake-image-url",
        };

        $target = document.createElement("div");
    });
    it("should be render where I would like", () => {
        // given
        const product = new ProductComponent();
        product.setData(data);
        // when
        product.render($target);
        // then
        expect($target.querySelectorAll(".product").length).toEqual(1);
    });

    it("should render product name", () => {
        const product = new ProductComponent();
        product.setData(data);
        product.render($target);
        const title = $target.querySelector(".card-title")!.textContent;
        expect(title).toEqual("fake-name");
    });
});
