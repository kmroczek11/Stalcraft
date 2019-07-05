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
        height: "400px",
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageSize: NgxGalleryImageSize.Contain,
        thumbnailSize: NgxGalleryImageSize.Contain
      },
      // max-width 800
      {
        breakpoint: 800,
        width: "100%",
        height: "600px",
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: "assets/poland/1.jpg",
        medium: "assets/poland/1.jpg",
        big: "assets/poland/1.jpg"
      },
      {
        small: "assets/poland/1.jpg",
        medium: "assets/poland/1.jpg",
        big: "assets/poland/1.jpg"
      },
      {
        small: "assets/poland/1.jpg",
        medium: "assets/poland/1.jpg",
        big: "assets/poland/1.jpg"
      },
      {
        small: "assets/poland/1.jpg",
        medium: "assets/poland/1.jpg",
        big: "assets/poland/1.jpg"
      }
    ];
  }
}
