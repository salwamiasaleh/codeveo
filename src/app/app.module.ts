import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { CarouselModule } from 'ngx-owl-carousel-o'; // Make sure to import the CarouselModule

import { SideBarComponent } from './side-bar/side-bar.component';
import { VisionComponent } from './vision/vision.component';
import { ServicesComponent } from './services/services.component';
import { BannerComponent } from './banner/banner.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { ClientsComponent } from './clients/clients.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CardComponent } from './card/card.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
const routes: Routes = [
 
  // other route configurations
];
@NgModule({

  
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    VisionComponent,
    ServicesComponent,
    BannerComponent,
    OurWorkComponent,
    ClientsComponent,
    CardComponent,
    AccordionItemComponent,
    ContactUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
 
    AppRoutingModule,
    RouterModule,
    SlickCarouselModule,
    MatIconModule, 
    CarouselModule ,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
