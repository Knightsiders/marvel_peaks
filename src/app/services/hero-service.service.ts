import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { StaticInjector } from '../../../node_modules/@angular/core/src/di/injector';

@Injectable()
export class HeroServiceService {
  private host: String = 'http://localhost';
  private port: String = '8888';

  constructor(private httpClient: HttpClient) {}

  private formatUrl() {
    return this.host + ':' + this.port;
  }

  getUserPage(numeroPage) {
    return this.httpClient.get(this.formatUrl() + '/users/page/' + numeroPage);
  }

}
