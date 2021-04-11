import * as express from "express";
import { Request, Response, NextFunction } from "express";
import * as path from "path";
import router from "./router";

const app = express();

app.use(express.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

const nextMiddleware = (req: Request, res: Response, next: NextFunction) => next();

router.forEach(async route => {
  const middleware = route.middleware !== null ? route.middleware : nextMiddleware; 

  (app as any)[route.method](
    route.route, 
    middleware, 
    (req: Request, res: Response, next: NextFunction) => {

      const result = (new (route.controller as any))[route.action](req, res, next);
      
      if (result instanceof Promise) {
        result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
      } else if (result !== null && result !== undefined) { 
          res.send(result);
      }
  })
})

app.listen(3000);