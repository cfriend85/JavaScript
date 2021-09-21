const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secret} = require('../config/jwt');

class UserController {
    register(req, res){
        const user = new User(req.body)
        user.save()
            .then(() => {
                res.cookie('usertoken', jwt.sign({_id: user._id}, secret), {httpOnly: true} )
                .json({msg: 'Successfully created User', user: user})
            })
            .catch(err => res.json(err))
    }

    login(req, res){
        User.findOne({email: req.body.email})
            .then(user => {
                if(user === null){
                    res.json({msg: 'User not found'})
                } else{
                    bcrypt.compare(req.body.password, user.password)
                        .then(passwordIsValid => {
                            if(passwordIsValid){
                                res.cookie('usertoken', jwt.sign({_id: user._id}, secret), {httpOnly: true} )
                                .json({msg: 'Login successful', user: user})
                            } else{
                                res.json({msg: 'Password Incorrect'})
                            }
                        })
                        .catch(err => res.json({msg: 'invalid login', err}))
                }
            })
            .catch(err => res.json(err))
    }

    findUser(req, res){
        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true});
        User.findById(decodedJWT.payload._id)
            .then(user => res.json({user}))
            .catch(err => res.json(err))
    }

    logout(req, res){
        res.cookie('usertoken', jwt.sign({_id:''}, secret), {
            httpOnly: true,
            maxAge: 0
        }).json({msg: 'Logout Successful'})
    }

}


module.exports = new UserController()


