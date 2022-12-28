import * as status from './status.js'
import admindata from '../models/admin.js'
import userdata from '../models/user.js'

export const user_login = async (req, res) => {
    let {email, pass} = req.body;
    email = email.trim();
    pass = pass.trim();
    try{
        const user = await userdata.findOne( {email, pass})
        
        // if no user found return invalid-credentials
        if(user === null)  
            return res.status(200).json({code: status.INVALID_CREDENTIALS});

        console.log("correct");
        return res.status(200).json({code: status.SUCCESS, name: user.email});
    }
    catch(exception)
    {
        return res.status(500)
    }
}


export const admin_login = async (req, res) => { 
    let {email, pass} = req.body;
    email = email.trim();
    pass = pass.trim();
    try{
        const user = await admindata.findOne( {email, pass})
        
        if(user === null)  
            return res.status(200).json({code: status.INVALID_CREDENTIALS});

        return res.status(200).json({code: status.SUCCESS, name: user.email});
    }
    catch(exception)
    {
        return res.status(500)
    }
}
