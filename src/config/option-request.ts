export class Option_Request {
  name: string;
  value: any;

  constructor(parametro: string, value: any) {
    this.name = parametro;
    this.value = value;
    this.mostrar();
  }

  private mostrar(){
    console.log('Option Header:');
    console.log('Header Name:',this.name);
    console.log('Header Value:',this.value);
  }
}
