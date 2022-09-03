const guest = (req, res, next) => {
    if(req.session.userLog) {
        res.redirect('/')
    }
    next();
};

module.exports = guest;