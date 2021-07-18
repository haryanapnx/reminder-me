import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const { INTERNAL_SERVER_ERROR } = HttpStatus;
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus
      ? exception.getStatus()
      : INTERNAL_SERVER_ERROR;

    const responseError = {
      code: status,
      timeStamp: new Date().toLocaleDateString(),
      path: request.url,
      methos: request.method,
      message:
        status !== INTERNAL_SERVER_ERROR
          ? exception.message || null
          : 'Internal Server Error',
    };

    Logger.error(
      `[${request.methos}] => ${request.url}`,
      exception.stack,
      'HttpExceptionFilter',
    );

    response.status(status).json(responseError);
  }
}
