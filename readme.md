# 🐞 Bug Tracker

## 📌 What It Is

A simple web application to log, track, and revisit coding bugs along with their fixes.

## 💡 Problem It Solves

While coding, I often encountered bugs but forgot how I fixed them later. This app acts as a personal knowledge base where I can store bugs and their solutions, helping me avoid repeated debugging.

## 🚫 What I Intentionally Excluded

* Authentication (JWT / sessions) to keep the MVP simple and focused on core functionality.

## 🛠️ Tech Stack

* Backend: Node.js + Express + SQLite
* Frontend: Vanilla JavaScript
* Deployment:

  * Frontend: Netlify
  * Backend: Render

## 🌐 Live Demo

* Frontend: https://singular-frangollo-04aa92.netlify.app
* Backend: https://chlg9.onrender.com


## ⚙️ CRUD Operations

### ➕ Create Bug

Users can log a new bug with:

* Title
* Description
* Fix/Solution

### 📖 Read Bugs

All saved bugs are displayed in a list format for quick access.

### ✏️ Update Bug

Users can edit an existing bug to update the fix or description.

### ❌ Delete Bug

Users can remove bugs that are no longer relevant.



## 🔗 API Endpoints

* GET /bugs → Fetch all bugs
* POST /bugs → Add a new bug
* PUT /bugs/:id → Update a bug
* DELETE /bugs/:id → Delete a bug

