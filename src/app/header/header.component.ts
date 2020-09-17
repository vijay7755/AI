import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  position = 0;
  positionExceds = false;

  @HostListener('window:scroll', ['event'])
  onScroll(event) {
    // console.log("scroll position : ",document.documentElement.scrollTop);
    this.position = document.documentElement.scrollTop;
    
    if(this.position > 100){
      // console.log("true: ",this.position)
      this.positionExceds = true;
    }
    else{
      // console.log("false: ",this.position)
      this.positionExceds = false;
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

}
