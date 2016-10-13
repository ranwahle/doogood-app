import { Component } from '@angular/core';
import {RightToLeft} from "./translation/translation";
import {Store} from "./app.store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Do-Good';


  constructor(private _store:Store){}

  get IsLangRtl():boolean{
    return RightToLeft.indexOf(this._store.state.language) >= 0;
  }

}
