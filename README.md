# Anywhere Fitness

## Table of contents

- **[Overview](#overview)**<br>
- **[API Endpoints](#api-endpoints)**<br>

## <a name="overview"></a>Overview

AnywhereFitness is the all-in-one solution to meet your “on-location” fitness class needs.
AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness
classes wherever they might be held.

## <a name="api-endpoints"></a>API endpoints

### **_Authentication (for login)_**

| Method        | Endpoint           | Body (required)                       | Body (optional) | Notes                                                                    |
| ------------- | ------------------ | ------------------------------------- | --------------- | ------------------------------------------------------------------------ |
| register POST | /api/auth/register | name, email, username, password, role | N/A             | Creates a new user object in the database. Returns the user information. |
| login POST    | /api/auth/login    | username, password                    | N/A             | Returns a welcome message and the JSON Web Token.                        |

### **_Additional athunetication for Instructor_**

| Method | Endpoint | Body (required) | Body (optional) | Notes
