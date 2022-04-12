# build rest api with nodejs, express & postgres
<p> sponsored by : https://www.youtube.com/watch?v=DihOP19LQdg<p>

# install library
```bash 
npm init -y
``` 
package.json
```bash 
npm i --save express
``` 
library express / node_modules
```bash
npm i pg
```
library postgres

## localhost express
membuat file server.js yang sebagai berikut, lalu test dengan 'node server.js'. 
```javascript 
const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send("Hellow World")
})

app.listen(port, () => console.log(`app listening on port ${port}`));```






