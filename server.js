const http = require('node:http')

const students = [
{ id: 1, name: "Thabo Nkosi", course: "Backend Engineering" },
{ id: 2, name: "Amara Diallo", course: "Frontend Development" },
{ id: 3, name: "Sipho Dlamini", course: "Full Stack" },
]

const server = http.createServer((req, res) => {
// Log every request
console.log(`[${req.method}] ${req.url}`)

// Helper: send JSON response
const sendJSON = (statusCode, data) => {
res.writeHead(statusCode, { "Content-Type": "application/json" });
res.end(JSON.stringify(data));
}

// GET / — welcome message
if (req.method === "GET" && req.url === "/") {
return sendJSON(200, { message: "TechNest API is running", version: "1.0" })
}

// GET /students — all students
if (req.method === "GET" && req.url === "/students") {
return sendJSON(200, { success: true, count: students.length, data: students })
}

// GET /students/:id — one student
if (req.method === "GET" && req.url.startsWith("/students/")) {
const id = Number.parseInt(req.url.split("/")[2])
const student = students.find(s => s.id === id)
if (!student) return sendJSON(404, { error: "Student not found" })
return sendJSON(200, { success: true, data: student })
}

// POST /students — create student
if (req.method === "POST" && req.url === "/students") {
let body = ""
req.on("data", chunk => { body += chunk.toString() })
req.on("end", () => {
const newStudent = JSON.parse(body)
newStudent.id = students.length + 1
students.push(newStudent)
sendJSON(201, { success: true, data: newStudent })
})
return
}

// DELETE /students/:id
if (req.method === "DELETE" && req.url.startsWith("/students/")) {
const id = Number.parseInt(req.url.split("/")[2])
const index = students.findIndex(s => s.id === id)
if (index === -1) return sendJSON(404, { error: "Not found" })
students.splice(index, 1)
return sendJSON(200, { success: true, message: "Deleted" })
}

// No route matched — 404
sendJSON(404, { error: `Route ${req.url} not found` })
})

server.listen(3000, () => {
console.log("Server running at http://localhost:3000")
})