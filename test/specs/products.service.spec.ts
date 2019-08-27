import { Products } from "../../src/front-end/scripts/services/product.service";
import nock from "nock";
import "isomorphic-fetch";

describe("getProducts", () => {
    it("is a function", () => {
        expect(typeof Products.getProducts).toEqual("function");
    });

    it("should return  list of products", async () => {
        // given
        const old = self.fetch;
        self.fetch = jest.fn().mockImplementationOnce(() => {
            return { json: () => []};
        });
        // when
        const result =  await Products.getProducts();
        // then
        expect(result).toEqual(expect.any(Array));
        // teardown
        self.fetch = old;
    });

    it("should make request", async () => {
        // given
        const response = ["a", "b"];
        nock("https://my-json-server.typicode.com")
            .get("/piecioshka/fakes/products")
            .reply(200, response);
        // when
        const result =  await Products.getProducts();
        // then
        expect(result).toEqual(response);
    });

    it.skip("should handle error", async () => {
        // given
        const response = "<h1>Error</h1>";
        nock("https://my-json-server.typicode.com")
            .get("/piecioshka/fakes/products")
            .reply(500, response);
        // when
        try {
            const result =  await Products.getProducts();
        } catch (err) {
            // then
            expect(err.message).toEqual(response);
        }
    });
});
