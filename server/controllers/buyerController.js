const Joi = require('joi');
const { Product,Comment } = require('../models/schema');

const commentSchema = Joi.object({
    body: Joi.string().required()
})


module.exports = {
    async getProduct(req, res) {
        //if(nearby)? {
        //    if(q) {
        //        search nearby
        //    }
        //    else {
        //        nearby
        //    }
        //} else {
        //    if(q) {
        //        search all
        //    }
        //    else {
        //        get all
        //    }
        //} 
               
        const products = await Product.findAll();

        res.send(products)
    },
    searchProduct() {},
    getNearbyProduct() {},
    getInformation() {},
    async giveComment(req,res) {
        const result = commentSchema.validate(req.body)
        if(result.error){
            res.send(result.error.message)
        }

        const comment = await Comment.create(req.body)

        req.send(comment)
    },
}