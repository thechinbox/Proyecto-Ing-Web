import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './componentes/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistroComponent,
    LoginComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectCountryModule.forRoot('es'),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
