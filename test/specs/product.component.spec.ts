import { ProductComponent } from "../../src/front-end/scripts/components/product.component";

ProductComponent

describe('ProductComponent', () => {
    it('should be render where I would like', () => {
        // given
        const data = {
            id: 'fake-id',
            name: 'fake-name',
            description: 'fake-descripton',
            imageUrl: 'fake-image-url',
        };
        const $target = document.createElement('div');
        const product = new ProductComponent();
        product.setData(data);
        // when
        product.render($target);
        // then
        expect($target.querySelectorAll('.product').length).toEqual(1);
       
    });
})