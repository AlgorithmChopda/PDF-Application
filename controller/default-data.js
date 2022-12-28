import user from '../models/user.js'
import member from '../models/member.js'
import admin from '../models/admin.js'

const addData= async(req, res) => {
    try{

        /* 
            this file is used to add default data
            5 user's 
            1 admin
            10 members are created

            it initializes the data
        */


        // await user.create({email: "vinay@gmail.com", pass: "11"});
        // await user.create({email: "abc@gmail.com", pass: "11"});
        // await user.create({email: "naman@gmail.com", pass: "11"});
        // await user.create({email: "developer@gmail.com", pass: "11"});
        // await user.create({email: "programmer@gmail.com", pass: "11"});

        //await admin.create({email: "admin@gmail.com", pass: "admin"});

        // await member.create({name: "Ramesh"});
        // await member.create({name:"Suresh"});
        // await member.create({name:"Umesh"});
        // await member.create({name:"Hitesh"});
        // await member.create({name:"Mahesh"});
        // await member.create({name: "Nandini"});
        // await member.create({name:"Sunanda"});
        // await member.create({name:"Kanta"});
        // await member.create({name:"John"});
        // await member.create({name:"Jack"});

        res.send("Added-data");
    }
    catch(error){
        res.send(error);
    }
}

export default addData