import { CommonModule } from '@angular/common';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalContentComponent } from './components/modal/modal-content/modal-content.component';
import { EcomProductZoomModalService } from './services/ecom-product-zoom-modal.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalContentComponent,
    ModalComponent
  ],
  entryComponents : [
    ModalComponent
  ],
  imports: [
    CommonModule,
    ClickOutsideModule
  ],
  exports: [
    AppComponent
  ],
  providers: [EcomProductZoomModalService]
})
export class AppModule { }
