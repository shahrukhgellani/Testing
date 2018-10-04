import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { Menu2Component } from './menu2/menu2.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
//import { FooterComponent } from './footer.component';
//import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    Menu2Component,
     
  //  FooterComponent,
   // FooterComponent
  ],
  imports: [
  BrowserAnimationsModule,
  BrowserModule,
  FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
export class MyOwnCustomMaterialModule { }
