# 🧪 OrangeHRM Automation Testing Project

Proyek akhir ini merupakan pengujian otomatis menggunakan **Cypress** pada website demo [OrangeHRM](https://opensource-demo.orangehrmlive.com/) dengan pendekatan **Page Object Model (POM)** dan penggunaan **Intercept**.

## 🔧 Fitur yang Diuji
1. Login
2. Forgot Password
3. Menu Dashboard (Directory)

## 📁 Struktur Folder
cypress/
├── e2e/
│   ├── login.cy.js
│   ├── forgotPassword.cy.js
│   └── dashboard.cy.js
├── support/
│   ├── commands.js
│   └── e2e.js
└── pageObjects/
    ├── LoginPage.js
    ├── ForgotPasswordPage.js
    └── DashboardPage.js



## 🚀 Cara Menjalankan

1. Clone repositori:
  https://github.com/IndraW02/ProjectAutomationTestingSanbercode.git

2. Install dependencies:
  npm install

3. Jalankan Cypress:
   
    npx cypress open
   
    Atau untuk headless:
    npx cypress run


## 🛠 Tools & Teknologi

1. Cypress

2. JavaScript

3. Page Object Model (POM)

4. Intercept (cy.intercept)

5. OrangeHRM Demo Site
   

## 📌 Catatan
Website target: https://opensource-demo.orangehrmlive.com/

Tes akan menunggu elemen tertentu sebagai verifikasi keberhasilan login/dashboard.


## 👨‍💻 Kontributor

Email: iwirawan54@gmail.com
