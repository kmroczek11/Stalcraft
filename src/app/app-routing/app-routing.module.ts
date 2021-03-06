import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { OfferComponent } from "../offer/offer.component";
import { ImplementationsComponent } from "../implementations/implementations.component";
import { ReferencesComponent } from "../references/references.component";
import { ContactComponent } from "../contact/contact.component";
import { PolandComponent } from "../poland/poland.component";
import { BelgiumComponent } from "../belgium/belgium.component";
import { NetherlandsComponent } from "../netherlands/netherlands.component";

const routes: Routes = [
  { path: "", component: AboutComponent },
  { path: "offer", component: OfferComponent },
  {
    path: "implementations",
    component: ImplementationsComponent,
    children: [
      { path: "Poland", component: PolandComponent },
      { path: "Belgium", component: BelgiumComponent },
      { path: "Netherlands", component: NetherlandsComponent }
    ]
  },
  { path: "references", component: ReferencesComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
