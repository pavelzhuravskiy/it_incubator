import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { productsRouter } from "./routes/products_router";
import {addressesRouter} from "./routes/addresses_router";

const app = express();
const port = process.env.PORT || 5000;



const parserMiddleware = bodyParser({});
app.use(parserMiddleware);

app.use("/products", productsRouter);
app.use("/addresses", addressesRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});