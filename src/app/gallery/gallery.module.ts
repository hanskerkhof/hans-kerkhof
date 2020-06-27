import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery/gallery.component';
import { ViewerComponent } from './viewer/viewer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ImageService } from './service/image.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  declarations: [GalleryComponent, ViewerComponent],
  providers: [ImageService],
  exports: [GalleryComponent, ViewerComponent],
})
export class GalleryModule {}
