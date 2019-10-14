import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
declare var $: any;

@Component({
  selector: "app-implementations",
  templateUrl: "./implementations.component.html",
  styleUrls: ["./implementations.component.scss"]
})
export class ImplementationsComponent implements OnInit {
  countries = [
    { class: "eu35", name: "Poland" },
    { class: "eu5", name: "Belgium" },
    //{ class: "eu20", name: "Ireland" },
    //{ class: "eu11", name: "Denmark" },
    //{ class: "eu16", name: "Germany" },
    { class: "eu33", name: "Netherlands" }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    $(document).ready(() => {
      $("#map-europe").CSSMap({
        size: 960,
        //activateOnLoad: ["eu35", "eu5", "eu20", "eu11", "eu16", "eu33"]
        activateOnLoad: ["eu35", "eu33", "eu5"]
      });
      // END OF THE CSSMap;
    });
  }

  onSelect(country) {
    console.log("ok");
    this.router.navigate(["/implementations", country.name]);
  }
}
