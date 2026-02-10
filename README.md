# Personal Web Portfolio Walkthrough

I have completed the implementation of your **personal web portfolio and blog system** using the **Node 12 stack** (Express, React 16, Sequelize/MySQL, Tailwind 2, and Bootstrap 4).

---

## 🚀 Accomplishments

### Backend API (`src/server`)
- **Node 12 Compatible**  
  All dependencies selected to run on **Node 12.13.0**.

- **Sequelize Models**  
  Implemented:
  - Hero
  - Skills
  - Gallery
  - Projects
  - Timeline (Experience / Education)

- **CRUD Endpoints**  
  Full set of RESTful APIs for all database tables.

- **Multer Integration**  
  Secure file uploads for:
  - Profile pictures
  - Project images
  - Gallery albums

- **Database Seeding**  
  Added a `seed.js` script to initialize profile data.

---

### Frontend Client View (`src/client`)
- **Theme**  
  Premium **Black & Navy** design with **Technology Blue** accents.

- **Sticky Sidebar**  
  Modern navigation with **Lucide icons**.

- **Hero Section**  
  Dynamic introduction featuring:
  - Professional typewriting effect
  - Profile image frame

- **Categorized Skills**  
  Card-based layout for:
  - Frontend
  - Backend
  - Games
  - Other skills

- **Zig-Zag Timeline**  
  Horizontal / vertical alternating cards for:
  - Work Experience
  - Education

- **Responsive Gallery**  
  Album-based filtering for professional and personal photos.

- **Contact Form**  
  Sleek contact section with social media integration.

---

### Admin Dashboard
- **Management Console**  
  Dedicated interface for managing portfolio content.

- **Hero Editor**  
  Update names, typewriting list, and profile photo.

- **Skill Manager**  
  Add or remove skills with metadata support.

- **Album Uploader**  
  Bulk upload images to specific gallery albums.

- **Project / Timeline CRUD**  
  Full control over showcased works and experience history.

---

## 🛠️ How to Run

### Backend
- cd src/server
- npm install
- Configure MySQL credentials in .env
- node scripts/seed.js
- npm start   # Runs on port 5000

### Frontend
- cd src/client
- npm install
- npm start   # Runs on port 3000



## ✅ Verification Results

- Verified that all **Node 12 compatible libraries** are correctly specified in `package.json`.
- Verified that the **Zig-Zag timeline logic** correctly alternates items.
- Verified that the **Admin UI** correctly handles **FormData** for multi-part file and text uploads.
