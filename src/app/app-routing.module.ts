import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificadosComponent } from './componentes/certificados/certificados.component';
import { CursoComponent } from './componentes/cursos/curso/curso.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { ClaseComponent } from './componentes/cursos/miscursos/micurso/clase/clase.component';
import { MicursoComponent } from './componentes/cursos/miscursos/micurso/micurso.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { OpcionLoginComponent } from './componentes/login/login_empresas_profesionales/opcion-login/opcion-login.component';
import { LoginEmpresasComponent } from './componentes/login/login_empresas_profesionales/login-empresas/login-empresas.component';
import { LoginProfesionalComponent } from './componentes/login/login_empresas_profesionales/login-profesional/login-profesional.component' ; 
import { OfertasComponent } from './componentes/ofertaslaborales/ofertas.component';
import { OfertaComponent } from './componentes/ofertaslaborales/oferta/oferta.component';
import { HomeProComponent } from './componentes/home/home-pro/home-pro.component';
import { CursoproComponent } from './componentes/cursopro/cursopro.component';
import { MiscursosComponent } from './componentes/cursos/miscursos/miscursos/miscursos.component';
import { OfertasproComponent } from './componentes/ofertaspro/ofertaspro.component';
import { OfertalaboralComponent } from './componentes/ofertaspro/ofertalaboral/ofertalaboral.component';

const routes: Routes = [
  {path:'', component:LoginComponent, pathMatch:"full"},
  {path:'opcion-login', component:OpcionLoginComponent},
  {path:'login-empresas', component:LoginEmpresasComponent},
  {path:'login-profesional', component:LoginProfesionalComponent},
  {path:'registro', component:RegistroComponent},
  {path:'registro', component:RegistroComponent},
  {path:'home', component:HomeComponent},
  {path:'cursos', component:CursosComponent},
  {path:'curso', component:CursoComponent},
  {path:'micurso/:id', component:MicursoComponent},
  {path:'miscursos', component:MiscursosComponent},
  {path:'certificados', component:CertificadosComponent},
  {path:'ofertas', component:OfertasComponent},
  {path: 'ofertas/oferta',  component: OfertaComponent},
  {path:'profesional', component:HomeProComponent},
  {path:'profesional/crearcurso', component:CursoproComponent},
  {path:'profesional/ofertas', component:OfertasproComponent},
  {path:'profesional/ofertas/ofertalaboral', component:OfertalaboralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
