import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './core/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminUserGuard } from './core/admin-user.guard';
import { AdminGuard } from './core/admin.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConnectionGuard } from './core/connection.guard';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard, ConnectionGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AdminUserGuard, ConnectionGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
