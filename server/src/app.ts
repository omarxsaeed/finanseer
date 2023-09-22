import express from "express";
import cors from "cors";
import routes from "./loaders/routes";
import helmet from "helmet";
import morgan from "morgan";
import mainErrorHandler from "./loaders/errorHandler";
import connectDatabase from "./loaders/database";

const app = express();

app.use(express.json());

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use(morgan("common"));

app.use(cors());

app.use("/api", routes);

connectDatabase();

mainErrorHandler(app);

export default app;
