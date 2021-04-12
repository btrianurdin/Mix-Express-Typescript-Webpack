import { Router, Request, Response } from "express";
import Controller from "../interfaces/controller.interface";

class HomeController implements Controller {
  public path = '/';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.index);
  }

  private async index(req: Request, res: Response) {
    res.render('home/index');
  }
}

export default HomeController;