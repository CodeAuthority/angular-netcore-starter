// contact us component
import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'contact',
    templateUrl: 'contactform.component.html',
    template: 
    `
        <h2>Contact Page</h2>
    `
})

export class ContactComponent {
    title = "Contact Page";
    name  = "Name";
    number = "Phone Number";
    email = "Email Address";
    Message = "Message";

}