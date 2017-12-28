import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxDatatableDynamic } from './components/ngx-datatable-dynamic/ngx-datatable-dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxDatatableDynamic
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
