import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'app-create',
    templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class createComponent{

    hiddenValue:boolean=false;

    source:string="/assets/online.jpg";
    searchValue:string="Moble";

    changeSearchValue(eventdata:Event){
        this.searchValue=((<HTMLInputElement>eventdata.target).value);

    }

    closeButton(){
        this.hiddenValue=true;
    }
}