import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppPanelComponent } from './component/app-panel/app-panel.component';
import { HeroServiceService } from './services/hero-service.service';
import {MatCardModule} from '@angular/material/';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { DetailUserComponent } from './component/detail-user/detail-user.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    AppPanelComponent,
    DetailUserComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [{provide: HeroServiceService, useValue: 'http://localhost:4200/', useClass: HeroServiceService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
