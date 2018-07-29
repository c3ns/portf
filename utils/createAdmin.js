module.exports = async () =>  {
    if(process.argv[2] === 'createadmin'){
        const User = require('../models/User');
        const bcrypt = require('bcryptjs');

        try {
            const checkUser = await User.findOne({email: process.env.ADMIN_MAIL})
            if (checkUser) {
                console.log('Admin already exist!');
                return process.exit(1);
            }

            const hash = await bcrypt.hash(process.env.ADMIN_PASS, 10);
            const user = new User({
                email: process.env.ADMIN_MAIL,
                password: hash,
                isAdmin: true
            });

            await user.save();
            console.log('Admin created!');
            return process.exit(1);
        }catch (err) {
            console.log(err);
            return process.exit(1);
        }
    }
};