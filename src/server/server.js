const app = require("./app")
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('Make sure everything is working properly!');
});