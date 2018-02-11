import { AdvertCarComponent } from './components/advert/creation/categories/car/advert-car.component';
import { AdvertMobileComponent } from './components/advert/creation/categories/mobile/advert-mobile.component';
import { AdvertDetailsComponent } from './components/advert/details/advert-details.component';
import { AdvertCreationComponent } from './components/advert/creation/advert-creation.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProfileLoginComponent } from './components/profile/profile-login.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MomentModule } from 'angular2-moment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './theme/material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { AdvertComponent } from './components/advert/advert.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from 'angular2-auth';
import { NgxGalleryModule } from 'ngx-gallery';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AdvertCategoryComponent } from './components/advert/creation/advert-category.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LayoutComponent,
    AdvertComponent,
    ProfileComponent,
    AdvertCreationComponent,
    AdvertDetailsComponent,
    ProfileLoginComponent,
    AdvertMobileComponent,
    AdvertCategoryComponent,
    AdvertCarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxGalleryModule,
    NgxPaginationModule,
    MomentModule,
    SimpleNotificationsModule.forRoot(),
    AuthModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
