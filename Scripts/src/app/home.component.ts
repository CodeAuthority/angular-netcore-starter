import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
    //template: `<title>{{title}}</title>`
})

export class HomeComponent {
    title = "Home Component";
}