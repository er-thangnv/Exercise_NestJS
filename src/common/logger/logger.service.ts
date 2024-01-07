import { Injectable, Logger, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends Logger {
  logRequest(request: any, id: any, message: any) {
    const { method, url, headers, body } = request;
    const timestamp = new Date().toISOString();
    const level = 'INFO';

    const logger = `${timestamp}\t ${message}\t ${id}\t ${method}\t ${url}\t headers=${JSON.stringify(headers)}\t body=${JSON.stringify(body)}`;
    super.log(logger, level);
  }

  logResponse(response: any, request: any, id: any, message: any, status: any) {
    const { method, url, headers, body } = request;
    const timestamp = new Date().toISOString();
    const level = 'INFO';
    const userId = '2341e245-d616-431f-b269-095d0ece2cfa';

    const logger = `${timestamp}\t ${message}\t ${id}\t ${method}\t ${url}\t ${userId}\t ${status}\t headers=${JSON.stringify(headers)}\t body=${JSON.stringify(body)}`;
    super.log(logger, level);
  }

}
