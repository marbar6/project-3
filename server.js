let express=require("express");
const path = require("path");
let PORT = 9000;
let router=express();

// css style
router.use(express.static(path.join(__dirname)))


// now this is the all routes
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})

router.listen(PORT,()=>{
    console.log(`The port is listen in ${PORT}`);
})