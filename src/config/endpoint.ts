import { Headers } from '@angular/http';
import { Option_Request } from './option-request';
import { Option_Requests } from './option-requests';

export class Endpoint {
  private webUrl: string;
  private oldUrl: string;
  private headers: Headers;
  private querys: Option_Requests;
  constructor(url: string) {
    this.oldUrl = url;
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Authentication', window.localStorage.getItem('auth_token'));
    this.headers.append('UserId', window.localStorage.getItem('userId'));
    this.headers.append('ResourceId', window.localStorage.getItem('resourceId'));

  }

  public get $oldUrl(): string {
    return this.oldUrl;
  }

  public get url(): string {
    return this.webUrl;
  }

}
