import { NgModule, Self } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { TestPipe } from './Pipes/test.pipe';
import { HeaderComponent } from './Components/header/header.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app-routing.module';
import { DITestingService } from './Services/d-itesting.service';
import { API_URL } from './app.token';


@NgModule({

  // The declarations array is where you declare the components, directives, and pipes that belong to this module.
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    TestPipe,
    HeaderComponent,
    SettingsComponent
  ],
  //  The imports array is where you import other modules that are needed for this module to function properly.
  // such as BrowserModule, FormsModule, or custom modules.
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // The providers array is where you can specify services that should be available for dependency injection throughout the module.
  providers: [ provideRouter(routes, withComponentInputBinding()), { provide: API_URL, useValue: 'https://api.myapp.com' }, 
   ],
  // The bootstrap array specifies the root component that Angular should use to launch the application.
  bootstrap: [AppComponent]
})
export class AppModule {
   constructor(@Self() private dITestingService: DITestingService) {
      if(this.dITestingService){
        this.dITestingService.name = 'AppModule';
        this.dITestingService.log('appModule constructor of AppModule');
      }
     }
 }
