import express, { json } from "express";
import Product from "../models/Product";
import { getClient } from "../db";
import { ObjectId } from "mongodb";
import CartItem from "../models/CartItem";

export const cartItemsRouter = express.Router();

cartItemsRouter.get('/cartItems:userId', async (req, res) => {
    const userId: any = req.params.userId;
    const client = await getClient(); //connects to server
    const results = await client.db()
        .collection<CartItem>('cartItems').find({ userId: userId}).toArray();
        console.log(results);
        
    

    res.json(results); //send json results
});

cartItemsRouter.get('/cartItems/:id', async (req, res) => {

    const _id = new ObjectId(req.params.id);
    const client = await getClient();
    const cartItem = await client.db().collection<CartItem>('cartItems')
        .findOne({ _id: _id });
    if (cartItem) {
        res.json(cartItem);
    } else {
        res.status(404).json({ message: "Not Found" });
    }
});

cartItemsRouter.post('/cartItems', async (req, res) => {
    const cartItem = req.body as CartItem;
    const client = await getClient();
    await client.db()
        .collection<CartItem>('cartItems')
        .insertOne(cartItem);
    res.status(201).json(cartItem);
});

cartItemsRouter.delete('/cartItems/:id', async (req, res) => {
    const _id = new ObjectId(req.params.id);
    const client = await getClient();
    const result = await client.db().collection<CartItem>('cartItems')
        .deleteOne({ _id: _id });
    if (result.deletedCount === 0) {
        res.status(404).json({ message: "Not Found" });
    } else {
        res.status(204).end();
    }
});

cartItemsRouter.put('/cartItems/:id', async (req, res) => {
    const _id = new ObjectId(req.params.id);
    const data = req.body as CartItem;
    delete data._id;
    const client = await getClient();
    const result = await client.db().collection<CartItem>('cartItems').replaceOne({ _id: _id }, data);
    if (result.modifiedCount === 0) {
        res.status(404).json({ message: "Not Found" });
    } else {
        data._id = _id;
        res.json(data);
    }
});