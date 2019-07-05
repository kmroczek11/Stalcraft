import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule } from "@angular/forms";
import { NavComponent } from "./nav/nav.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

import { AppRoutingModule } from "./app-routing/app-routing.module";
import { OfferComponent } from "./offer/offer.component";
import { ImplementationsComponent } from "./implementations/implementations.component";
import { ReferencesComponent } from "./references/references.component";
import { PolandComponent } from "./poland/poland.component";
import { NgxGalleryModule } from "ngx-gallery";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    OfferComponent,
    ImplementationsComponent,
    ReferencesComponent,
    PolandComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
