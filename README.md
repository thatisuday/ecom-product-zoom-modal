## ecom-product-zoom-modal

Show e-commerce product images zoom slideshow in modal for Angular 4+

[*__preview__*](https://rawgit.com/thatisuday/ecom-product-zoom-modal/master/demo/dist/index.html)

## Install
```
npm install @plency/ecom-product-zoom-modal
```

## Import Module
```
import { EcomProductZoomModalModule } from '@plency/ecom-product-zoom-modal';

@NgModule({
  ...,
  imports: [
    ...,
    EcomProductZoomModalModule
  ]
})
```

## Use
```
import { Component, OnInit } from '@angular/core';
import { EcomProductZoomModalImage, EcomProductZoomModalService } from '@plency/ecom-product-zoom-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  images: EcomProductZoomModalImage[] = [{
    img: 'large-1.jpg',
    thumb: 'small-1.jpg'
  }, {
    img: 'large-2.jpg',
    thumb: 'small-2.jpg'
  }, {
    img: 'large-3.jpg',
    thumb: 'small-3.jpg'
  }];
  
  constructor(
    private prodZoomModalService: EcomProductZoomModalService
  ) { }

  ngOnInit() {
  }

  openModal() {
    this.prodZoomModalService.open(this.images);
  }
}
```
