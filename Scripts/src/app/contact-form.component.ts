//contact form component
import { Component }        from '@angular/core';
import { Contact }          from './contact';
import { ContactComponent } from './contact.component';

@Component({
    moduleId: module.id, // this has to be in the component so angular picks up the correct routing,
    selector: 'contactform',
    templateUrl: 'contactform.component.html'
})

export class ContactFormComponent {
    submitted = false;
    //function for submitting a form
    onSubmit() {this.submitted = true;}
    
}