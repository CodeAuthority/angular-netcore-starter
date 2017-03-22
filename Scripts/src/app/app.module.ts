// Angular Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// App Components
import { AppComponent }                       from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [ 
        AppComponent,
        routedComponents
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }