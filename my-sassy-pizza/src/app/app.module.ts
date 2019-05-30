import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './templates/home-page/home-page.component';
import { MenuComponent } from './templates/menu/menu.component';
import { ServicesComponent } from './templates/services/services.component';
import { BlogComponent } from './templates/blog/blog.component';
import { AboutComponent } from './templates/about/about.component';
import { ContactComponent } from './templates/contact/contact.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContentIntroComponent } from './components/content-intro/content-intro.component';
import { RestaurantFactsComponent } from './components/restaurant-facts/restaurant-facts.component';
import { PizzaPromoComponent } from './components/pizza-promo/pizza-promo.component';
import { MenuPricingComponent } from './components/menu-pricing/menu-pricing.component';
import { RestaurantRatingComponent } from './components/restaurant-rating/restaurant-rating.component';
import { ContentPromoMenuComponent } from './components/content-promo-menu/content-promo-menu.component';
import { BlogNewsComponent } from './components/blog-news/blog-news.component';
import { InteractiveMapContactComponent } from './components/interactive-map-contact/interactive-map-contact.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HeroFullSizeImageComponent } from './components/hero-full-size-image/hero-full-size-image.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { AboutOurChefComponent } from './components/about-our-chef/about-our-chef.component';
import { AboutOurChefCardComponent } from './components/about-our-chef-card/about-our-chef-card.component';
import { ErrorPageComponent } from './templates/error-page/error-page.component';
import { OurMenuCardContainerComponent } from './components/our-menu-card-container/our-menu-card-container.component';
import { HotMealMenuComponent } from './components/hot-meal-menu/hot-meal-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    ServicesComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    CarouselComponent,
    ContentIntroComponent,
    RestaurantFactsComponent,
    PizzaPromoComponent,
    MenuPricingComponent,
    RestaurantRatingComponent,
    ContentPromoMenuComponent,
    BlogNewsComponent,
    InteractiveMapContactComponent,
    ContactInformationComponent,
    FooterComponent,
    HeaderComponent,
    HeroFullSizeImageComponent,
    ArticleCardComponent,
    AboutOurChefComponent,
    AboutOurChefCardComponent,
    ErrorPageComponent,
    OurMenuCardContainerComponent,
    HotMealMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
