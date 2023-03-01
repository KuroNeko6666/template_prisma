import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
