import { Component, OnInit } from "@angular/core";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
  NgxGalleryImageSize
} from "ngx-gallery";

@Component({
  selector: "app-belgium",
  templateUrl: "./belgium.component.html",
  styleUrls: ["./belgium.component.scss"]
})
export class BelgiumComponent implements OnInit {
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
        small: "assets/belgium/1.jpg",
        medium: "assets/belgium/1.jpg",
        big: "assets/belgium/1.jpg"
      },
      {
        small: "assets/belgium/2.jpg",
        medium: "assets/belgium/2.jpg",
        big: "assets/belgium/2.jpg"
      },
      {
        small: "assets/belgium/3.jpg",
        medium: "assets/belgium/3.jpg",
        big: "assets/belgium/3.jpg"
      },
      {
        small: "assets/belgium/4.jpg",
        medium: "assets/belgium/4.jpg",
        big: "assets/belgium/4.jpg"
      },
      {
        small: "assets/belgium/5.jpg",
        medium: "assets/belgium/5.jpg",
        big: "assets/belgium/5.jpg"
      }
    ];
  }
}
