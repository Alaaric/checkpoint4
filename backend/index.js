require("dotenv").config();

const app = require("./src/app");

const port = parseInt(process.env.APP_PORT ?? "5000", 10);

app.listen(port, (err) => {
    if (err) {
        console.error("Server not working bro'");
    } else {
        console.log(`server is listening on port ${port}`);
    }
});
