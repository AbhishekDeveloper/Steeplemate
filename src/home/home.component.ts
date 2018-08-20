import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from './home.service';
import { SteepleMate } from './model';

@Component({
    selector: 'sm-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.less']
 
})
export class HomeComponent{
public model: SteepleMate[];

constructor(private homeSvc: HomeService){}
 
 ngOnInit()
   {
      this.homeSvc.getData().subscribe(r=>{
          this.model= r;
        });
    }
}