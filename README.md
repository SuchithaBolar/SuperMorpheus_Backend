# Backend - SuperMorpheus Motivation API
- This is the Node.js + Express backend that handles operations for Members and Nuggets.

## 🚀 How to Run the Backend:
### 1. Install Dependencies:
- cd SuperMorpheus_Backend
- npm install

## Configure Environment Variables:
- Create a .env file in the root folder:
- MONGO_URI=<your-mongodb-uri>
- PORT=5000

## 4. Start the Server:
- Use the following command to run the backend:
- node server.js

### Once the server starts, you should see:
Server running on port 5000
MongoDB connected: <your-cluster-address>

## 📦 Tech Stack:
- Node.js
- Express
- MongoDB + Mongoose
- dotenv
- cors

## 📁 Project Structure:

<pre> SuperMorpheus_Backend/ ├── .env # Environment variables ├── server.js # Entry point of the app ├── config/ │ └── db.js # MongoDB connection config ├── controllers/ │ ├── memberController.js # Handles logic for members │ └── nuggetController.js # Handles logic for nuggets ├── models/ │ ├── Member.js # Member schema/model │ └── Nugget.js # Nugget schema/model ├── routes/ │ ├── memberRoutes.js # Routes for member-related APIs │ └── nuggetRoutes.js # Routes for nugget-related APIs </pre>


## 📌 Member API Endpoints:

- GET	/api/members	# Get all members
- GET	/api/members/random	# Get a random member
- POST	/api/members	# Add a new member
- DELETE	/api/members/:id	# Delete a member by ID

## 📌 Nugget API Endpoints:

- POST	/api/nuggets	# Create a new nugget
- GET	/api/nuggets	# Get all nuggets
- GET	/api/nuggets/random	# Get a random nugget
- DELETE	/api/nuggets/:nuggetId	# Delete a nugget by numeric ID
- Nuggets have simple, auto-incrementing IDs like 1, 2, 3…

## For checking POST request you can use the below request body example:

<pre>{
  "content": "beautiful day",
  "author": "lily"
}</pre>

## ✅ Postman Testing:
- Use Postman or any REST client to test all the endpoints:
### Ensure:
- MongoDB is running
- .env is configured
- Server is started using node server.js

## Demo
[![Watch the video]](https://drive.google.com/file/d/1btZJ3LJeiVIu3bcw4nnPGEGjDJ86pAB-/view?usp=drive_link)
