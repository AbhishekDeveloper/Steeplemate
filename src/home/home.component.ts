import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from './home.service';
import { SteepleMate } from './model';
import { SelectItem } from './model';

@Component({
    selector: 'sm-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.less']
 
})
export class HomeComponent{
public model: SteepleMate[];
selectedPeople: SteepleMate;

displayDialog: boolean;

sortOptions: SelectItem[];

sortKey: string;

sortField: string;

sortOrder: number;

constructor(private homeSvc: HomeService){}
 
 ngOnInit()
  {
      this.homeSvc.getData().subscribe(r=>{
          this.model= r;
          console.log(this.model);
        });

        //Start
        this.sortOptions = [
            {label: 'Newest First', value: '!year'},
            {label: 'Oldest First', value: 'year'}
        ];
    }

    selectCar(event: Event, people: SteepleMate) {
        this.selectedPeople = people;
        this.displayDialog = true;
        event.preventDefault();
    }

    onSortChange(event) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    onDialogHide() {
        this.selectedPeople = null;
    }
  
}