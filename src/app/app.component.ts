import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalvarService } from './globalvar.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private router : Router,public globalvar :GlobalvarService
    
    ){}

  name = 'Angular ' + VERSION.major;
  textjudul=""
  textisi=""
  texttg=""

namaglobal;
  Input()
  {
    this.globalvar.setjdl(this.textjudul);
    

    this.globalvar.setisi(this.textisi);
    

    this.globalvar.settgl(this.texttg);
    


    this.router.navigate(["/hal1/" + this.textjudul]);
  }
}
