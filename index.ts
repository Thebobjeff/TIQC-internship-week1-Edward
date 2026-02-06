import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';

const program = new Command();
const DB_PATH = path.join(__dirname, 'todos.json');

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

// Utility to read/write JSON
const getTodos = (): Todo[] => {
  if (!fs.existsSync(DB_PATH)) return [];
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
};

const saveTodos = (todos: Todo[]) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(todos, null, 2));
};

program
  .name('todo-cli')
  .description('A simple CLI to manage your tasks')
  .version('1.0.0');

program
  .command('add <task>')
  .description('Add a new task')
  .action((task) => {
    const todos = getTodos();
    const newTodo: Todo = { id: Date.now(), task, completed: false };
    saveTodos([...todos, newTodo]);
    console.log(`Added: "${task}"`);
  });

program
  .command('list')
  .description('Show all tasks')
  .action(() => {
    const todos = getTodos();
    if (todos.length === 0) return console.log("No todos found.");
    todos.forEach(t => console.log(`${t.completed ? '[X]' : '[ ]'} ${t.id}: ${t.task}`));
  });

program
  .command('complete <id>')
  .description('Mark a task as done')
  .action((id) => {
    const todos = getTodos();
    const task = todos.find(t => t.id === parseInt(id));
    if (task) {
      task.completed = true;
      saveTodos(todos);
      console.log(`Marked task ${id} as completed.`);
    } else {
      console.log("Task not found.");
    }
  });

program.parse();
