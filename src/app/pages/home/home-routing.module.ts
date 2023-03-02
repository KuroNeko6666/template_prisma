import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';
import { JobsComponent } from './jobs/jobs.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilesComponent } from './profiles/profiles.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: IndexComponent
      },
      {
        path: "company/companies",
        component: CompaniesComponent
      },
      {
        path: "company/company-profile",
        component: CompanyProfileComponent
      },
      {
        path: "profile/feed",
        component: ProfileComponent
      },
      {
        path: "profile/all",
        component: ProfilesComponent
      },
      {
        path: "activities",
        component: ActivitiesComponent
      },
      {
        path: "jobs",
        component: JobsComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
