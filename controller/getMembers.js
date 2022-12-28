import member from '../models/member.js'

const getMember = async (req, res) => {
    try{

        // fetch all the members
        const members = await member.find(); 
        res.status(200).json({members});
    }
    catch(error){
        console.log(error);
        res.status(500);
    }
}

export default getMember;