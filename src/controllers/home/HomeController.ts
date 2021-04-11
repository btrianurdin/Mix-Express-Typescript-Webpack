import * as express from 'express'
import { Request, Response } from 'express'

export default class HomeController {
    async index(req: Request, res: Response){
        res.render("home/index", {nama: "Bagus "});
    }
}