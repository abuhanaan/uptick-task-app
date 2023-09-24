# Task App

## Getting Started

The following steps are to be followed to set up the web server locally

- Run `npm install` to install the required dependencies
- Create a .env file, copy the content of .env.example file and replace the placeholders accordingly
- Provided that a database is already in place and its name is included in the .env file in the step above, run the command below to start the server.

  `npm start`

## API Reference/Documentation

- Baseurl: https://uptick-task-app.cyclic.cloud/api/v1

---

### Error Handling

Error responses are returned in the format below

```
{
  "success": false,
  "status": "Short error message",
  "message": "Detailed error message"
}
```

The API will return these error types when requests fail:

- 400: Bad Request
- 404: Resource Not Found
- 409: Conflict Operation
- 500: Internal Server Error

---

### Endpoints

#### POST `/tasks`

- General

  - Creates a new task
  - Request Arguments: None

- Sample Request:

```json
POST https://uptick-task-app.cyclic.cloud/api/v1/tasks
Content-Type: application/json

{
    "title": "Lorem Ipsum6",
    "description": "Uptick Fellowship Assignment 1",
    "dueDate": "2023-09-22"
}
```

- Sample Response:

```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "taskId": 9,
    "title": "Lorem Ipsum6",
    "description": "Uptick Fellowship Assignment 1",
    "dueDate": "2023-09-22",
    "status": "Pending"
  }
}
```

#### GET `/tasks/{taskId}`

- General

  - Fetches an task by its id
  - Request Arguments: taskId (task Id of the task to be resolved)

  ```json
  GET https://uptick-task-app.cyclic.cloud/api/v1/tasks/1
  ```

  - Sample Response:

  ```json
  {
    "success": true,
    "message": "Task fetched successfully",
    "data": {
      "taskId": 1,
      "title": "Complete Task Manager",
      "description": "Uptick Fellowship Assignment 1",
      "dueDate": "2023-09-22",
      "status": "Completed"
    }
  }
  ```

#### GET `/tasks`

- General

  - Fetches all tasks
  - Request Arguments: None

  ```json
  GET https://uptick-task-app.cyclic.cloud/api/v1/tasks/
  ```

  - Sample Response:

  ```json
  {
    "success": true,
    "data": [
      {
        "taskId": 1,
        "title": "Complete Task Manager",
        "description": "Uptick Fellowship Assignment 1",
        "dueDate": "2023-09-22",
        "status": "Completed"
      },
      {
        "taskId": 5,
        "title": "Lorem Ipsum",
        "description": "Uptick Fellowship Assignment 1",
        "dueDate": "2023-09-22",
        "status": "Pending"
      },
      {
        "taskId": 8,
        "title": "Lorem Ipsum5",
        "description": "Uptick Fellowship Assignment 1",
        "dueDate": "2023-09-22",
        "status": "Pending"
      }
    ]
  }
  ```

#### PUT `/tasks/{taskId}`

- General

  - Updates a specific task
  - Request Arguments: `taskId` (task Id of the task to be updated)

- Sample Request:

```json
PUT https://uptick-task-app.cyclic.cloud/api/v1/tasks/1
Content-Type: application/json

{
    "description": "Uptick Fellowship Test App",
    "dueDate": "2023-09-22",
    "completed": true
}
```

- Sample Response:

```json
{
  "success": true,
  "message": "Task Updated successfully",
  "data": {
    "taskId": 1,
    "title": "Lorem Ipsum6",
    "description": "Uptick Fellowship Test App",
    "dueDate": "2023-09-22",
    "status": "Completed"
  }
}
```

#### DELETE `/tasks/{taskId}`

- General

  - Deletes a specific task
  - Request Arguments: `taskId` (task Id of the task to be deleted)

- Sample Request:

```json
DELETE https://uptick-task-app.cyclic.cloud/api/v1/tasks/1
```

- Sample Response:

```json
{
  "success": true,
  "message": "Task Deleted Successfully!"
}
```
