const sessionCheck = (req, res, next) => {
    if(req.session.name == undefined){
        res.status(200).redirect('/api/session-expired');
    } else {
        next();
    }
}

export default sessionCheck;