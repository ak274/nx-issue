import { Component, OnInit } from '@angular/core';
import { OrdersFacade } from '../+state/orders.facade';
import * as OrdersActions from '../+state/orders.actions';

@Component({
  selector: 'test-org-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private ordersFacade: OrdersFacade) { }

  ngOnInit(): void {
    this.ordersFacade.dispatch(OrdersActions.loadOrders());
  }

}
