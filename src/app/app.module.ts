import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { TestPipe } from './Pipes/test.pipe';
import { HeaderComponent } from './Components/header/header.component';
import { SettingsComponent } from './Components/settings/settings.component';
// import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    TestPipe,
    HeaderComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
