import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'avatar-menu',
    templateUrl: './avatar-menu.component.html',
    styleUrls: ['./avatar-menu.less'],
})
export class AvatarMenuComponent {
    constructor (
        private router: Router,
     
    ) { }


    logout() {
        this.router.navigate(["/"]);
    }

}