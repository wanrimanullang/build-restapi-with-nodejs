# Pendahuluan
~Horas, Horas, Horas!! kali ini membuat sebuah project kecil yang bisa sebagai acuan membangun sistem REST API pada back-end. beberapa fitur untuk back-end yang dimana membangun beberapa sistem seperti.
1. Menampilkan data dari database.
2. Menampilkan data berdasarkan ID.
3. Menambahkan data dengan nama, email, umur, dan tanggal
4. menghapus data yang ada di database
5. mengupdate data yang ada di database.

#Tools
beberapa tools yang saya gunakan disini.
1. Postgres
2. ExpressJs
3. 

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
# membuat connection ke database 
dalam pembuatan koneksi dibutuhkan beberapa hal yang ada di database. untuk code nya sebagai berikut.
```javascript
const Pool = require("pg").Pool;

const pool = new Pool({
    host: "localhost",
    user: " ", //user database
    port: 5432,
    password: " ", //password database
    database: " " //nama database
});

module.exports = pool;
```
# membuat controller.js di folder src/student
dalam pembuatan controller ini bertujuan untuk memudahkan kita dalam integrasi langsung kedatabase. seperti menampilkan, menginput, 
dan menghapus. bisa dikatakan didalam controller ini method ada method CRUD. untuk source code yang kita masukkan didalam controller sebagai berikut.
``` javascript
const pool = require('../../db')

const getStudents = (req, res) => {
    pool.query("select * from students", (error, result) => {
        if(error) throw error;
        res.status(200).json(result.rows);
    });
};


module.exports = {
    getStudents,
};
```
# membuat routes.js di folder/students
di dalam routes untuk menampung semua data yang akan kita integrasikan ke server. bisa dibilang routes sebagai jembatan antara controller ke server.js. tujuan dalam pembuatan ini untuk lebih mudah dalam tracing masalah yang terjadi dan membuat lebih rapi untuk file file kita.
untuk source code di routes.js sebagai berikut.

```javascript 
const {Router} = require('express');
const router = Router();
const controller = require('./controller')

router.get("/", controller.getStudents)

module.exports = router;
```
# integerasi api di server.js
terakhir kita integerasi untuk file dari routes ke server.js agar dapat di akses user. disini bisa kita bilang untuk metoder API nya.
source code sebagai berikut. 

```javascript 
const express = require("express");
const studentRoutes = require('./src/student/routes')

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', studentRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
```
# jalankan server.js
menjalankan server.js dengan menggunakan command 
```shell
npx run server.js
```

# build rest api with nodejs, express & postgres
<p> sponsored by : https://www.youtube.com/watch?v=DihOP19LQdg<p>










