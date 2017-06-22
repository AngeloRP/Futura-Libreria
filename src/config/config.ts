import { Headers, Response, Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

export class ConfigServices {

  constructor(
    private http: Http,
    private router: Router) {
  }

}

const headers = new Headers({ 'Content-Type': 'application/json' });
headers.append('Authorization', localStorage.getItem('auth_token'));
headers.append('Access-Control-Allow-Origin', '*');

function extraData(res: Response): any {
  /*console.log('************************');
  console.log('Response:' + res.json());
  console.log('Response:' + res.headers);
  console.log('************************');
  console.log('Response JSON:' + res.json().message);*/
  let result = {
    headers: res.headers,
    data: res.json()
  };
  /*console.log('-------------------------------------------------');
  console.log('-------------------------------------------------');
  console.log(result);
  console.log('-------------------------------------------------');
  console.log('-------------------------------------------------');*/
  if (result.data.success === false && result.data.tokenRejection === true) {
    console.log('Error redirigir --->');
    //return this.router.navigate(['#/app/dashboard']);
    window.localStorage.removeItem('auth_token');
    window.localStorage.removeItem('user_info');
    window.localStorage.removeItem('companyId');
    window.localStorage.removeItem('roleId');
    window.localStorage.removeItem('storeId');
    window.localStorage.removeItem('resourceId');
    window.localStorage.removeItem('ruta');
    location.href = 'login';
  }
  return result;
}

function handleError(error) {
  console.log('*************************');
  console.log('*******HANDLE ERROR********');
  console.log('*************************');
  console.log(error);
  const errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.log('*************************');
  console.log('Error Mensaje:', errMsg);
  console.log('*************************');
  const body = JSON.parse(error._body);
  console.log('*************************');
  console.log('Error Body:', body);
  console.log('*************************');
  const obj = [{ status: error.status, statusText: error.statusText, type: error.type, ok: error.ok, body: body }];
  console.log('*************************');
  console.log('obj:', obj);
  console.log('*************************');
  //manejoError(obj);
  return Observable.throw(body);
}

function manejoError(error) {
  console.log('ERRRROR');
  console.log('-------------------------------------------------');
  console.log('-------------------------------------------------');
  console.log(error);
  console.log('-------------------------------------------------');
  console.log('-------------------------------------------------');
  if (
    error[0].status === 400 ||
    error[0].status === 500 ||
    error[0].status === 422 ||
    error[0].status === 503) {
    console.log('Entro a manejar errores');
    let injson = Object.keys(error[0].body);
    console.log(injson);
    let err = 'Acción invalida: \n';
    console.log(err);
    for (let x of injson) {
      err = err + error[0].body[x] + '\n';
      console.log(error[0].body[x]);
    }
    alert(err);
    location.href = 'login';
  }
}

export const config_server = {
  'tokens': 'Bearer YnUHU7Iw3n4E6CGl+yzIym9ok+BoAW+bJbG2k8aQfBohyW4G7Tma4LopU2SEw3sH/zzqBiLTXOGhG/vUT0ZfIA==4',
  'extraData': extraData,
  'handleError': handleError,
  'headers': headers,
};
