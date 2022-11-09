import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productList : any ;
  constructor(private api: ApiService) { 
    this.api.getproduct()
    .subscribe( res=>{
      this.productList= res;
    })
  }

  ngOnInit(): void {
  }

}
