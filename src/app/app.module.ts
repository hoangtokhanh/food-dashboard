import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { DevExtremeModule } from 'devextreme-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FoodDashboardComponent } from './food-dashboard/food.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DevExtremeModule,
    DxDataGridModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
