import entry from '../models/entries.js'
import userData from '../models/user.js'

const addEntry = async(req, res) => {
    const {username, membername, no} = req.body;

    try{

        let user = await userData.find({email: username});

        // create new entry
        await entry.create({username, membername, no, token: user[0].token});

        // increment the token no by 1
        await userData.findByIdAndUpdate(user[0].id, {token: user[0].token+1});
        return res.status(200).json({code: 0});
    }
    catch(error){
        return res.status(500);
    }
}

export default addEntry