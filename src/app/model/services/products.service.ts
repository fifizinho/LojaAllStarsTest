import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] = [
    { id: 1, name: 'All Stars Preto', price: 150.0, description: 'Preto de couro', image: './allStars preto.png'},
    { id: 2, name: 'All Stars Branco ', price: 750.5, description: 'Branco em detalhe dourado', image: './converse_all_star_cano_medio_chuck_taylor_bege_705_1_164a6103b7a63900a20b33b2aa003ed3.webp' },
    { id: 3, name: 'All Stars Preto e Azul', price: 600.0, description: 'Preto com detalhes em azul', image: './AllStars Preto2.png' }
  ];
  getProducts(): Iproducts[] {
    return this.products;
  }
}
