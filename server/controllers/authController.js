require('dotenv').config()
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { Op } = require('sequelize');
const { User, Role } = require('../models/schema');

const userSchema = Joi.object({
    id: Joi.number(),
    name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().email(),
});

module.exports = {
    async login(req,res) {
        // TODO : password encryption
        const user = await User.findOne({
            where : {
                [Op.and] : {
                    phone: req.body.phone,
                    password: req.body.password
                }
                
            },
            include: [ Role ]
        })

        if(!user) {
            res.send({
                error: 'user not found'
            })
        }
        else {
            const roles = user.Roles
            const userRole = req.body.role

            var yes = false

            roles.forEach(role => {
                if(role.name === userRole) {
                    yes = true
                }
                else {
                    yes = false
                }
            });
            
            if(!yes) {
                res.json({
                    auth: false,
                    messege: "Permission denied"
                })
            }

            jwt.sign({user}, process.env.ACCESS_TOKEN , function(err, token) {
                if(err){
                    res.send(err)
                }
                else {
                    var u = user.toJSON()

                    u.token = token
                    u.role = req.body.role

                    const r = User.update({
                        login_status : true
                    },
                    {
                        where: {
                        id: user.id
                    }})

                    res.send({
                        user: u
                    })
                }
            });

        }

    },
    logout() {

    },
    async createAccount(req,res) {
        const result = await userSchema.validate(req.body);

        if(result.error){
            res.send(result.error.message)
        }
        
        const user = await User.create(result.value)

        res.send({
            success: true,
            user :user
        })
        
    },
    async editProfile(req,res) {
        const result = await userSchema.validate(req.body);

        if(result.error){
            res.send(result.error)
        }
        
        const user = await User.update(result.value, {
            where : {
                id: req.body.id
            }
        })

        res.send(user)
    },
    async resetPassword() {
        const user = await User.findOne({
            where : {
                [Op.and] : {
                    phone: req.body.phone,
                    password: req.body.password
                }
                
            }
        })

        if(!user) {
            res.send("User doesn't exist")
        }

        // TODO : send text and verifiy
    }, 
}