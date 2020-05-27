import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
//it provides metadeata about component
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
//class, which handels functionality of the components.
export class ProductAlertsComponent implements OnInit {
  
  //passing the property value
@Input() product;
  constructor() { }

  ngOnInit() {
  }

}