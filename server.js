let express=require("express");
const path = require("path");
let PORT = 9000;
let router=express();


router.use(express.static(path.join(__dirname,"portfolio")))


// now this is the all routes
router.get("/",(req,res)=>{
    res.sendFile(path.join("D:/project/portfolio","index.html"));
})

router.listen(PORT,()=>{
    console.log(`The port is listen in ${PORT}`);
})