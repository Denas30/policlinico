import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./containers/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'intranet',
    loadChildren: () => import('./containers/intranet/intranet.module').then( m => m.IntranetPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./home/components/about-us/about-us.module').then( m => m.AboutUsModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
