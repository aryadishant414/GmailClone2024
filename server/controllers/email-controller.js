
import { Email } from "../models/email.js";

export const saveSentEmails = async (req, res) => {
    try {
        // console.log("Inside req of save Email : ", req);
        console.log("Inside req body of save Email : ", req.body);

        const email = new Email(req.body);
        console.log("INSIDE NEW EMAIL IS : ", email);
        
        await email.save();

        res.status(200).send({message:"Email Saved Successfully"});
        
    } catch (error) {
        res.status(500).send({message: "Error while saving email on database in backend side"});
    }
}