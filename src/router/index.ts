import { HomeRoute } from "./home.route";
import PageNotFound from "../error/PageNotFound";

const route404 = [{
  method: "get",
  route: "*",
  controller: PageNotFound,
  action: "index",
  middleware: null
}]

export default [...HomeRoute, ...route404];