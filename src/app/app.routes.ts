import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CancionComponent } from './pages/cancion/cancion.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent},
    { path: 'galeria', component: GaleriaComponent },
    { path: 'contacto', component: ContactoComponent},
    { path: 'cancion', component: CancionComponent},
    { path: '**', component: InicioComponent}
];
