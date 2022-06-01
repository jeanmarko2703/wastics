import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styles: [

    `
    

    .card{
      margin: 30px;
      height: 150px;
      font-size:40px ;
     
      
    }

    @media only screen and (min-width: 768px) {

    .container{
      margin-left:10%;
      margin-top:3%;
    }

    .spacer{
      height: 50px !important;
display: flex !important;
    }

    } 

    
    
    
    

    `
  ]
})
export class HomeScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
