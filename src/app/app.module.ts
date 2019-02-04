import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent, SearchFilter } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GridModule,
    ButtonsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
