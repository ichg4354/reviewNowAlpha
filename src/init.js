import app from "./app.js";
import "./db.js"

const PORT = 2000;

const handleListen = () => {
  console.log(`listening to http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);

