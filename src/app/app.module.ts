import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfilePictureAndBackgroundComponent } from './components/profile-picture-and-background/profile-picture-and-background.component';
import { TitleComponent } from './components/title/title.component';
import { PresentationComponent } from './components/presentation/presentation.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ProfilePictureAndBackgroundComponent, TitleComponent, PresentationComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
