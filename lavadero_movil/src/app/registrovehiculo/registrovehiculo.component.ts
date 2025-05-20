import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LavaderoService } from '../services/lavadero.service';
import { VehiculoService } from '../services/vehiculo.service';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MenuComponent } from '../components/menu/menu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-registrovehiculo',
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    NavbarComponent,
    MenuComponent,
    FooterComponent
  ],
  templateUrl: './registrovehiculo.component.html',
  styleUrls: ['./registrovehiculo.component.css']
})
export class RegistroVehiculoComponent {
  RegisVehiculo = {
    placa: '',
    tipo: '',
    color: '',
    marca: '',
    modelo: '',
    user: {
      id: localStorage.getItem('userId')
    }
  };

  constructor(
    private lavaderoService: LavaderoService,
    private router: Router,
    private VehiculoService: VehiculoService
  ) {}

  registrarVehiculo() {
    this.VehiculoService.registrarVehiculo(this.RegisVehiculo).subscribe({
      next: () => {
        Swal.fire('Éxito', 'Vehículo registrado correctamente', 'success');
        this.router.navigate(['/precio-servicio']);
      },
      error: (err) => {
        Swal.fire('Error', err.error || 'No se pudo registrar el vehículo', 'error');
      }
    });
  }
}
