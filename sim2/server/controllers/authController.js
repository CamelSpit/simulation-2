module.exports = {
    login: (req, res, next) =>{
        console.log('hit login function');
        //sim1: 76F
        let {username} = req.body;
        const db = req.app.get('db');
        let users = db.getUsers().then(users=>{

            console.log(users);

            //sim1: 37D
            const user = users.find(user=> user.username === username);
            
            console.log(user.username);

            if (user) {
                console.log(req.session.user);
                //sim2: 75F
                req.session.user.username = user.username;
                res.status(200).send(req.session.user);
            }
            else {
                res.status(403).send('Please Register');
            }

        }).catch(e=>console.log(e))
    }
}