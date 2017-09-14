import { EcomProductZoomModalService } from './../../services/ecom-product-zoom-modal.service';
import { Component, OnInit } from '@angular/core';

import { Image } from './../../interfaces/image'; 

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  images: Image[] = [];

  constructor(
    private prodZoomModalService: EcomProductZoomModalService
  ) {}

  ngOnInit() {}

  // close modal
  closeModal() {
    this.prodZoomModalService.close();
  }

  // on click outside modal content
  // close modal
  onClickOutside($event) {
    if(this.prodZoomModalService.isOpen){
      this.closeModal();
    }
  }

}
