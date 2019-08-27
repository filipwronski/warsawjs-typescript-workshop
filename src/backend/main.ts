import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import products from '../shared/fakes/products.json';
import productsLong from '../shared/fakes/products-long.json';
import { ProductList } from '../shared/interfaces/product-list.interface';

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.get('/', (req: express.Request, res: express.Response) => {
    res.json({ status: 'ok'});
})

// app.get('/products', (req: express.Request, res: express.Response) => {
//     res.json(products as ProductList);
// })

app.get('/products', (req: express.Request, res: express.Response) => {
    res.json(productsLong as ProductList);
})

app.listen(4000, () => {
    console.log('Server was started at http://localhost:4000');
})