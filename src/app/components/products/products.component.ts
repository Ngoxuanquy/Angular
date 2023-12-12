import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-products',
  template: ``,
   standalone: true,
   imports: [ProductsComponent,ReactiveFormsModule, HttpClientModule ,CommonModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  data: any;

  getData(): any {
    this.http.get(this.apiUrl + '/posts/1').subscribe(
      (response : any) => {
        this.data = [response];
        console.log(this.data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  ngOnInit() {
    this.getData()
  }

  name = new FormControl('');

 public Submit() :any  {
    console.log("abc")
    console.log(this.name.value)
 }
}