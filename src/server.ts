import validateEnv from "./utils/validateEnv";
import 'dotenv/config';
import App from "./app";
import UserController from "./controllers/UserController";
import HomeController from "./controllers/HomeController";

validateEnv();

const app = new App([
  new HomeController(),
  new UserController()
])

app.listen();
