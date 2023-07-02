import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

 
     personArray = [
      {
        name: "John Doe",
        id: 1,
        address: "123 Main St",
        email: "johndoe@example.com"
      },
      {
        name: "Jane Smith",
        id: 2,
        address: "456 Elm St",
        email: "janesmith@example.com"
      },
      {
        name: "Bob Johnson",
        id: 3,
        address: "789 Oak St",
        email: "bobjohnson@example.com"
      },
      {
        name: "Alice Brown",
        id: 4,
        address: "987 Pine St",
        email: "alicebrown@example.com"
      },
      {
        name: "Mike Davis",
        id: 5,
        address: "654 Cedar St",
        email: "mikedavis@example.com"
      }
    ];
    
   
  }


