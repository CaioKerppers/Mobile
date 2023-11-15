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
    path: 'characters',
    loadChildren: () => import('./view/characters/characters.module').then( m => m.CharactersPageModule)
  },
  {
    path: 'characters-details',
    loadChildren: () => import('./view/characters-details/characters-details.module').then( m => m.CharactersDetailsPageModule)
  },
  {
    path: 'stands',
    loadChildren: () => import('./view/stands/stands.module').then( m => m.StandsPageModule)
  },
  {
    path: 'stands-details',
    loadChildren: () => import('./view/stands-details/stands-details.module').then( m => m.StandsDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
