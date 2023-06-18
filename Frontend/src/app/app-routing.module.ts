import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoesListComponent } from './components/client-manag-area/to-does-list/to-does-list.component';
import { AddToDoComponent } from './components/client-manag-area/add-to-do/add-to-do.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';

const routes: Routes = [
    {path: "to-does", component: ToDoesListComponent},
    {path: "new", component: AddToDoComponent},
    {path: "", redirectTo: "to-does", pathMatch: "full"},
    {path: "*", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
