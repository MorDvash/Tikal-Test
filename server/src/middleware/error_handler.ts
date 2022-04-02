import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils/custom_error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof CustomError) {
    return res.status(err.httpCode).send({ errors: err.serializeErrors() });
  }

  res.status(400).send({
    error: { message: 'Something went wrong' },
  });
};
