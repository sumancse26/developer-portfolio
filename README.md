# Developer Portfolio - Md. Suman Sarkar

This is the personal portfolio website of **Md. Suman Sarkar**, a Software Engineer. It showcases my skills, experience, projects, and education. The website is built using Next.js and is fully responsive.

---

# Demo :movie_camera:

![](./public/image/screen.png)

---

## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Usage](#usage-joystick)
- [Packages Used](#packages-used-package)

---

# Sections :bookmark:

- HERO SECTION
- ABOUT ME
- EXPERIENCE
- SKILLS
- PROJECTS
- EDUCATION
- BLOG
- CONTACTS

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

## <br />

# Getting Started :dart:

### Clone the repo

Open your terminal and perform the following commands:

```
git clone https://github.com/sumancse26/developer-portfolio.git

cd developer-portfolio
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Usage :joystick:

Goto [emailjs.com](https://www.emailjs.com/) and create a new account for the mail sending. In free trial you will get 200 mail per month. After setup `emailjs` account, Please create a new `.env` file from `.env.example` file.

Eg:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID =
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID =
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY =
NEXT_PUBLIC_GTM = # For site analytics
NEXT_PUBLIC_APP_URL = "http://127.0.0.1:3000"
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY = # For captcha verification on contact form
NEXT_PUBLIC_RECAPTCHA_SITE_KEY =
```

### Then, Customize data in the `utils/data` folder.

Eg: `utils/data/personal-data.js`

```javascript
export const personalData = {
    name: 'Md. Suman Sarkar',
    profile: '/profile.png',
    designation: 'Software Engineer',
    description: "I am a motivated and versatile Software Engineer with a passion for creating efficient, scalable, and user-friendly web solutions...",
    email: 'suman.iu32@gmail.com',
    phone: '+8801796844288',
    address: 'Mirpur-2, Dhaka, Bangladesh',
    github: 'https://github.com/sumancse26',
    facebook: '',
    linkedIn: 'https://www.linkedin.com/in/suman-iu/',
    twitter: '',
    stackOverflow: '',
    leetcode: 'https://leetcode.com/u/suman_sarkar/',
    devUsername: 'N/A',
    resume: '/resume.pdf'
};
```

`devUsername` Used for fetching blog from `dev.to`.

---

---

# Packages Used :package:

| Used Package List  |
| :----------------: |
|        next        |
|  @emailjs/browser  |
|    lottie-react    |
| react-fast-marquee |
|    react-icons     |
|   react-toastify   |
|        sass        |
|    tailwindcss     |

---
