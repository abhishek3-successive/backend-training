# Mongoose and MongoDB Overview

## 📌 Introduction to MongoDB

MongoDB is a **NoSQL, document-oriented database** designed for scalability, high availability, and performance. Instead of storing data in tables and rows (as in RDBMS), MongoDB uses **collections and documents**.

### 🔍 Key Features:
- **Schema-less**: Each document can have a different structure.
- **High performance**: Fast read/write operations.
- **Scalable**: Supports horizontal scaling through sharding.
- **Flexible document model**: JSON-like documents (BSON format).

### 📂 MongoDB Terminology:
| RDBMS        | MongoDB        |
|--------------|----------------|
| Table        | Collection     |
| Row          | Document       |
| Column       | Field          |
| Schema       | Schema (optional) |
| SQL          | Query API      |

---

## 🔄 What is ORM?

**ORM (Object Relational Mapping)** is a programming technique that helps developers interact with a database using an object-oriented paradigm.

### ✅ Benefits of ORM:
- Abstracts SQL queries into code methods.
- Easier database operations using models.
- Reduces boilerplate and promotes DRY principles.
- Helps maintain consistency between app logic and database.

> 💡 For NoSQL databases like MongoDB, we use **ODM (Object Document Mapper)** instead of ORM.
---

## 🚀 What is Mongoose?

**Mongoose** is a popular **ODM (Object Document Mapper)** for MongoDB and Node.js.

### 🔧 Features of Mongoose:
- Defines schemas to structure your documents.
- Validates data before it’s saved to the database.
- Provides middleware (pre/post hooks).
- Supports built-in and custom data types.

### 🛠️ Mongoose Concepts:

#### 1. **Schema**
Defines the structure of a MongoDB document.
```js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: { type: String, required: true }
});