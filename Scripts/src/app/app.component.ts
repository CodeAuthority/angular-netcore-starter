import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    template: `
        <h1>Hello world!</h1>
        <nav>
            <a routerLink="/home" routerLinkActive="active">Home</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app.component.css']
})
export class AppComponent { }