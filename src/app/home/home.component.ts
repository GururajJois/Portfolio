import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rtr:any
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  goToLink(url: string){
    window.open(url, "_blank");
}

}
