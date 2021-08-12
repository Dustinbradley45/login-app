import { json } from "body-parser";

const User = require('../models/authorization-model');
const bcrypt = require('bcrypt');

const createUser = async (req: any, res: any) => {
    const body = await req.body;
    console.log("firing")
    try {
        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide your information'
            });
        };
        const newUser = new User(body);

        if (!newUser) {
            return res.status(400).json({ success: false, error: "error " });
        }

        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt);

        newUser.save().then(() => {
            return res.status(200).json({
                success: true,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                id: newUser._id
            })
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            err,
            message: 'Error creating user'
        })
    }
}

const validateUser = async (req: any, res: any) => {
    try {
        const body = await req.body;  
        const user = await User.findOne({ email: body.email });
        console.log(await user, "user", body, "body");

        if (user) {
            
            // check user password with hashed password stored in the database
            // const validPassword = await bcrypt.compare(body.password, user.password);

            // if (validPassword) {
            //     res.status(200).json({ message: "Valid password" });
            // } else {
            //     res.status(400).json({ error: "Invalid Password" });
            // }
        } else {
            res.status(401).json({ message: "User does not exist, redirect to signup page" });
            // here add a push to go to login page. will need to create a sigal for front end. redirect to other page
            // createUser(req, res)
        }

    } catch (err) {
        console.log(err)
        res.status(400).json({ error: "no data" });
        
    }
}

const routeCallType = async (req: any, res: any) => {
    const body = await req.body;
    if(body) {
        await validateUser(req, res);

    } else {
        console.log("error")
    }
}


module.exports = routeCallType;
