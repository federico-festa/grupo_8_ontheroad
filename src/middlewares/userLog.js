const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');

const userLog = async (req, res, next) => {
    res.locals.log = false;
    const cookieEmail = req.cookies.userEmail;
    const userCookie = await db.User.findOne({ where: {email: {[Op.like]: cookieEmail} }})
    if(userCookie) {
        req.session.userLog = userCookie;
    };
    if(req.session && req.session.userLog) {
        res.locals.log = true;
        res.locals.userLog = req.session.userLog;
    };
    next();
};

module.exports = userLog;