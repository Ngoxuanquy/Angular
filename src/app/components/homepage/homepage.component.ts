import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  standalone: true,
  imports: [HomepageComponent, HeaderComponent, MatIconModule],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
