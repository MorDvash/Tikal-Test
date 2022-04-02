import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const validate_request = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(404).send({ errors: errors.array() });
  }

  next();
};
