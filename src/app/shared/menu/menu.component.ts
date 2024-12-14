import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menu = false;

  toggle(){
    this.menu = !this.menu
    console.log("click: "+this.menu)
  }

}
