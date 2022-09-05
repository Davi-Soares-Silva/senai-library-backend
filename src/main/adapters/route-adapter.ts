import { formateSnakeCaseKeysForCamelCase } from '@/utils/object';
import { Request, Response } from 'express';
import { Controller, HttpRequest } from '../../presentation/protocols';


export function routeAdapter(controller: Controller) {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = formateSnakeCaseKeysForCamelCase({
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
    });

    const httpResponse = await controller.handle(httpRequest);

    if (httpResponse.headers) {
      res.set(httpResponse.headers);
    }

    return res
      .status(httpResponse.statusCode)
      .json(httpResponse.body);
  };
}
