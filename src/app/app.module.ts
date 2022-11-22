import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { SearchStringPipe } from './pipes/search-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchStringPipe,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    SearchStringPipe
  ],
  providers: [BsModalService, SearchStringPipe, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
