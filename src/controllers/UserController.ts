import { Router, Request, Response } from "express";
import Controller from "../interfaces/controller.interface";

class UserController implements Controller {
  public path = '/users';
  public router = Router();

  constructor(){
    this.initializeRoutes();
  }

  private initializeRoutes(){
    this.router.get(this.path, this.index);
  }

  private async index(req: Request, res: Response) {
    res.render('user/index');
  }
}

export default UserController;