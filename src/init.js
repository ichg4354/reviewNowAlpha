import app from "./index.js";

const PORT = 5000;

const handleListen = () => {
  console.log(`listening to http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);

