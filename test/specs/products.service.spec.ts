import { Products } from "../../src/front-end/scripts/services/fake-product.service";

describe('getProducts', () => {
    it('is a function', () => {
        expect(typeof Products.getProducts).toEqual('function');
    });

    it('should return  list of products', async () => {
        self.fetch = jest.fn().mockImplementation(() => {
            return { json: () => []}
        })
        const result =  await Products.getProducts();
        expect(result).toEqual(expect.any(Array));
    });
})