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
import { OpcionLoginComponent } from './login/login_empresas_profesionales/opcion-login/opcion-login.component';

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
