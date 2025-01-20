# To-Do Notes Application

A simple backend application to manage to-do notes built using **Node.js** and **MongoDB**. This application allows users to create, update, retrieve, and delete to-do notes, with basic validation on the title field.

## Features

- Create a new to-do note.
- Retrieve all to-do notes.
- Update an existing to-do note.
- Delete a specific to-do note.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Validation**: Mongoose

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Running locally or using MongoDB Atlas)

## Setup and Installation

### Step 1: Clone the repository

To clone the repository to your local machine, run the following command:

```bash
git clone https://github.com/yourusername/todo-notes-app.git
cd todo-notes-app
```
### Step 2: Install Dependencies
npm install


### Step 3: Set up MongoDB
Make sure MongoDB is running locally or use a MongoDB Atlas connection string. If using MongoDB Atlas, replace the connection URI directly in the code.

For local MongoDB, it is usually mongodb://localhost:27017/todo-app.

In the code, locate where the MongoDB URI is set (in db.js or wherever you're connecting to MongoDB) and update it to point to your local or remote database.

### Step 4: Start the Application
Run the following command to start the server: npm start

API Endpoints:

1.Create a New To-Do Note
- Endpoint: POST /api/notes
- Description: Create a new to-do note.
     
        Request Body:
            {
                "title": "Officebanao",
                "description": "creating, maintaining and managing offices with technology, organizing the industry, creating standards and processes and driving transparency."
            }


        Response:
            Success (201):
                {
                    "message": "Note created successfully",
                    "note": {
                        "_id": "60d75d1f2c7e9e0b8cfa1a52",
                        "title": "Officebanao",
                        "description": "creating, maintaining and managing offices with technology, organizing the industry, creating standards and processes and driving transparency."
                        "createdAt": "2025-01-20T12:34:56.789Z",
                        "updatedAt": "2025-01-20T12:34:56.789Z"
                    }
                }

2.Get All To-Do Notes
- Endpoint: GET /api/notes
- Description: Retrieve all to-do notes.

        Response:
            Success (200):
                [
                    {
                        "_id": "60d75d1f2c7e9e0b8cfa1a52",
                        "title": "Officebanao",
                        "description": "creating, maintaining and managing offices with technology, organizing the industry, creating standards and processes and driving transparency."
                        "createdAt": "2025-01-20T12:34:56.789Z",
                        "updatedAt": "2025-01-20T12:34:56.789Z"
                    },
                ]

3.Update an Existing To-Do Note
- Endpoint: PUT /api/notes/60d75d1f2c7e9e0b8cfa1a52
- Description: Update the title and/or description of an existing to-do note.

        Request Body:
            {
                "title": "Officebanao Gurgaon",
                "description": "5th floor, plot no 57, sector 18, Gurgaon, Haryana 122015"
            }
 

        Response:
            Success (200):
                {
                    "message": "Note updated successfully.",
                    "note": {
                        "_id": "60d75d1f2c7e9e0b8cfa1a52",
                        "title": "Officebanao Gurgaon",
                        "description": "5th floor, plot no 57, sector 18, Gurgaon, Haryana 122015",
                        "createdAt": "2025-01-20T12:34:56.789Z",
                        "updatedAt": "2025-01-20T13:00:00.000Z"
                    }
                }

4.Delete a To-Do Note
- Endpoint: DELETE /api/notes/:id
- Description: Delete a specific to-do note by its ID.

        Response:
            Success (200):
                {
                "message": "Note deleted successfully."
                }

            Error (404):
                {
                    "message": "Note not found."
                }

This project is licensed under the MIT License - see the LICENSE file for details.
