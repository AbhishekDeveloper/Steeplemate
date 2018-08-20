import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

export const routes: Routes = [
    { path: '', children: [
        { path: '', pathMatch: 'full', loadChildren: '../home/home.module#HomeModule' },
        {
            path: '**',
            redirectTo: '',
            pathMatch: 'full'
        }
      ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}