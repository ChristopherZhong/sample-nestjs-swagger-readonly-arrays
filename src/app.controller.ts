import { Controller, Get, NotImplementedException } from '@nestjs/common';
import { AppService } from './app.service';
import { Example } from './example.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * Retrieve an Example.
   */
  @Get('example')
  example1(): Example {
    throw new NotImplementedException();
  }

  /**
   * Retrieve a list of Examples.
   *
   * The return type is `Example[]`.
   */
  @Get('examples1')
  examples1(): Example[] {
    throw new NotImplementedException();
  }

  /**
   * Retrieve a list of Examples.
   *
   * The return type is `readonly Example[]`.
   */
  @Get('examples2')
  examples2(): readonly Example[] {
    throw new NotImplementedException();
  }

  /**
   * Retrieve a list of Examples.
   *
   * The return type is `ReadonlyArray<Example>`.
   */
  @Get('examples3')
  examples3(): ReadonlyArray<Example> {
    throw new NotImplementedException();
  }
}
