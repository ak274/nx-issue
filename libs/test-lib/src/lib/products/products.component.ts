import { Component, OnInit } from '@angular/core';
import { ProductsFacade } from '../+state/products.facade';
import * as ProductsActions from '../+state/products.actions';
@Component({
  selector: 'test-org-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private produtsFacade: ProductsFacade) { }

  ngOnInit(): void {
    this.produtsFacade.dispatch(ProductsActions.loadProducts());
  }

}
