import { NgModule } from '@angular/core';
import { SideMenuComponent } from '../layout/side-menu/side-menu.component';
import { ChatModule } from './chat/chat.module';
import { LearnPageComponent } from './chat/chat-page.component';
import { MainPageComponent } from './main/main-page.component';
import { SamplePageComponent } from './sample-page/sample-page.component';

@NgModule({
  imports: [ChatModule],
  declarations: [],
  exports: []
})
export class PagesModule {}
