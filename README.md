````markdown
# FreeRoom

### Find a free classroom. Make the gap between classes easier.

FreeRoom is an open-source classroom availability system built specifically for **Leading University students**.

When students have gaps between classes, finding a comfortable place to sit can be difficult, especially when the library is full. FreeRoom provides a simple way to check which classrooms are scheduled to be available at a particular time.

The system reads room-wise university schedules and calculates classroom availability based on the selected date and time.

> **Built by students, for students.**

---

## What is FreeRoom?

FreeRoom was created around a simple problem:

> Students often have gaps between classes, but there may not be enough seats in the library or other common spaces.

At the same time, many classrooms may be unused during those periods.

FreeRoom helps students discover those available classrooms quickly instead of walking around campus looking for an empty room.

The goal is simple:

**Make better use of available campus spaces and make student life a little easier.**

---

## Features

- **Available Now** — Find classrooms that are currently free.
- **Future Availability** — Search for rooms on future dates and times.
- **Duration Search** — Find rooms available continuously for 30 minutes, 1 hour, 2 hours, or a custom duration.
- **Time Range Search** — Find rooms that remain free throughout a selected period.
- **Building Filters** — Filter between RAB and RKB.
- **Floor Filters** — Filter rooms by floor.
- **Room Details** — View a room's complete weekly schedule.
- **Course Information** — View available course and teacher information from the schedule.
- **Live Bangladesh Time** — Uses `Asia/Dhaka` for availability calculations.
- **Schedule Transparency** — Original schedule sources can be provided for verification.
- **Responsive Design** — Works across desktop and mobile devices.
- **No Login Required** — Students can use the system immediately.
- **Open Source** — Anyone can inspect, improve, and contribute to the project.

---

## How It Works

FreeRoom does not guess whether a classroom is available.

The system uses structured room schedules and calculates availability based on the requested date and time.

```text
University Room Schedule
          ↓
     Structured JSON
          ↓
   Availability Engine
          ↓
   Date / Time Filters
          ↓
      Room Results
````

For example, if a room has a class from:

```text
02:00 PM → 03:00 PM
```

the system will not consider that room available during that period.

If a student searches for:

```text
02:00 PM → 04:00 PM
```

the room will only appear if it remains free for the **entire requested period**.

---

## Data & Source

The current system is based on room-wise schedule information collected for the relevant academic sessions.

Room data is stored as individual JSON files and organized by building and floor.

```text
json/
├── RAB/
│   ├── 1st Floor/
│   ├── 2nd Floor/
│   ├── 3rd Floor/
│   └── 4th Floor/
│
└── RKB/
    ├── 1st floor/
    ├── 3rd floor/
    └── 4th floor/
```

Each room contains its own schedule information, making the data easy to inspect and maintain.

### Original Schedule Sources

The original room schedule images are maintained separately so users can cross-check the information.

**Google Drive Source:**
[View Original Schedule Sources](GOOGLE_DRIVE_SOURCE_URL)

> Replace `GOOGLE_DRIVE_SOURCE_URL` with the project's actual Google Drive source folder.

Schedule information may change. FreeRoom is intended as a student utility and should not be treated as an official university scheduling system.

---

## Technology

FreeRoom intentionally uses a simple architecture so that the project remains easy to understand, maintain, and contribute to.

### Stack

* **Next.js**
* **TypeScript**
* **Tailwind CSS**
* **Local JSON data**
* **Vercel**

There is currently no database or authentication system required for the core application.

This keeps the project lightweight, transparent, and easy for students and developers to work with.

---

## Project Structure

```text
FreeRoom/
│
├── json/
│   ├── RAB/
│   │   ├── 1st Floor/
│   │   ├── 2nd Floor/
│   │   ├── 3rd Floor/
│   │   └── 4th Floor/
│   │
│   └── RKB/
│       ├── 1st floor/
│       ├── 3rd floor/
│       └── 4th floor/
│
├── app/
├── components/
├── lib/
├── public/
├── package.json
└── README.md
```

Each room has its own JSON schedule.

This makes it possible to add or update room data without rebuilding a large centralized dataset.

---

## Running Locally

Clone the repository:

```bash
git clone https://github.com/bhittu21/freeroom.git
```

Move into the project:

```bash
cd freeroom
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

### Production Build

```bash
npm run build
```

The project is designed to be deployed on **Vercel**.

---

## Contributing

FreeRoom is open source, and contributions are welcome.

You can contribute by:

* Improving the UI
* Adding new features
* Improving availability calculations
* Adding or updating room data
* Improving accessibility
* Fixing bugs
* Improving documentation
* Reporting issues
* Suggesting ideas
* Helping make FreeRoom more useful for Leading University students

### Contribution Workflow

```text
Fork
  ↓
Create a branch
  ↓
Make your changes
  ↓
Test locally
  ↓
Commit
  ↓
Open a Pull Request
```

Please make sure that any changes to room schedules are based on reliable source information.

---

## Founders

FreeRoom was initiated and developed by two students of **65D, Leading University**.

### Sheikh Abir Ali

**Automation Engineer & WordPress Developer**

Sheikh Abir Ali works across automation, web development, SEO, WordPress, Chrome extensions, and business systems. His focus is on building practical digital solutions, workflow automation, and technology that solves real-world problems.

He is also the Co-Founder of **Tresify Lab** and works on technology-driven projects involving automation, web development, and digital systems.

**[LinkedIn](https://www.linkedin.com/in/sheikhabirali/)**

---

### Thouhid Azim Munna

**Tech & AI Enthusiast**

Thouhid Azim Munna is driven by curiosity, critical thinking, and continuous learning. His interests include programming, AI, IT, psychology, philosophy, nature, and the interaction between technological and human systems.

He is currently focused on developing skills in **AI and competitive programming**, while exploring research, collaboration, and practical technology projects.

**[LinkedIn](https://www.linkedin.com/in/thouhid-azim-b326a9323/)**

---

## Built for Leading University

FreeRoom was created specifically with the **Leading University student community** in mind.

The project is designed to solve a simple but practical campus problem: finding a comfortable place to stay during gaps between classes.

Rather than replacing existing university facilities, FreeRoom aims to help students discover spaces that may already be available.

> **Built by students, for students.**

---

## Open Source

FreeRoom is an open-source project.

The complete source code is publicly available on GitHub:

**[GitHub Repository](https://github.com/bhittu21/freeroom)**

Students, developers, and contributors are welcome to:

* Explore the code
* Report issues
* Suggest improvements
* Submit pull requests
* Improve the user experience
* Help maintain room data
* Build new features

If you find the project useful, consider contributing or sharing it with other Leading University students.

---

## Disclaimer

FreeRoom is an **independent student project** and is **not an official system of Leading University**.

The availability information is calculated from the room schedule data included in this project.

University schedules may change, classes may be rescheduled, and rooms may be occupied for purposes not represented in the stored timetable.

Therefore:

> **Always verify important information against the original schedule source before relying on it.**

FreeRoom does not guarantee that a classroom will physically be available at any particular time.

---

## License

FreeRoom is released under the **MIT License**.

Copyright © 2026 **Sheikh Abir Ali & Thouhid Azim Munna**

You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, subject to the terms of the MIT License.

See the [`LICENSE`](LICENSE) file for the complete license text.

---

## Project Links

* **[GitHub Repository](https://github.com/bhittu21/freeroom)**
* **[Original Schedule Sources](GOOGLE_DRIVE_SOURCE_URL)**
* **[Sheikh Abir Ali — LinkedIn](https://www.linkedin.com/in/sheikhabirali/)**
* **[Thouhid Azim Munna — LinkedIn](https://www.linkedin.com/in/thouhid-azim-b326a9323/)**

---

## FreeRoom

**Open-source classroom availability for Leading University students.**

> Built by students, for students.

```
```
