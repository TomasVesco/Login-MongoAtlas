const signUpCheck = (req, res, next) => {

    const { name } = req.body;

    //const users = base de datos;

    // const signUpChecking = users.find(user => user.name === name);

    const signUpChecking = undefined;

    if(signUpChecking != undefined){
        next();
    } else {
        res.status(200).redirect('/api/signup-error');
    }
}

export default signUpCheck;