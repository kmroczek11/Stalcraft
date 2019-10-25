import { Component, OnInit } from "@angular/core";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
  NgxGalleryImageSize
} from "ngx-gallery";

@Component({
  selector: "app-netherlands",
  templateUrl: "./netherlands.component.html",
  styleUrls: ["./netherlands.component.scss"]
})
export class NetherlandsComponent implements OnInit {
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
        small: "assets/netherlands/1.jpg",
        medium: "assets/netherlands/1.jpg",
        big: "assets/netherlands/1.jpg"
      },
      {
        small: "assets/netherlands/2.jpg",
        medium: "assets/netherlands/2.jpg",
        big: "assets/netherlands/2.jpg"
      },
      {
        small: "assets/netherlands/3.jpg",
        medium: "assets/netherlands/3.jpg",
        big: "assets/netherlands/3.jpg"
      },
      {
        small: "assets/netherlands/4.jpg",
        medium: "assets/netherlands/4.jpg",
        big: "assets/netherlands/4.jpg"
      },
      {
        small: "assets/netherlands/5.jpg",
        medium: "assets/netherlands/5.jpg",
        big: "assets/netherlands/5.jpg"
      },
      {
        small: "assets/netherlands/6.jpg",
        medium: "assets/netherlands/6.jpg",
        big: "assets/netherlands/6.jpg"
      },
      {
        small: "assets/netherlands/7.jpg",
        medium: "assets/netherlands/7.jpg",
        big: "assets/netherlands/7.jpg"
      },
      {
        small: "assets/netherlands/8.jpg",
        medium: "assets/netherlands/8.jpg",
        big: "assets/netherlands/8.jpg"
      },
      {
        small: "assets/netherlands/9.jpg",
        medium: "assets/netherlands/9.jpg",
        big: "assets/netherlands/9.jpg"
      }
    ];
  }
}
