# TASKMANIA - ADVANCED TO-DO APP

TaskMania is a feature-rich and user-friendly todo app that helps you manage your tasks efficiently. Whether you want to create, organize, edit, or view your task list, TaskMania has got you covered.

## Features

- **User-Friendly Interface**: TaskMania provides a sleek and intuitive user interface, making task management a breeze.

- **User Authentication**: Sign up and log in to TaskMania with your credentials to access your task lists securely.

- **Create Tasks**: Easily create new tasks by providing a title, description, and other details.

- **Organize Tasks**: Group your tasks into categories, set due dates, and assign priorities.

- **Edit and Update**: Modify your task details, change statuses, and update your tasks as needed.

- **Mark as Completed**: Quickly mark tasks as completed, keeping your list tidy and up to date.

- **Dashboard**: Access your personalized dashboard to view an overview of your tasks.

- **Task Filtering**: Filter tasks by categories, priorities, and completion status for better organization.

- **Search Functionality**: Find specific tasks using the search feature, saving time and effort.

- **Responsive Design**: Enjoy a seamless experience on various devices, from desktop to mobile.

- **Task Statistics**: Get insights into your task management with statistics on completed tasks.

## Getting Started

1. Clone the TaskMania repository to your local machine.

   ```
   git clone <repository-url>
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

For more information and updates, visit our [website](http://www.taskmania-app.com).

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
