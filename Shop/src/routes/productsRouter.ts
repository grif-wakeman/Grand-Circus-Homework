import express from "express";
import Product from "../models/Product";
import { getClient } from "../db";
import { ObjectId } from "mongodb";

export const productsRouter = express.Router();





productsRouter.get("/products", async (req, res) => {
    let includes = req.query.includes;
    let maxPrice = parseInt(req.query.maxPrice as string);
    let limit = parseInt(req.query.limit as string);
    let query: any = {
      $and: [
    
          (maxPrice ? { price: { $lte: maxPrice } } : {}),
          (includes ? { name: { $regex: `${includes}`, $options: "xi" }} : {}),
        // new RegExp(`${includes}`, "i")
      ]
    }
    const client = await getClient();
    const cursor = await client.db().collection<Product>("products").find(query)
      .sort({price: -1});
    if (limit) {
      cursor.limit(limit);
    }
    const result = await cursor.toArray();
    res.status(200).json(result);
  });

productsRouter.get('/products/limit', async (req, res) => {
    const limit = parseInt(req.query.limit as string);
    const client = await getClient(); //connects to server
    const results = await client.db()
        .collection<Product>('products').find().limit(limit).toArray();

    res.json(results); //send json results
});

productsRouter.get('/products/includes', async (req, res) => {
    const search = req.query.search;
    
    const client = await getClient(); //connects to server
    const results = await client.db()
        .collection<Product>('products').find({ name: { $regex: `${search}`, $options: "xi" }}).toArray();

    res.json(results); //send json results
});

productsRouter.get('/products', async (req, res) => {

    const client = await getClient(); //connects to server
    const results = await client.db()
        .collection<Product>('products').find().toArray();

    res.json(results); //send json results
});

productsRouter.get('/products/:id', async (req, res) => {

    const _id = new ObjectId(req.params.id);
    const client = await getClient();
    const product = await client.db().collection<Product>('products')
        .findOne({ _id: _id });
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Not Found" });
    }
});

productsRouter.post('/products', async (req, res) => {
    const product = req.body as Product;
    const client = await getClient();
    await client.db()
        .collection<Product>('products')
        .insertOne(product);
    res.status(201).json(product);
});

productsRouter.delete('/products/:id', async (req, res) => {
    const _id = new ObjectId(req.params.id);
    const client = await getClient();
    const result = await client.db().collection<Product>('products')
        .deleteOne({ _id: _id });
    if (result.deletedCount === 0) {
        res.status(404).json({ message: "Not Found" });
    } else {
        res.status(204).end();
    }
});

productsRouter.put('/products/:id', async (req, res) => {
    const _id = new ObjectId(req.params.id);
    const data = req.body as Product;
    delete data._id;
    const client = await getClient();
    const result = await client.db().collection<Product>('products').replaceOne({ _id: _id }, data);
    if (result.modifiedCount === 0) {
        res.status(404).json({ message: "Not Found" });
    } else {
        data._id = _id;
        res.json(data);
    }
});