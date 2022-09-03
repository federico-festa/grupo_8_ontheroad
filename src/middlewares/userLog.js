const userLog = (req, res, next) => {
    res.locals.log = false;
    if(req.session && req.session.userLog) {
        res.locals.log = true;
        res.locals.userLog = req.session.userLog;
    }
    next();
};

module.exports = userLog;