import { Injectable, EventEmitter } from '@angular/core';
import _ from 'lodash';

import { Image } from './../interfaces/image';

@Injectable()
export class EcomProductZoomModalService {

  onOpen: EventEmitter<Image[]> = new EventEmitter();
  onClose: EventEmitter<any> = new EventEmitter();
  isOpen: boolean = false;

  // open (show) modal
  open(images: Image[]){
    if(images && !_.isEmpty(images)){
      this.onOpen.emit(images);
      setTimeout(() => this.isOpen = true, 100);
    }
    else{
      console.warn('Error: Please provide images for ecom-product-zoom-modal!');
    }
  }

  // close (hide) modal
  close(){
    this.isOpen = false;
    this.onClose.emit();
  }

}
