const app = require("./src/server");

const conDb = require("./src/config/conDb")

const port = process.env.PORT || 3000

conDb().then( async (res)=>{
 app.listen(port, () => 
        console.log("Server running on port 3000")
    );
    
})
.catch((err) => console.log(err))