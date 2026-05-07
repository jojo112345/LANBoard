const express = require("express")
const http = require("http")
const { Server } = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static("public"))

let history = []

io.on("connection", (socket) => {
    console.log("User connected")

    socket.emit("history", history)

    socket.on("draw", (data) => {
        history.push(data)

        if (history.length > 10000) {
            history.shift()
        }

        socket.broadcast.emit("draw", data)
    })

    socket.on("clear", () => {
        history = []
        io.emit("clear")
    })

    socket.on("disconnect", () => {
        console.log("User disconnected")
    })
})

server.listen(3000, () => {
    console.log("LANBoard running on http://localhost:3000")
})
