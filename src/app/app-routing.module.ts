import { NgModule } from '@angular/core';
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

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'opcion-login', component:OpcionLoginComponent},
  {path:'login-empresas', component:LoginEmpresasComponent},
  {path:'login-profesional', component:LoginProfesionalComponent},
  {path:'registro', component:RegistroComponent},
  {path:'registro', component:RegistroComponent},
  {path:'home', component:HomeComponent},
  {path:'cursos', component:CursosComponent},
  {path:'curso', component:CursoComponent},
  {path:'micurso/:id', component:MicursoComponent},
  {path:'certificados', component:CertificadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
