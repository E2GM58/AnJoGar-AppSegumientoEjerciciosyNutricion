import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import{EjercicioComponent} from './components/ejercicio/ejercicio.component';
import{IngresarEjercicioComponent} from './components/ingresar-ejercicio/ingresar-ejercicio.component';
import{IngresarEjercicioFuerzaComponent} from './components/ingresar-ejercicio-fuerza/ingresar-ejercicio-fuerza.component';


export const routes: Routes = [
    {path:'', redirectTo: 'PaginaPrincipal', pathMatch: 'full'},
    { path: 'PaginaPrincipal', component: PrincipalComponent },
    { path: 'Ejercicio', component: EjercicioComponent },
    { path: 'IngresarE', component: IngresarEjercicioComponent },
    { path: 'IngresarEF', component: IngresarEjercicioFuerzaComponent }
];
