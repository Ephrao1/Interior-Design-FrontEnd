import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyregisterComponent } from './companyregister/companyregister.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'


const routes: Routes = [
  {path: 'app-register', component: RegisterComponent},
  {path: 'app-companyregister', component: CompanyregisterComponent},
  {path: 'app-login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
