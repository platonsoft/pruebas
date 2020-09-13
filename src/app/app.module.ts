import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {ToastModule} from 'primeng/toast';
import {MessageModule} from 'primeng/message';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ItemsService } from './services/items.service';
import { HttpErrorInterceptor } from './services/httperrorinterceptor.service';
import { AddEditItemsComponent } from './mantenimiento/add-edit-items/add-edit-items.component';
import { HomeComponent } from './home/home.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    AddEditItemsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    CardModule,
    ToastModule,
    MessageModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    PaginatorModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ItemsService,MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
