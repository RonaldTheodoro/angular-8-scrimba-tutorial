import { Component, OnInit } from "@angular/core";

import { DataService } from '../core/data.service';

import { ICustomer } from "src/app/shared/interfaces";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html"
})
export class CustomersComponent implements OnInit {
  title: string;
  people: ICustomer[];
  isVisible: boolean = true;

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.title = "Customers";
    this._dataService.getCustomers().subscribe(
      (customers: ICustomer[]) => this.people = customers
    );
  }

  changeVisibility() {
    this.isVisible = !this.isVisible;
  }
}
