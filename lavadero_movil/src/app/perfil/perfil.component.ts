import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import  { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { MenuComponent } from "../components/menu/menu.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  imports: [CommonModule, IonicModule, RouterLink, MenuComponent, NavbarComponent, FooterComponent],
})
export class PerfilComponent implements OnInit {
  usuario: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const data = localStorage.getItem('usuarioActual');
    if (data) {
      this.usuario = JSON.parse(data);
    }
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioActual');
    this.router.navigate(['/inicio-sesion']);
  }
}
