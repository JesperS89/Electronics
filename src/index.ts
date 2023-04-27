import express from "express";
import { setLoginStatus } from "./middleware/setLoginStatus";
import { audioRouter } from "./routes/audioRouter";
import { authRouter } from "./routes/authRouter";
import { computersRouter } from "./routes/computersRouter";
import { mobilesRouter } from "./routes/mobilesRouter";
import { televisionsRouter } from "./routes/televisionsRouter";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(setLoginStatus);

app.use("/computers", computersRouter);
app.use("/mobiles", mobilesRouter);
app.use("/televisions", televisionsRouter);
app.use("/audio", audioRouter);

app.use("/", authRouter);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(8008, () => {
  console.log("Listening on localhost, port: 8008");
});
