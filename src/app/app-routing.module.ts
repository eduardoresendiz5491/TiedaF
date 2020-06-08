import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'pagina-principa',
    loadChildren: () => import('./pages/pagina-principa/pagina-principa.module').then( m => m.PaginaPrincipaPageModule)
  },
  {
    path: 'add-market',
    loadChildren: () => import('./pages/add-market/add-market.module').then( m => m.AddMarketPageModule)
  },
  {
    path: 'update-market',
    loadChildren: () => import('./pages/update-market/update-market.module').then( m => m.UpdateMarketPageModule)
  },
  {
    path: 'update-market-good',
    loadChildren: () => import('./pages/update-market-good/update-market-good.module').then( m => m.UpdateMarketGoodPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
