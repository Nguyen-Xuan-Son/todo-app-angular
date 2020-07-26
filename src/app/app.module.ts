import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  CreateAndUpdateComponent,
  ListComponent,
  ItemComponent,
  BulkActionComponent
} from './features';
import {
  ButtonComponent,
  InputComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    CreateAndUpdateComponent,
    ListComponent,
    BulkActionComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
