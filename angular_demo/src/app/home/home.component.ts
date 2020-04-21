import { Component, OnInit } from '@angular/core';
import { ProserviceService } from '../proservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prodlist;
  constructor(private productService:ProserviceService) { 
    this.productService.listproduct().subscribe((data)=>{
      this.prodlist=data;
    })
  }

  ngOnInit(): void {
  }

}
