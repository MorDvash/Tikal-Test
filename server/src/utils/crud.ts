import { Repository } from 'typeorm';
import { CustomError } from './custom_error';

export const createOne = async (
  repository: Repository<any>,
  model: any,
): Promise<any> => {
  return repository.save(model);
};

export const getManyBy = async (
  repository: Repository<any>,
  query: string,
  data: string | number | boolean,
): Promise<any> => {
  const found = await repository.findBy({ [query]: data });
  if (found.length < 1) {
    throw new CustomError(404, 'Not Found Error');
  }
  return found;
};
