import puppeteer from 'puppeteer';
import entry from '../models/entries.js';
import template from './pdf_template.js';
import path from 'path'

const pdf_generate = async (req, res) => {
   
    const {name} = req.body;

    try{
    
        console.log(name);
        let content = "";
        let ar = await entry.find({username: name});

        // create the content for all the entries of the given user
        for(let i = 0 ; i < ar.length ; i++){
            content += template(ar[i].membername, ar[i].no, ar[i].token);
        }
 
        const browser = await puppeteer.launch({headless: true})        
        const page = await browser.newPage();
            
        await page.setContent(content);

        // generate pdf
        await page.pdf({ 
            path: 'temp-file.pdf',
            format: 'A4', 
            displayHeaderFooter: false
        });

        await page.close();
        await browser.close();

        const __dirname = path.resolve();
        res.set({ 'Content-Type': 'application/pdf'})

        // send pdf as an response;
        res.sendFile(__dirname + "/temp-file.pdf");

    }
    catch(error){
        console.log(error);
        res.status(500);
    }
}


export default pdf_generate

