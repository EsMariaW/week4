const fs = require('fs');

module.exports = function(req,res){
    let userDetails = {
        "username": req.body.username,
        "birthdate": req.body.birthdate,
        "age": req.body.age,
    }

     fs.readFile("./data/usersDetails.json","utf8", function(err,data){
        if (err) throw err;

        // if no err
        let recordedUsers = []
        recordedUsers = JSON.parse(data);

        let oldUsername = req.body.oldUsername;

        // find index of current user's data
        const index = recordedUsers.findIndex(user => user.username == oldUsername);

        // check if submitted data matches valid user
        recordedUsers[index].username = req.body.username;
        recordedUsers[index].birthdate = req.body.birthdate;
        recordedUsers[index].age = req.body.age;
        res.send(recordedUsers[index]);

        let recordedUsersJSON = JSON.stringify(recordedUsers);
        fs.writeFile("./data/usersDetails.json", recordedUsersJSON, "utf8", function(err){
            if (err) throw err;
        })
    })
};