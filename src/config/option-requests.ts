import { Option_Request } from './option-request';
export class Option_Requests{
  private option_requests:Option_Request[];
  private tamanio:number;
  constructor(){
    this.option_requests = [];
    this.tamanio = 0;
  }

  addRequest(name:string, value:any){
    this.option_requests[this.tamanio++] = new Option_Request(name,value);
  }

  getRequests():Option_Request[]{
    return this.option_requests;
  }
}
