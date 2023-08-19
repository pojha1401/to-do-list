import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const tasks = [];
const tasksWork = [];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date();
let month = months[date.getMonth()]

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {

    res.render("index.ejs", { data: tasks, todaym: month, todayd: date.getDate(), todayda: days[date.getDay()] });
});

app.get("/work", (req, res) => {
    res.render("work.ejs", { dataWork: tasks, todaym: month, todayd: date.getDate(), todayda: days[date.getDay()] });

})

app.post("/work", (req, res) => {
    const task = req.body.todo;
    tasksWork.push({
        todoTaskWork: task
    });
    res.render("work.ejs", { dataWork: tasksWork, todaym: month, todayd: date.getDate(), todayda: days[date.getDay()] });

});

app.post("/", (req, res) => {
    const task = req.body.todo;
    tasks.push({
        todoTask: task
    });
    res.render("index.ejs", { data: tasks, todaym: month, todayd: date.getDate(), todayda: days[date.getDay()] });
});

app.listen(port, () => {
    console.log(`server running at ${port}`);
});