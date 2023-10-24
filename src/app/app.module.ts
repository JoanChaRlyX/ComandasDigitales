import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PlatillosComponent } from './platillos/platillos.component';
import { FormComponent } from './platillos/form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PlatilloService } from './platillos/platillo.service';

const routes: Routes = [
  {path: '', component: PlatillosComponent},
  {path: 'platillos/form', component: FormComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    PlatillosComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PlatilloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
