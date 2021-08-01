import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { UsersListComponent } from './component/users-list/users-list.component';


const routes: Routes = [{
  path: '',
  component: UsersListComponent
}, {
  path: 'user/:id',
  component: UserComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
