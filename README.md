# EmployeeManagement

This project was generated with 
- [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.
- [Material-Angular] (https://material.angular.io/) version 17.3.1
- [ngx-mask] (https://www.npmjs.com/package/ngx-mask/v/15.1.5)
- [Json-Server] (https://www.npmjs.com/package/json-server)

## Instal Project

- Persiapkan Lingkungan Pengembangan: 
Pastikan Anda memiliki lingkungan pengembangan yang sesuai di sistem Anda. Hal ini mencakup Node.js, npm (Node Package Manager), dan Angular CLI.

- Instalasi Angular CLI:
ika Anda belum memiliki Angular CLI diinstal, Anda dapat menginstalnya secara global dengan menjalankan perintah berikut melalui terminal atau command prompt:
`npm install -g @angular/cli`

- Clone Repository:
Gunakan perintah git clone untuk mengkloning repositori proyek Angular dari repositori yang ada. Misalnya:
`git clone <url_repositori>` dalam priject ini menggunakan url `git clone https://github.com/fuzi24/management-employee.git`.
Gantilah <url_repositori> dengan URL repositori yang sesuai.

- Masuk ke Direktori Proyek:
Navigasikan terminal atau command prompt Anda ke direktori proyek yang baru saja Anda kloning:
`cd <nama_direktori>` misal `cd management-employee`
Gantilah <nama_direktori> dengan nama direktori yang sesuai dengan proyek yang Anda kloning.

- Instalasi Dependensi:
Setelah Anda berada dalam direktori proyek, Anda perlu menginstal semua dependensi yang diperlukan. Lakukan ini dengan menjalankan perintah:
`npm install`

- Jalankan Server Lokal:
Setelah dependensi terinstal, Anda dapat menjalankan server pengembangan lokal menggunakan Angular CLI. Jalankan perintah berikut:
`ng serve`

- Jalankan Json Server pada Terminal Lain
Setelah server dijalankan, tambah terminal dan jalankan perintah berikut, agar Json server jalan dan data dummy bisa di akses
`json-server --watch db.json`

pastikan hal hal seperti ini sudah muncul pada terminal

Endpoints:
http://localhost:3000/posts.
http://localhost:3000/user.
http://localhost:3000/comments.
http://localhost:3000/profile.
http://localhost:3000/employee.

jika data seperti di atas sudah muncul berarti json server sudah jalan dan CRUD bisa dilakukan

- Akses Aplikasi:
Setelah server lokal berhasil berjalan, buka peramban web Anda dan arahkan ke `http://localhost:4200/`. Ini adalah lokasi tempat proyek Angular Anda akan dijalankan secara lokal.

<!-- ## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. -->
