import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  avatar: string = 'assets/images/jc.jpg';
  displayName: string = 'JC Frane';
  position: string = 'Angular Enthusiast';
  details: Object[] = [
    { key: 'Followers', value: '1,322'},
    { key: 'Following', value: '100'},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
