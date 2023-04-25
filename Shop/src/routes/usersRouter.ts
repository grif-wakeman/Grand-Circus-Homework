import express from "express";
import User from "../models/User";
import { getClient } from "../db";
import { ObjectId } from "mongodb";

export const usersRouter = express.Router();

usersRouter.get('/users', async (req, res) => {

    const client = await getClient(); //connects to server
    const results = await client.db()
        .collection<User>('users').find().toArray();

    res.json(results); //send json results
});

usersRouter.get('/users/:id', async (req, res) => {

    const _id = new ObjectId(req.params.id);
    const client = await getClient();
    const user = await client.db().collection<User>('users')
        .findOne({ _id: _id });
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "Not Found" });
    }
});

usersRouter.post('/users', async (req, res) => {
    const user = req.body as User;
    const client = await getClient();
    await client.db()
        .collection<User>('users')
        .insertOne(user);
    res.status(201).json(user);
});

usersRouter.delete('/users/:id', async (req, res) => {
    const _id = new ObjectId(req.params.id);
    const client = await getClient();
    const result = await client.db().collection<User>('users')
        .deleteOne({ _id: _id });
    if (result.deletedCount === 0) {
        res.status(404).json({ message: "Not Found" });
    } else {
        res.status(204).end();
    }
});

usersRouter.put('/users/:id', async (req, res) => {
    const _id = new ObjectId(req.params.id);
    const data = req.body as User;
    delete data._id;
    const client = await getClient();
    const result = await client.db().collection<User>('users').replaceOne({ _id: _id }, data);
    if (result.modifiedCount === 0) {
        res.status(404).json({ message: "Not Found" });
    } else {
        data._id = _id;
        res.json(data);
    }
});