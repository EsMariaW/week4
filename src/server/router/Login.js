const fs = require('fs');

module.exports = function(req,res){
    let username = req.body.username;
    let password = req.body.password;


    fs.readFile("./data/usersCredentials.json","utf8", function(err,data){
        if (err) throw err;

        // if no err
        let registeredUsers = JSON.parse(data);

        // check if submitted data matches valid user
        if (registeredUsers.find(registeredUser => 
            registeredUser.username == username &&
            registeredUser.password == password)){

            // if matches: show extended data about user
            fs.readFile("./data/usersDetails.json","utf8", function(err,data){
                let extendedData = JSON.parse(data);
                let userData = extendedData.find(registeredUser => 
                    registeredUser.username == username &&
                    registeredUser.password == password)
                userData.valid = true;
                res.send(userData);
            })
        } else {
            res.send({"valid": false});
        }
    })
};