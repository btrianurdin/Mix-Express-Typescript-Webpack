import HomeController from "../controllers/home/HomeController";

export const HomeRoute = [
  {
    method: "get",
    route: "/",
    controller: HomeController,
    action: "index",
    middleware: null
  }
]