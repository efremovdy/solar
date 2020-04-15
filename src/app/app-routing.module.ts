import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { ModalComponent } from './components/modal/modal.component';

const appRoutes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'user/:id', component: ModalComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
