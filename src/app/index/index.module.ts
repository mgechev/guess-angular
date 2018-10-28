import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: IndexComponent
      }
    ])
  ]
})
export class IndexModule {}
