const fs = require("fs");
const readline = require("readline");

const DATA_FILE = "todos.json";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function loadTodos() {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data || "[]");
  } catch (err) {
    console.error("Error reading file, starting with empty list.");
    return [];
  }
}

function saveTodos(todos) {
  // This writes the entire array to the JSON file
  fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 4));
  console.log(`\n[System] File "${DATA_FILE}" updated successfully.`);
}

function showMenu() {
  console.log("\n--- TODO CLI ---");
  console.log("1. View | 2. Add | 3. Complete | 4. Exit");
  rl.question("Action: ", handleInput);
}

function handleInput(choice) {
  let todos = loadTodos();

  if (choice === "1") {
    console.log("\nCURRENT TASKS:");
    todos.length ?
      todos.forEach((t, i) => console.log(`${i + 1}. ${t}`))
    : console.log("- Empty -");
    showMenu();
  } else if (choice === "2") {
    rl.question("New Task: ", (task) => {
      if (task.trim()) {
        todos.push(task.trim());
        saveTodos(todos); // Reflected in JSON here
      }
      showMenu();
    });
  } else if (choice === "3") {
    if (todos.length === 0) {
      console.log("Nothing to remove.");
      showMenu();
    } else {
      todos.forEach((t, i) => console.log(`${i + 1}. ${t}`));
      rl.question("Number to remove: ", (num) => {
        const idx = parseInt(num) - 1;
        if (idx >= 0 && idx < todos.length) {
          const removed = todos.splice(idx, 1);
          saveTodos(todos); // Reflected in JSON here
          console.log(`Removed: ${removed}`);
        } else {
          console.log("Invalid index.");
        }
        showMenu();
      });
    }
  } else if (choice === "4") {
    console.log("Closing...");
    rl.close();
  } else {
    showMenu();
  }
}

showMenu();
