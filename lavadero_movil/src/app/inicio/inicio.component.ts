import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../components/menu/menu.component";
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  imports: [IonicModule, FooterComponent, HeaderComponent, CommonModule],
})
export class InicioComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  // En el archivo .ts correspondiente (por ejemplo, home.page.ts)

servicios = [
  { nombre: 'Lavado Express', img: 'assets/Imagen1.png' },
  { nombre: 'Lavado Completo', img: 'assets/Imagen2.png' },
  { nombre: 'Lavado a vapor', img: 'assets/Imagen3.png' },
  { nombre: 'Lavado de motor', img: 'assets/Imagen4.png' },
  { nombre: 'Lavado interno', img: 'assets/Imagen5.png' },
];


}
