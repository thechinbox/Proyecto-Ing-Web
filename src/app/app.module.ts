import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './componentes/home/home.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { CursoComponent } from './componentes/cursos/curso/curso.component';
import { MicursoComponent } from './componentes/cursos/miscursos/micurso/micurso.component';
import { ClaseComponent } from './componentes/cursos/miscursos/micurso/clase/clase.component';
import { CertificadosComponent } from './componentes/certificados/certificados.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CertificadoComponent } from './componentes/certificados/certificado/certificado.component';
import { OpcionLoginComponent } from './componentes/login/login_empresas_profesionales/opcion-login/opcion-login.component';
import { LoginEmpresasComponent } from './componentes/login/login_empresas_profesionales/login-empresas/login-empresas.component';
import { LoginProfesionalComponent } from './componentes/login/login_empresas_profesionales/login-profesional/login-profesional.component';
import { OfertasComponent } from './componentes/ofertaslaborales/ofertas.component';
import { OfertaComponent } from './componentes/ofertaslaborales/oferta/oferta.component';
import { HomeProComponent } from './componentes/home/home-pro/home-pro.component';
import { HeaderproComponent } from './componentes/header/headerpro/headerpro.component';
import { CursoproComponent } from './componentes/cursopro/cursopro.component';
import { ModuloComponent } from './componentes/cursopro/modulo/modulo.component';
import { MiscursosComponent } from './componentes/cursos/miscursos/miscursos/miscursos.component';
import { OfertasproComponent } from './componentes/ofertaspro/ofertaspro.component';
import { OfertalaboralComponent } from './componentes/ofertaspro/ofertalaboral/ofertalaboral.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistroComponent,
    LoginComponent,
    HomeComponent,
    CursosComponent,
    CursoComponent,
    MicursoComponent,
    ClaseComponent,
    CertificadosComponent,
    CertificadoComponent,
    OpcionLoginComponent,
    LoginProfesionalComponent,
    LoginEmpresasComponent,
    OfertasComponent,
    OfertaComponent,
    HomeProComponent,
    HeaderproComponent,
    CursoproComponent,
    ModuloComponent,
    MiscursosComponent,
    OfertasproComponent,
    OfertalaboralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
