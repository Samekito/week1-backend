const http = require('node:http');

// Initial students array with 4 students
const students = [
  { id: 1, name: "Thabo Nkosi", age: 25, course: "Backend Engineering" },
  { id: 2, name: "Amara Diallo", age: 23, course: "Frontend Development" },
  { id: 3, name: "Sipho Dlamini", age: 24, course: "Full Stack" },
  { id: 4, name: "Fatima Malil", age: 26, course: "DevOps" }
];

const server = http.createServer((req, res) => {
  // Helper: send JSON response with logging
    console.log(`[${req.method}] ${req.url}`);

  const sendJSON = (statusCode, data) => {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  };

  // GET / — welcome message
  if (req.method === "GET" && req.url === "/") {
    return sendJSON(200, {
      message: "Welcome to the TechNest API",
      version: "1.0",
      author: "Samekito"
    });
  }

  // GET /about — bootcamp information
  if (req.method === "GET" && req.url === "/about") {
    return sendJSON(200, {
      bootcamp: "TechNest",
      track: "Backend Engineering",
      instructor: "Tsungai Katsuro"
    });
  }

  // GET /students — all students
  if (req.method === "GET" && req.url === "/students") {
    return sendJSON(200, {
      success: true,
      count: students.length,
      data: students
    });
  }

  // GET /students/:id — one student
  if (req.method === "GET" && req.url.startsWith("/students/")) {
    const id = Number.parseInt(req.url.split("/")[2]);
    const student = students.find(s => s.id === id);
    if (!student) {
      return sendJSON(404, {
        success: false,
        error: "Student not found"
      });
    }
    return sendJSON(200, {
      success: true,
      data: student
    });
  }

  // POST /students — create student
  if (req.method === "POST" && req.url === "/students") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", () => {
        const newStudent = JSON.parse(body);
        newStudent.id = students.length + 1;
        students.push(newStudent);
        sendJSON(201, {
          success: true,
          data: newStudent
        });
    });
    return;
  }

  // DELETE /students/:id — delete student
  if (req.method === "DELETE" && req.url.startsWith("/students/")) {
    const id = Number.parseInt(req.url.split("/")[2]);
    const index = students.findIndex(s => s.id === id);
    if (index === -1) {
      return sendJSON(404, {
        success: false,
        error: "Student not found"
      });
    }
    students.splice(index, 1);
    return sendJSON(200, {
      success: true,
      message: "Student deleted"
    });
  }

  // No route matched — 404
  sendJSON(404, {
    success: false,
    error: `Route ${req.url} not found`
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});