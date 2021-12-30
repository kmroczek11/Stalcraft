import { Component, OnInit } from '@angular/core';
import { IImage } from '../modules/slideshow/IImage';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  imageSources: string[] = [
    "assets/homegallery/1.jpg",
    "assets/homegallery/2.jpg",
    "assets/homegallery/3.jpg",
  ];

  constructor() { }

  ngOnInit() {
  }

}
