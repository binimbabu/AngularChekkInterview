import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('sideMenuAnime', [
      state('close', style({width:'0px'})),
      state('open', style({width:'200px'})),
      transition('open => close', animate('400ms ease-in')),
      transition('close => open', animate('400ms ease-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  openClose:string='open';
  hideAndShow(){
   this.openClose = (this.openClose === 'open') ? 'close' : 'open';
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigate(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
