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

const routes: Routes = [
  {path:'', component:LoginComponent},
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
