import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule] 
})
export class MenuComponent  implements OnInit {
userRole: any;
logout() {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit() {}

}
