import express from "express";
import cors from "cors";

import config from "./utils/ENV/env.utils.js";

//Database Connection
import Connection from "./config/Database/db.js";

//Route
import authRoute from "./routes/auth.routes.js";
import userDetailsRoute from "./routes/userDetails.routes.js";
import contactRoute from "./routes/contact.routes.js";
import careInstituteRoute from "./routes/Care Institution/care_institution.routes.js";
import providerRoute from "./routes/Provider/provider.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/auth", authRoute);
app.use("/details", userDetailsRoute);
app.use("/karunai", contactRoute);
app.use("/care-institution", careInstituteRoute);
app.use("/provider", providerRoute);

const PORT = config.port || 8000;

app.listen(PORT, () =>
  console.log(`Server is running successfully on ${PORT}`)
);

const username = config.db.username;
const password = config.db.password;
Connection(username, password);
