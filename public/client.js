const socket = io()

const canvas = document.getElementById("board")
const ctx = canvas.getContext("2d")

const colorPicker = document.getElementById("colorPicker")
const sizePicker = document.getElementById("sizePicker")
const clearBtn = document.getElementById("clearBtn")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let drawing = false

function drawLine(data) {
    ctx.strokeStyle = data.color
    ctx.lineWidth = data.size
    ctx.lineCap = "round"

    ctx.beginPath()
    ctx.moveTo(data.x1, data.y1)
    ctx.lineTo(data.x2, data.y2)
    ctx.stroke()
}

canvas.addEventListener("mousedown", () => {
    drawing = true
})

canvas.addEventListener("mouseup", () => {
    drawing = false
})

let lastX = 0
let lastY = 0

canvas.addEventListener("mousemove", (e) => {
    if (!drawing) return

    const data = {
        x1: lastX,
        y1: lastY,
        x2: e.clientX,
        y2: e.clientY,
        color: colorPicker.value,
        size: sizePicker.value
    }

    drawLine(data)
    socket.emit("draw", data)

    lastX = e.clientX
    lastY = e.clientY
})

canvas.addEventListener("mousedown", (e) => {
    lastX = e.clientX
    lastY = e.clientY
})

socket.on("draw", drawLine)

socket.on("history", (lines) => {
    lines.forEach(drawLine)
})

socket.on("clear", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

clearBtn.onclick = () => {
    socket.emit("clear")
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})
