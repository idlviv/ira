import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css']
})
export class AddProductModalComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<any>) { }

  ngOnInit() {
  }

}
