# 🏫 FreeRoom

> **Find a free classroom. Make the gap between classes easier.**
> *Built by students, for students.*

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?logo=vercel)](https://freeroom-lu.vercel.app/)

FreeRoom is an open-source classroom availability system built specifically for **Leading University** students.

When students have gaps between classes, finding a comfortable place to sit can be difficult—especially when the library is full. FreeRoom solves this by providing a simple, lightning-fast way to check which classrooms are empty at any given time.

---

## 🤔 Why FreeRoom?

FreeRoom was created around a simple problem: **Students often have gaps between classes, but campus seating is limited.**

Meanwhile, dozens of classrooms sit empty. Instead of wandering around campus testing door handles, FreeRoom helps you discover available rooms instantly.

**Our Goal:** Make better use of available campus spaces and make student life a little easier.

---

## ✨ Features

- 🕒 **Available Now** — Instantly find classrooms that are currently free.
- 📅 **Future Availability** — Search for rooms on future dates and specific times.
- ⏳ **Duration Search** — Need a room for 30 mins, 1 hour, or 2 hours? Find rooms available continuously for your desired duration.
- 🎯 **Time Range Search** — Find rooms that remain free throughout a selected period.
- 🏢 **Building & Floor Filters** — Easily filter between **RAB** and **RKB**, and sort by floor.
- 📊 **Room Details & Courses** — View a room's complete weekly schedule, including course and teacher info.
- 🇧🇩 **Live Bangladesh Time** — Perfectly synced using `Asia/Dhaka` for accurate availability.
- 📱 **Responsive Design** — Looks great and works flawlessly on desktop and mobile.
- 🔓 **No Login Required** — Completely frictionless. Just open the app and search.
- 📖 **Open Source** — Built transparently. Anyone can inspect, improve, and contribute!

---

## 🎥 See FreeRoom in Action

- 📹 [Promo Video — Facebook](https://www.facebook.com/sheikhabirali21/videos/dont-use-freeroom/1777869076793824/)
- 💼 [Launch Post — LinkedIn](https://www.linkedin.com/posts/sheikhabirali_it-was-a-great-experience-to-build-the-complete-ugcPost-7492978865179447298-IdkZ/)

---

## ⚙️ How It Works

FreeRoom doesn't guess. The system uses structured room schedules and a custom Availability Engine to calculate exactly what's open.

```
📅 University Room Schedule
          ↓
📂 Structured JSON Data
          ↓
⚙️ Availability Engine
          ↓
🎛️ Date / Time Filters
          ↓
✅ Available Room Results
```

**Example:** If a room has a class from 02:00 PM → 03:00 PM, the system flags it as occupied. If a student searches for a room from 02:00 PM → 04:00 PM, that room will not appear.

---

## 📂 Data & Sources

Data is stored locally as individual JSON files organized by building and floor. This makes the data incredibly easy to inspect, update, and maintain without needing a complex database.

```
json/
├── RAB/
│   ├── 1st Floor/
│   ├── 2nd Floor/ ...
└── RKB/
    ├── 1st floor/
    ├── 3rd floor/ ...
```

📁 [View Original Schedule Sources](#) *(replace `#` with your Google Drive link)*

> **Note:** We maintain the original schedule images separately so users can cross-check our data.

---

## 🛠️ Technology Stack

FreeRoom intentionally uses a simple architecture so the project remains lightweight, transparent, and easy for students to contribute to.

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data:** Local JSON
- **Deployment:** Vercel

*(There is currently no database or authentication system required!)*

---

## 🚀 Running Locally

Want to test it out or contribute? It's easy to get started:

1. **Clone the repository:**
```bash
   git clone https://github.com/bhittu21/freeroom.git
```

2. **Navigate into the project:**
```bash
   cd freeroom
```

3. **Install dependencies:**
```bash
   npm install
```

4. **Start the development server:**
```bash
   npm run dev
```

5. **Open the app:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

To build for production:
```bash
npm run build
```

---

## 🤝 Contributing

FreeRoom is proudly open-source, and contributions from fellow students and developers are highly encouraged!

You can help by:

- 🎨 Improving the UI/UX
- ✨ Adding new features
- 🧮 Optimizing availability calculations
- 📅 Updating room data for new semesters
- 🐛 Fixing bugs & reporting issues

### Contribution Workflow

1. Fork the repository.
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

Please ensure any changes to room schedules are based on reliable university sources.

---

## 👨‍💻 Meet the Founders

FreeRoom was initiated and developed by two students of 65D, Leading University.

### Sheikh Abir Ali
**Automation Engineer & WordPress Developer**

Abir works across automation, web development, SEO, WordPress, Chrome extensions, and business systems. His focus is on building practical digital solutions and technology that solves real-world problems. He is also the Co-Founder of Tresify Lab.

🔗 [LinkedIn](https://www.linkedin.com/in/sheikhabirali/)

### Thouhid Azim Munna
**Tech & AI Enthusiast**

Thouhid is driven by curiosity, critical thinking, and continuous learning. His interests span programming, AI, psychology, philosophy, and the interaction between technology and human systems. He is currently focused on AI, competitive programming, and practical tech projects.

🔗 [LinkedIn](https://www.linkedin.com/in/thouhid-azim-b326a9323/)

---

## ⚠️ Disclaimer

FreeRoom is an independent student project and is not an official system of Leading University.

Availability is calculated based on static schedule data. University schedules may change, classes may be rescheduled, and rooms may be occupied for exams, clubs, or events not listed on the standard timetable.

Always verify important information against official sources. FreeRoom does not guarantee that a classroom will physically be available at any given time.

---

## 📄 License

Distributed under the MIT License. Copyright © 2026 Sheikh Abir Ali & Thouhid Azim Munna.

See `LICENSE` for more information.