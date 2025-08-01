# Simple Orders App

Aplikasi "Simple Orders App" adalah sebuah aplikasi web yang dibangun menggunakan Node.js, Express.js, dan React.js. Aplikasi ini memungkinkan pengguna untuk membuat, membaca, memperbarui, dan menghapus data pesanan.

## Cara Menjalankan Aplikasi

1. Clone Repository\
Clone repository ini ke dalam direktori lokal Anda dengan menggunakan perintah berikut:

```bash
git clone https://github.com/vonspinger/Simple-Orders-App.git
```

2. Instalasi Dependensi\
Masuk ke dalam direktori proyek dan jalankan perintah berikut untuk menginstal dependensi yang diperlukan:

```bash
cd simple-orders-app
npm install
```

3. Menjalankan Backend\
Masuk ke dalam direktori backend dan jalankan perintah berikut untuk menjalankan server backend:

```bash
cd backend
npm start
```

4. Menjalankan Frontend\
Masuk ke dalam direktori frontend dan jalankan perintah berikut untuk menjalankan aplikasi frontend:

```bash
cd frontend
npm start
```

5. Akses Aplikasi\
Buka browser Anda dan akses aplikasi dengan URL http://localhost:3000.

### Fitur Aplikasi

- Membuat pesanan baru
- Membaca data pesanan
- Memperbarui data pesanan
- Menghapus data pesanan

### Validasi

- Backend: Aplikasi ini menggunakan validasi di backend untuk memastikan bahwa data yang dikirimkan sudah lengkap dan sesuai dengan format yang diharapkan.
- Frontend: Aplikasi ini juga menggunakan validasi di frontend untuk memastikan bahwa data yang diinputkan sudah lengkap dan sesuai dengan format yang diharapkan.

### Arsitektur

- Backend: Aplikasi ini menggunakan pattern MVC (Model-View-Controller) dengan Express.js sebagai frameworknya.
- Frontend: Aplikasi ini menggunakan React.js sebagai library untuk membangun komponen UI.

### Struktur Microservice

Aplikasi ini dipisah menjadi dua microservice yang berbeda, maka struktur microservice dapat dijelaskan sebagai berikut:

#### Backend Service
- Nama service: orders-service
- Fungsi: Menangani operasi CRUD untuk pesanan, seperti membuat, membaca, memperbarui, dan menghapus pesanan.
- API: Menyediakan API untuk frontend, seperti /orders untuk mengambil daftar pesanan dan /orders/:id untuk mengambil detail pesanan.
- Database: Menggunakan database MongoDB untuk menyimpan data pesanan.

#### Frontend Service
- Nama service: orders-frontend
- Fungsi: Menangani interaksi pengguna dengan aplikasi, seperti menampilkan daftar pesanan dan form untuk membuat pesanan baru.
- API: Mengonsumsi API dari backend service untuk mengambil data pesanan dan mengirimkan data pesanan baru.
- Teknologi: Menggunakan React.js sebagai library untuk membangun komponen UI.

### Teknologi yang Digunakan

- Node.js
- Express.js
- React.js
- MongoDB

## Cara Berkontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan fork repository ini dan kirimkan pull request Anda.

## Lisensi

Aplikasi ini dilisensikan di bawah lisensi MIT.