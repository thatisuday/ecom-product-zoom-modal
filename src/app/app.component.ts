import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ComponentRef, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { Image } from './interfaces/image';
import { ModalComponent } from './components/modal/modal.component';
import { EcomProductZoomModalService } from './services/ecom-product-zoom-modal.service';

@Component({
  selector: 'ecom-product-zoom-modal',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  modalComponentRef : ComponentRef<ModalComponent> = null;
  @ViewChild('modalHolder', {read: ViewContainerRef}) modalHolder: ViewContainerRef;
  
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private prodZoomModalService: EcomProductZoomModalService
  ) { }

  ngOnInit() {
    // on modal open service call
    this.prodZoomModalService.onOpen.subscribe((images: Image[]) => {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
      this.modalHolder.clear();
      this.modalComponentRef = this.modalHolder.createComponent(componentFactory);
      this.modalComponentRef.instance.images = images;
    });

    // on modal close service call
    this.prodZoomModalService.onClose.subscribe(() => this.cleanModalHolder());
  }

  ngOnDestroy() {
    this.prodZoomModalService.onClose.subscribe(() => this.cleanModalHolder());
  }

  // clean any instance of modal 
  // inside modal holder element
  cleanModalHolder(...args: any[]) {
    this.modalHolder.clear();
  }
}