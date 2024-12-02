

//register
exports.registerController=(req,res)=>{
    console.log("Inside registerController");
    const {usernmae,email,password}=req.body
    console.log(usernmae,email,password);
    res.status(200).json("Request recieved!!")
}
//login