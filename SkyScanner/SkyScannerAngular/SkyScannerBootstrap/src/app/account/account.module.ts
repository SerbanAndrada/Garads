import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material';
import { AuthGuard } from '../services/auth.guard';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'account/login', component: LoginComponent},
    { path: 'account/settings', component: SettingsComponent, canActivate: [AuthGuard]},
    { path: 'account/register', component: RegisterComponent}
  ]),
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [LoginComponent, RegisterComponent, SettingsComponent]
})
export class AccountModule { }
