// Angular Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { Router }        from '@angular/router';

// App Components
import { AppComponent }                       from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HomeComponent }                      from './home.component';
import { AboutComponent }                     from './about.component';
import { ContactComponent }                   from './contact.component';
import { ContactFormComponent }               from './contact-form.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [ 
        AppComponent,
        routedComponents,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        ContactFormComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }