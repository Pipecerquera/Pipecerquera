import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LavaderoService } from '../services/lavadero.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
  imports: [CommonModule, IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class InicioSesionComponent {
  usuario = {
    correo: '',
    password: ''
  };

  constructor(private readonly lavaderoService: LavaderoService, private router: Router) {}

  iniciarSesion() {
    this.lavaderoService.login(this.usuario).subscribe({
      next: (response: any) => {
        response = JSON.parse(response);

        localStorage.setItem('userId', response.userId);
        localStorage.setItem('rol', response.rol);

        Swal.fire({
          title: 'Bienvenido',
          text: response.mensaje,
          icon: 'success',
          confirmButtonText: 'Continuar'
        }).then(() => {
          this.router.navigate(['/precio-servicio']);
        });
      },
      error: () => {
        Swal.fire({
          title: 'Error',
          text: 'Correo o contraseña incorrectos.',
          icon: 'error',
          confirmButtonText: 'Intentar de nuevo'
        });
      }
    });
  }

  abrirRecuperacion() {
    Swal.fire({
      title: 'Recuperar Contraseña',
      input: 'email',
      inputLabel: 'Ingresa tu correo electrónico',
      inputPlaceholder: 'correo@example.com',
      showCancelButton: true,
      confirmButtonText: 'Recuperar',
      preConfirm: (correo) => {
        if (!correo) {
          Swal.showValidationMessage('El correo es obligatorio');
          return false;
        }
        return correo;
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.lavaderoService.recuperarContrasena({ correo: result.value }).subscribe({
          next: (response: string) => {
            Swal.fire('Éxito', response, 'success');
          },
          error: (err) => {
            let mensajeError = 'No se pudo recuperar la contraseña. Inténtalo nuevamente.';
            if (err.status === 404) {
              mensajeError = 'El correo ingresado no está registrado.';
            } else if (err.status === 500) {
              mensajeError = 'Hubo un error en el servidor. Inténtalo más tarde.';
            }

            Swal.fire({
              title: 'Error',
              text: mensajeError,
              icon: 'error',
              confirmButtonText: 'Intentar de nuevo'
            });
          }
        });
      }
    });
  }
}
