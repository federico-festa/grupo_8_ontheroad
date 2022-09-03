const auth = (req, res, next) => {
    if(!req.session.userLog) {
        res.redirect('/user/login')
    }
    next();
};

module.exports = auth;