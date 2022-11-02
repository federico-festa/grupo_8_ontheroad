const admin = (req, res, next) => {
    if (req.session.userLog.id_type != 1) {
        return res.redirect('/');
    }
    next();
};

module.exports = admin;