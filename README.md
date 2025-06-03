# 📚 PLP Bookstore - MongoDB Project

This project demonstrates fundamental and advanced MongoDB operations using a sample bookstore database.
 It includes CRUD operations, advanced queries, aggregation pipelines, and indexing.
 Learning MongoDB has been challenging and having to use the Create,Update,Delete Operations 
 use of assyc functions with a promise, 


---

## 🚀 Project Structure

- `insert_books.js`: Script to insert initial book data into the MongoDB collection.
- `queries.js`: Contains all MongoDB queries for CRUD, advanced filtering, aggregation, and indexing.
- `README.md`: Instructions and project overview.
- `screenshot 1.png`: MongoDB Compass screenshot showing the `books` collection and sample data.

---

## 🛠️ Setup Instructions

### 1. Install Dependencies

``bash
> Ensure that there is Nodejs run 
 >node --version and npm--version
 >npm install mongodb
 >npm init -y    -( to initialize enviroment)
`
>
### 2. Run the Insert Script
>- This populates the plp_bookstore database with at least 10 books.
bash
node insert_books.js  

### 3. Run the Queries
This will execute all tasks: CRUD, advanced queries, aggregation, and indexing.
bash
node queries.js

### 🧪 What’s Covered
✅ Task 1: MongoDB Setup
Connect to MongoDB using MongoClient

Create plp_bookstore database

Create books collection

✅ Task 2: Basic CRUD
Insert, read, update, and delete book documents

✅ Task 3: Advanced Queries
Filters with conditions

Field projections

Sorting

Pagination using limit and skip

✅ Task 4: Aggregation Pipelines
Average price per genre

Author with most books

Group books by publication decade

✅ Task 5: Indexing
Create indexes for performance

Use .explain("executionStats") to show improvement

### 📸 Screenshot
A Folder named screenshot with  a screenshot of MongoDB Compass showing the plp_bookstore database and the books collection with sample data

### 📬 Author
Pauline Mwangi
MongoDB Week 1 Assignment – PLP Academy (feb 2025 cohort)

