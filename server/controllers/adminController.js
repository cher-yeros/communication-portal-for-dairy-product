const Joi = require('joi');
const { User, Notification, Comment } = require('../models/schema')

const notSchema = Joi.object({
    type : Joi.string().required(),
    title : Joi.string().required(),
    body : Joi.string().required(),
})
module.exports = {
    async getUsers(req,res) {
        const users = await User.findAll();

        res.send(users)
    },
    async notifyFeature(req, res) {
        const result = notSchema.validate(req.body)
        if(result.error) {
            res.send(result.error.message)
        }

        const not = await Notification.create(req.body)

        res.send(not)
    },
    generateReport() {

    },
    backupData() {

    },
    restoreData() {

    },
    async getComments(req,res) {
        const comments = await Comment.findAll();

        res.send(comments)
    }
}