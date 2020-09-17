import { Component, OnInit, ChangeDetectionStrategy, OnChanges, DoCheck, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-product-sub',
  templateUrl: './product-sub.component.html',
  styleUrls: ['./product-sub.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSubComponent implements OnInit, OnChanges, DoCheck {
  sub: string = "sub content";
  constructor(private ChangeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    // this.ChangeDetector.detectChanges();
  }

  ngDoCheck() {
    this.ChangeDetector.detectChanges();
  }

}
