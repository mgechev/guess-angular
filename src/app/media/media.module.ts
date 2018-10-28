import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MediaComponent } from './media.component';

@NgModule({
  declarations: [MediaComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MediaComponent
      }
    ])
  ]
})
export class MediaModule {}
