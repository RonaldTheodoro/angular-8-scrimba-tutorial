import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { map, catchError } from "rxjs/operators";

import { ICustomer, IOrder } from "src/app/shared/interfaces";

@Injectable()
export class DataService {
  baseUrl: string = "assets/";

  constructor() {}

  private handleError(error: any) {
    console.error("Server error: ", error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || "Node.js server error");
  }
}
