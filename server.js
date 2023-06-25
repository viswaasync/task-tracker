const express = require('express');
const app = express();
const port = 3000;
const sqlite3 = require('sqlite3').verbose();

// Open a connection to the SQLite database and create the tasks table
const db = new sqlite3.Database('tasks.db', err => {
  if (err) {
    console.error(err.message);
  } else {
    // Create the tasks table if it doesn't exist
    db.run(`CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      week INTEGER,
      order_number INTEGER,
      project TEXT,
      task TEXT,
      responsible TEXT
    )`, err => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Tasks table created successfully');

        // Start the server once the table is created
        app.listen(port, () => {
          console.log(`Server running on port ${port}`);
        });
      }
    });
  }
});

// Serve static files from the "public" directory
app.use(express.static('public'));

// Parse JSON request bodies
app.use(express.json());

// Define a route to handle the POST request
app.post('/api/tasks', (req, res) => {
  const { week, order, project, task, responsible } = req.body;

  // Insert the task into the database
  const query = 'INSERT INTO tasks (week, order_number, project, task, responsible) VALUES (?, ?, ?, ?, ?)';
  db.run(query, [week, order, project, task, responsible], err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to save the task' });
    } else {
      console.log('Task saved successfully');
      res.sendStatus(200);
    }
  });
});

// Define a route to retrieve all tasks
app.get('/api/tasks', (req, res) => {
  // Retrieve all rows from the "tasks" table
  const query = 'SELECT * FROM tasks';
  db.all(query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to retrieve tasks' });
    } else {
      res.json(rows);
    }
  });
});

// Close the database connection when the server is stopped
process.on('SIGINT', () => {
  db.close(err => {
    if (err) {
      console.error(err);
    } else {
      console.log('Database connection closed');
      process.exit();
    }
  });
});