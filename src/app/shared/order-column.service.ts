import { Injectable } from '@angular/core';

@Injectable()
export class OrderColumnService {

  constructor() { }

  orderColumn(indice: number, props: Array<number>, originalList: Array<any>, ascendingSort: number) {
    let orderedList: any[];
    console.log(indice);
    console.log('Props:' + props);
    console.log(originalList);
    console.log(indice > -1);
    console.log(indice < props.length);
    console.log(indice && props && originalList);



    if (indice != undefined && props != undefined && originalList != undefined) {
      console.log('Entro1');
      if (indice > -1 && indice < props.length) {
        console.log('Entro2');
        let ordered = originalList.sort(
          (izquierdo, derecho): number => {
            console.log('--------------');
            console.log(izquierdo);
            console.log(derecho);
            console.log('--------------');
            if (izquierdo[indice].data < derecho[indice].data) {
              return -1 * ascendingSort;
            } else if (izquierdo[indice].data > derecho[indice].data) {
              return 1 * ascendingSort;
            } else {
              return 0;
            }
          }
        );
        orderedList = ordered;
        console.log(ordered);

      } else {
        orderedList = originalList;
      }

    } else {
      orderedList = originalList;
    }
    return orderedList;
  }
}
