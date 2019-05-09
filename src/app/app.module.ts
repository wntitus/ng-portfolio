import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderBoxComponent } from './main-header-box/main-header-box.component';
import { ProjectsBoxComponent } from './projects-box/projects-box.component';
import { SocialBoxComponent } from './social-box/social-box.component';

const appRoutes: Routes = [
  { path: '', component: MainHeaderBoxComponent },
  { path: 'projects', component: ProjectsBoxComponent },
  { path: 'social', component: SocialBoxComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderBoxComponent,
    ProjectsBoxComponent,
    SocialBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
