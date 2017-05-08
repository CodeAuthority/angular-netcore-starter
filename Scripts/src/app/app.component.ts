import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    template: 
    `
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" routerLink="/home">angular2_core_starter</a>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li><a routerLink="/home">Home</a></li>
                    <li><a routerLink="/about">About</a></li>
                    <li><a routerLink="/contactform">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <router-outlet class="container body-content"></router-outlet>
    <hr />
    <footer class="container">
        <p>&copy; 2017 - angular2_core_starter</p>
    </footer>
    `,
    styleUrls: ['app.component.css']
})
export class AppComponent { }