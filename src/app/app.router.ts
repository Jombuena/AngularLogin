import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';

export const router: Routes = [
    {path: '', redirectTo: '#', pathMatch: 'full'},
    {path: 'features', component: FeaturesComponent},
    {path: 'form', component: FormComponent},
    {path: 'login', component: LoginComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
