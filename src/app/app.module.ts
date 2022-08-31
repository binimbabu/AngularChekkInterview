import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabularDataComponent } from './tabular-data/tabular-data.component';
import { MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from "@angular/material/sort";
import {  MatTableModule } from "@angular/material/table";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MyHighlightDirective } from './my-highlight.directive';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    TabularDataComponent,
    MyHighlightDirective,
    DirectiveExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule
  ],
  exports: [
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
