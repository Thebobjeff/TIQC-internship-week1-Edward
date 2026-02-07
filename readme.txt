# Todo-CLI 📝

A lightweight Command Line Interface (CLI) application built with **Node.js** to manage daily tasks. This tool allows users to add, view, and complete tasks with data persistence using a local JSON file.

## 🚀 Features
* **Data Persistence:** Tasks are stored in a `todos.json` file, so your data remains even after closing the terminal.
* **Interactive UI:** A simple, number-based menu for easy navigation.
* **Zero Dependencies:** Built entirely using Node.js standard libraries (`fs` and `readline`)—no `npm install` required!
* **Error Handling:** Validates user input to prevent crashes when selecting task numbers.

## 🛠️ Installation & Setup

1.  **Prerequisites:** Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
2.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/todo-cli.git](https://github.com/your-username/todo-cli.git)
    cd todo-cli
    ```
3.  **Run the application:**
    ```bash
    node todo.js
    ```

## 📖 Usage
Once the script is running, follow the on-screen prompts:
* **1**: View all current tasks.
* **2**: Add a new task to your list.
* **3**: Mark a task as complete (removes it from the list).
* **4**: Exit the program.

## 📂 File Structure
* `todo.js`: The main application logic.
* `todos.json`: Local storage file (automatically generated on first task entry).
* `README.md`: Project documentation.

## 🛠️ Built With
* **JavaScript (Node.js)**
* **Built-in Modules:** `fs` (File System) and `readline`.

---
*Created as part of my journey in Computer Science.*
