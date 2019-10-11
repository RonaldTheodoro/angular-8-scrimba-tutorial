import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { ICustomer, IOrder } from "src/app/shared/interfaces";

@Injectable()
export class DataService {
  private _baseUrl: string = "assets";

  constructor(private _http: HttpClient) {}

  getCustomers(): Observable<ICustomer[]> {
    return this._http.get<ICustomer[]>(
      this._baseUrl + '/customers.json'
    ).pipe(
      catchError(this.handleError)
    );
  }

  public getCustomer(id: number): Observable<ICustomer> {
    return this._http.get<ICustomer[]>(
      `${this._baseUrl}/customers.json`
    ).pipe(
      map(customers => {
        let customer = customers.filter(
          (customer: ICustomer) => customer.id === id
        );
        return (customer && customers.length) ? customer[0] : null;
      }),
      catchError(this.handleError)
    );
  }

  public getOrders(id: number): Observable<IOrder[]> {
    return this._http.get<IOrder[]>(
      `${this._baseUrl}/orders.json`
    ).pipe(
      map(orders => {
        let customerOrders = orders.filter(
          (order: IOrder) => order.customerId === id
        );
        return customerOrders;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error("Server error: ", error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || "Node.js server error");
  }
}
