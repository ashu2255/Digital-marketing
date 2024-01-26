import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'contact', component:ContactComponent},
  {path:'service',component:ServiceComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'about',component:AboutComponent},
  {path:'team',component:TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
