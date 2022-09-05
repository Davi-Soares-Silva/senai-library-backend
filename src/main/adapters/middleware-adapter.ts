import { Request, Response, NextFunction } from 'express';
import { Middleware } from '../../presentation/protocols/middleware';
import { formateSnakeCaseKeysForCamelCase, formateCamelCaseKeysForSnakeCase } from '@/utils/object';
import { HttpRequest } from '@/presentation/protocols';

export const middlewareAdapter = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      ...req,
      ...formateSnakeCaseKeysForCamelCase({
        headers: req.headers,
        body: req.body,
        params: req.params,
        query: req.query,
      })
    };

    const httpResponse = await middleware.handle(httpRequest, () => {
      req.user = httpRequest.user;

      return next();
    });

    if (!httpResponse) return;

    if (httpResponse.headers) {
      res.set(httpResponse.headers);
    }

    return res
      .status(httpResponse.statusCode)
      .json(formateCamelCaseKeysForSnakeCase(httpResponse.body));
  };

};