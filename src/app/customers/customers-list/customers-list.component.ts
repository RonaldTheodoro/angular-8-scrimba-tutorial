import { Component, OnInit, Input } from "@angular/core";

import { ICustomer } from "src/app/shared/interfaces";

@Component({
  selector: "app-customers-list",
  templateUrl: "./customers-list.component.html"
})
export class CustomersListComponent implements OnInit {
  private _customers: ICustomer[] = [];
  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number;
  currencyCode: string = "USD";

  constructor() {}

  ngOnInit() {}

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((customer: ICustomer) => {
      this.customersOrderTotal += customer.orderTotal;
    });
  }

  sort(prop: string) {
    // this.filteredCustomers.sort(prop)
  }

  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

}
