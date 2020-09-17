import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit, ElementRef, Input, ContentChild, AfterContentInit, AfterContentChecked, DoCheck, ChangeDetectorRef } from '@angular/core';
import { ProductSubComponent } from './../product-sub/product-sub.component';

@Component({
  selector: 'app-product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductChildComponent implements OnInit, DoCheck, AfterViewInit, AfterContentInit {
  @ContentChild('ParentcontentRef', { static: true }) ParentcontentRef: ElementRef;
  @ContentChild(ProductSubComponent, { static: true }) ProductSubComponent: ProductSubComponent;
  @ViewChild('childRef') childRef: ElementRef;
  @Input('title') title: string;
  today: Date = new Date();
  constructor(private changeDetector: ChangeDetectorRef) {
    // console.log("in constuctor: ",this.childRef)
  }

  ngOnInit(): void {
    console.log("in child oninit: ", this.ParentcontentRef.nativeElement.textContent);
    console.log("in child oninit ProductSubComponent: ", this.ProductSubComponent.sub);
  }

  ngDoCheck() {
    console.log("in docheck");
    this.changeDetector.markForCheck();
  }

  ngAfterViewInit() {
    console.log("in ngAfterViewInit: ", this.childRef.nativeElement.style = 'font-weight: bold')
  }

  ngAfterContentInit() {
    // console.log("in child ngAfterContentInit: ", this.ProductDataComponent)
    // setTimeout(() => {
    //   this.ProductDataComponent.productDate = new Date()
    // },3000)
    console.log("in child ngAfterContentInit: ", this.ParentcontentRef.nativeElement.textContent);
    console.log("ProductSubComponent in aftercontentinitt: ", this.ProductSubComponent.sub);
    setTimeout(() => {
      this.ProductSubComponent.sub = "new sub content";
    }, 3000)

    console.log("ProductSubComponent in aftercontentinitt: ", this.ProductSubComponent.sub);
  }


}
