import { Controller, Get, Req, Res } from '@nestjs/common';
import { LoggerService } from './common/logger/logger.service';

@Controller()
export class AppController {
  constructor(private readonly loggerService: LoggerService) {}

  @Get()
  getHello(@Req() request, @Res() response) {
    const data = { message: 'Logger Modules' };
    this.loggerService.logRequest(request, 'HL01', 'Request logger module');
    this.loggerService.logResponse(response, request, 'HL01', 'Response logger module', 200);
    response.send(data);
  }
}
