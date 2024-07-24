const Goods = require("../models/goods");

const GetGoods = async (req, res) => {
    try {
        let goods = await Goods.find();
        if (!goods) {
            res.status(404).json({ error: "There is no array" });
            return;
        }
        res.json(goods);
    }
    catch (err) {
        res.json({ error: err.message })
    }
}

const CreateGood = async (req, res) => {
    console.log(req.body);
    try {
        let goodsItem = await Goods.create({
            productName: req.body.productName,
            price: req.body.price,
        });

        if (!goodsItem) {
            res.status(500).json({ error: "Goods was not created" });
            return;
        }

        let createdGoods = await goodsItem.save();
        res.status(200).json(createdGoods);
    } catch (err) {
        res.json({ error: err.message })
    }
}

module.exports = { GetGoods, CreateGood };