const fs = require('fs');

module.exports = function(req,res){
    let username = req.body.username;
    let password = req.body.password;


    fs.readFile("./data/usersDetails.json","utf8", function(err,data){
        if (err) throw err;

        // if no err
        let registeredUsers = JSON.parse(data);

        // check against array of users
        //      to see if submitted data matches a valid user

        if (registeredUsers.find(registeredUser => 
            registeredUser.username == username &&
            registeredUser.password == password)){      // i.e. if matches valid user

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