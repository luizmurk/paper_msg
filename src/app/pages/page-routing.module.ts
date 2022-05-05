import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnPageComponent } from './chat/chat-page.component';

const routes: Routes = [ 

  {path: 'learn', component: LearnPageComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
