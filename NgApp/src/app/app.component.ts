import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    template: 
    `
    <nav>
        <a routerLink="/home" routerLinkActive="active">Home Page</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
        <a routerLink="/contactform" routerLinkActive="active">Contact Us</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: ['app.component.css']
})
export class AppComponent { }