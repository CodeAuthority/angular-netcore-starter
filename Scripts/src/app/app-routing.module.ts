import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent }        from './home.component';
import { AboutComponent }       from './about.component';
import { ContactComponent }     from './contact.component';
import { ContactFormComponent } from './contact-form.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contactform', component: ContactFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent];