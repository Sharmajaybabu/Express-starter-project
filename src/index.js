const express = require ('express');

const serverconfig = require(`./config/serverconfig`)

const app = express();

app.listen(serverconfig.PORT, () => {
    console.log(`server started at port ${serverconfig.PORT}`);
    console.log(process.env);
    
})