import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { SiteMenuComponent } from './components/site-menu/site-menu.component';
import { AvatarMenuComponent } from './components/avatar-menu/avatar-menu.component';
import { CheckboxModule, RadioButtonModule } from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
      
    ],
    declarations: [
        SiteHeaderComponent,
        SiteFooterComponent,
        SiteMenuComponent,
        AvatarMenuComponent
    ],
    exports: [
        SiteHeaderComponent,
        SiteFooterComponent,
        SiteMenuComponent,
        AvatarMenuComponent
    ],
    providers: [
      
    ]
})
export class SharedModule { }
