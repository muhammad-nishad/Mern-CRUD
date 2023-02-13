const userModel = require('../model/user')
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
    const { name, email, password } = req.body.data
    try {
        if (!name || !email || !password) return res.status(400).json({ message: "All fields required" })
        const valid = await userModel.findOne({ email })
        if (valid) return res.status(400).json({ message: "Account  is alreday asociated with the Email" })
        const crypted = await bcrypt.hash(password, 10);
        const user = await userModel({ name, email, password: crypted }).save()
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)

    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body.data
    console.log(email,password);
    try {
        if (!email || !password) return res.status(400).json({ message: "All Fields Are Required" })
        const user = await userModel.findOne({ email })
        if (!user) return res.status(400).json({ message: "No User is Asociated With this Email" })
        const validUser = await bcrypt.compare(password, user.password)
        console.log(validUser,'validdd');
        if(!validUser) return res.status(400).json({message:"Invalid Password"})
        console.log(user);
        res.status(200).json(user)

    } catch (error) {
        console.log(error);
        res.status(500).json(error)


    }
}
