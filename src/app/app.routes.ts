import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosListaComponent } from './components/usuarios-lista/usuarios-lista.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent }, 
  {
    path: 'home',
    component: HomeComponent, 
    children: [
      { path: '', component: InicioComponent }, 
      { path: 'inicio', component: InicioComponent }, 
      { path: 'usuarios', component: UsuariosListaComponent }, 
    ],
  },
];
