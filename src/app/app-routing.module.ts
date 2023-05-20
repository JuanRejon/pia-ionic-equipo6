import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutGuardGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home-logged',
    loadChildren: () => import('./home-logged/home-logged.module').then( m => m.HomeLoggedPageModule),canActivate:[AutGuardGuard]
  },
  {
    path: 'acc-logged',
    loadChildren: () => import('./acc-logged/acc-logged.module').then( m => m.AccLoggedPageModule),
    canActivate:[AutGuardGuard]
  },
  {
    path: 'catalog',
    loadChildren: () => import('./catalog/catalog.module').then( m => m.CatalogPageModule)
  },
  {
    path: 'catalog-logged',
    loadChildren: () => import('./catalog-logged/catalog-logged.module').then( m => m.CatalogLoggedPageModule),canActivate:[AutGuardGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
