import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { ToDoesListComponent } from './components/client-manag-area/to-does-list/to-does-list.component';
import { AddToDoComponent } from './components/client-manag-area/add-to-do/add-to-do.component';

@NgModule({
  declarations: [  
    LayoutComponent,
    MenuComponent, 
    PageNotFoundComponent,
    ToDoesListComponent, 
    AddToDoComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
