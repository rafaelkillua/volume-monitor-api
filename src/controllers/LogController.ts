import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Log from "../entity/Log";

const LogController = {
  async list(_, res: Response) {
    const [data, count] = await getRepository(Log).findAndCount();

    res.send({
      count,
      data
    });
  },

  async create(req: Request, res: Response) {
    const log = new Log();
    Object.entries(req.body).forEach(([key, value]) => log[key] = value);

    const errors = await validate(log);
    if (errors.length > 0) {
      res.status(400).send({ error: true, errors });
    } else {
      await log.save();
      res.send(log);
    }
  },
};

export default LogController;
