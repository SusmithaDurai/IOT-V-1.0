import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss'],
})
export class BarcodeScannerComponent implements OnInit {

  constructor(private route:Router ) { }

  ngOnInit() {}

  scanBarcode(){
    this.route.navigate(['/home/device-config']);
  }

}
