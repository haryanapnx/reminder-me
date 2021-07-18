import { Get, Controller } from '@nestjs/common';

@Controller('/health-check')
export class HealthCheckController {
  @Get()
  get(): Record<string, any> {
    return {
      status: 'ok',
      message: 'Alhamdulillah Sehat',
    };
  }
}
