import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, AfterViewChecked, ViewChildren, QueryList, ContentChild, AfterContentInit } from '@angular/core';
import { ProductChildComponent } from './product-child/product-child.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit {
  @ViewChild('parentRef') parentRef: ElementRef;
  @ViewChildren(ProductChildComponent) productChildRef: QueryList<ProductChildComponent>;
  title = "Card Head"
  constructor() { 
    // console.log("in parent constructor", this.productChildRef)
  }

  ngOnInit(): void {
    // console.log("in oninit")
  }

  ngAfterViewInit() {
    // console.log("in parent viewInit", this.parentRef.nativeElement);
    this.parentRef.nativeElement.textContent = "newContent";
    this.productChildRef.toArray()[0].childRef.nativeElement.style='background-color: rgb(23,56,123); display: inline-block; margin: 3rem';
    this.productChildRef.toArray().forEach(element => {
      setInterval(() => {
        element.today = new Date();
      }, 1000)
    });
  }

  ngAfterViewChecked() {
    // console.log("in parent view checked");
  }

  ngAfterContentInit() {
    
  }
}
