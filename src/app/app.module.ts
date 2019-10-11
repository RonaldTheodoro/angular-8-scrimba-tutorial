import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { CoreModule } from './core/core.module';
import { CustomersModule } from "./customers/customers.module";
import { SharedModule } from "./shared/shared.module";
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, CustomersModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
