import { Component, OnInit } from "@angular/core";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
  NgxGalleryImageSize
} from "ngx-gallery";

@Component({
  selector: "app-poland",
  templateUrl: "./poland.component.html",
  styleUrls: ["./poland.component.scss"]
})
export class PolandComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: "100%",
        height:'80vh',
        thumbnailsColumns: 4,
        imagePercent: 100,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageSize: NgxGalleryImageSize.Contain,
        thumbnailSize: NgxGalleryImageSize.Contain,
        thumbnailsPercent: 40
      },
      // max-width 500
      {
        height:'50vh',
        breakpoint: 500,
        imagePercent: 70,
        thumbnailsPercent: 20
      }
    ];

    this.galleryImages = [
      {
        small: "assets/poland/1.jpg",
        medium: "assets/poland/1.jpg",
        big: "assets/poland/1.jpg"
      },
      {
        small: "assets/poland/2.jpg",
        medium: "assets/poland/2.jpg",
        big: "assets/poland/2.jpg"
      },
      {
        small: "assets/poland/3.jpg",
        medium: "assets/poland/3.jpg",
        big: "assets/poland/3.jpg"
      },
      {
        small: "assets/poland/4.jpg",
        medium: "assets/poland/4.jpg",
        big: "assets/poland/4.jpg"
      },
      {
        small: "assets/poland/5.jpg",
        medium: "assets/poland/5.jpg",
        big: "assets/poland/5.jpg"
      },
      {
        small: "assets/poland/6.jpg",
        medium: "assets/poland/6.jpg",
        big: "assets/poland/6.jpg"
      }
    ];
  }
}
