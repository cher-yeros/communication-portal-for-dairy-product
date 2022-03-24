const sequelize = require('sequelize');
const Joi = require('joi');
const { Product,Comment } = require('../models/schema');

const productSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.required()
});

const commentSchema = Joi.object({
    body: Joi.string().required()
})

module.exports = {
    async postProduct(req,res) {
        const result = productSchema.validate(req.body);
        if(result.error) {
            res.send(result.error.message)
        }

        const product = await Product.create(result.value)

        res.send(product)
    },
    async giveComment(req,res) {
        const result = commentSchema.validate(req.body)
        if(result.error){
            res.send(result.error.message)
        }

        const comment = await Comment.create(req.body)

        req.send(comment)
    }
}