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
    res.send("Hello OnlyManullang")
})

app.listen(port, () => console.log(`app listening on port ${port}`));
```
## konfigurasi database postgres
buat database yang bernama students dan untuk table nya sebagai berikut.
```sql
CREATE TABLE public.students (
	ID SERIAL primary KEY,
	name varchar(255),
	email varchar (255),
	age int,
	dob date
);
```
mengisi data ke dalam kolom yang telah kita buat, sebagai berikut.
```sql
insert into students (name, email, age ,dob)
values ('OnlyManullang', 'OnlyManullang@email.com', 99, '1822-01-01'),
('OnlyYou', 'OnlyYou@email.com', 88, '1899-04-02');
```






