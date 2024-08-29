const fs = require('fs');

module.exports = function(req,res){
    let username = req.body.username;
    let password = req.body.password;


    fs.readFile("./data/usersDetails.json","utf8", function(err,data){
        if (err) throw err;

        // if no err
        let registeredUsers = JSON.parse(data);

        // check if submitted data matches valid user
        if (registeredUsers.find(registeredUser => 
            registeredUser.username == username &&
            registeredUser.password == password)){

            // if matches: show extended data about user
            let userData = registeredUsers.find(registeredUser => 
                registeredUser.username == username &&
                registeredUser.password == password)
            // send back a property of valid=true 
            // also send the rest of the user details
            userData.valid = true;
            res.send(userData);
        } else {
            res.send({"valid": false});
        }
    })
};