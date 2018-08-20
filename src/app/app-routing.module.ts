import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

export const routes: Routes = [
    { path: '', children: [
        { path: 'home', pathMatch: 'full', loadChildren: '../home/home.module#HomeModule' },
        {
            path: '**',
            redirectTo: 'home',
            pathMatch: 'full'
        }
      ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}