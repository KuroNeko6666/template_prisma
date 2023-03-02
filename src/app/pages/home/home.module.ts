import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './index/index.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CardBasicComponent } from './components/cards/card-basic/card-basic.component';
import { CardProfileComponent } from './components/cards/card-profile/card-profile.component';
import { ListProfileComponent } from './components/list/list-profile/list-profile.component';
import { CardPostComponent } from './components/cards/card-post/card-post.component';
import { ListPostComponent } from './components/list/list-post/list-post.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { JobsComponent } from './jobs/jobs.component';
import { ActivitiesComponent } from './activities/activities.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    CompaniesComponent,
    CompanyProfileComponent,
    CardBasicComponent,
    CardProfileComponent,
    ListProfileComponent,
    CardPostComponent,
    ListPostComponent,
    ProfileComponent,
    ProfilesComponent,
    JobsComponent,
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
