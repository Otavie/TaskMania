# TASKMANIA - ADVANCED TO-DO APP

TaskMania is a feature-rich and user-friendly todo app that helps you manage your tasks efficiently. Whether you want to create, organize, edit, or view your task list, TaskMania has got you covered.

## Features

- **User-Friendly Interface**: TaskMania provides a sleek and intuitive user interface, making task management a breeze.

- **User Authentication**: Sign up and log in to TaskMania with your credentials to access your task lists securely.

- **Create Tasks**: Easily create new tasks by providing a title, description, and other details.

- **Filter Tasks**: Filter tasks by states such as completed and pending.

- **Edit and Update**: Modify your task details, change statuses, and update your tasks as needed.

- **Dashboard**: Access your personalized dashboard to view an overview of your tasks.

- **Responsive Design**: Enjoy a seamless experience on various devices, from desktop to mobile.

## Technology Stack

### Frontend Tools

- **Tailwind CSS**: A utility-first CSS framework that helps in creating responsive and efficient designs.
- **EJS Templates**: A templating engine for rendering dynamic content in the app.
- **Custom CSS**: Custom styling for an enhanced user experience.

### Backend Tools

- **Node.js**: A JavaScript runtime for building the backend of the application.
- **Express.js**: A web application framework for Node.js, used for routing and handling HTTP requests.
- **MongoDB**: A NoSQL database for storing and managing data efficiently.

### Dependencies

- **body-parser**: Middleware for parsing request bodies.
- **connect-ensure-login**: Middleware for ensuring user authentication.
- **dotenv**: Library for loading environment variables from a `.env` file.
- **EJS**: The EJS templating engine.
- **Express**: The Express.js web framework.
- **Express-flash**: Middleware for displaying flash messages.
- **Express-session**: Middleware for managing user sessions.
- **MongoDB**: The MongoDB database driver.
- **Mongoose**: An ODM (Object-Document Mapping) library for MongoDB.
- **Nodemon**: A utility that automatically restarts the Node.js application when changes are detected. This is used during development.
- **Passport**: Authentication middleware for Node.js.
- **Passport-local**: A Passport strategy for authenticating with a username and password.
- **Passport-local-mongoose**: A Mongoose plugin simplifying Passport authentication.

## Getting Started

1. Clone the TaskMania repository to your local machine.

   ```
   git clone https://github.com/Otavie/TaskMania.git
   ```

2. Install the required dependencies.

   ```
   npm install
   ```

3. Create a `.env` file and set the necessary environment variables, including your database configuration and secret keys.

   ```
   DB_URI=your-database-connection-string
   SECRET=your-secret-key
   ```

4. Start the application.

   ```
   npm start
   ```

5. Open your browser and access TaskMania at `http://localhost:3131`.

## Contributing

We welcome contributions to TaskMania. Feel free to submit issues, feature requests, and pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

Give TaskMania a try and boost your productivity with efficient task management! Enjoy a clean, user-friendly interface, and make your todo list management hassle-free. TaskMania is your perfect todo app companion.

For more information and updates, visit our [website](https://taskmania.onrender.com/).

# TaskMania - Advanced Todo App

todo-app/
├── .gitignore
├── .env
├── README.md
├── package.json
├── app.js
├── tailwind.config.js
├── database.js
├── node_modules/
├── public/
│ ├── img/
│ ├── js/
│ └── stylesheets/
│ └── styles.css
├── routes/
│ ├── index.routes
│ ├── auth/
│ │ ├── login.routes
│ │ └── signup.routes
│ └── tasks.routes
├── models/
│ ├── User.js
│ └── Task.js
└── views/
├── index.ejs
├── login.ejs
├── signup.ejs
├── tasks/
│ ├── dashboard.ejs
│ └── edit.ejs
└── layout.ejs
└── partials/
├── header.ejs
└── footer.ejs
