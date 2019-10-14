import { Component, OnInit } from '@angular/core';
import { IImage } from '../modules/slideshow/IImage';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  imageSources: string[] = [
    "../assets/homeGallery/1.jpg",
    "../assets/homeGallery/2.jpg",
    "../assets/homeGallery/3.jpg",
  ];

  constructor() { }

  ngOnInit() {
  }

}
