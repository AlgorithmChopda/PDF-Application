import entry from '../models/entries.js'

const getentry = async (req, res) => {
    try{

        // fetch all the entries
        const entry_list = await entry.find(); 
        res.status(200).json({entry_list});
    }
    catch(error){
        console.log(error);
        res.status(500);
    }
}

export default getentry;