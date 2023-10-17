import { LightningElement } from 'lwc';

export default class ContactList extends LightningElement {
    contacts = [
        {
            Id : 1,
            Name : 'Sameer Syed',
            Email : 'sam.syedsf@gmail.com',
            Phone : '9900009900'
        },
        {
            Id : 2,
            Name : 'Jhon Doe',
            Email : 'jhon.doe@gmail.com',
            Phone : '9999999999'
        },
        {
            Id : 3,
            Name : 'Andrew John',
            Email : 'andrew.jhon@hotmail.com',
            Phone : '9898989898'
        }
    ];
}
