import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { SettingsComponent } from './Components/settings/settings.component';

export const routes: Routes =
  [
    { path: '', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent, title: 'About' },
    { path: 'settings/:id', component: SettingsComponent },
    {path: '**', redirectTo: '', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
