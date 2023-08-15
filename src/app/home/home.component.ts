import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    title = 'welcome to website';
    typedValue:string  = '';
   
  
    isValid:string ="validate";
    val: string = ''; 
}
