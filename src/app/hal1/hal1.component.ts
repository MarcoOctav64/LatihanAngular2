import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-hal1',
  templateUrl: './hal1.component.html',
  styleUrls: ['./hal1.component.css']
})
export class Hal1Component implements OnInit {

  constructor(private route: ActivatedRoute,public globalvar: GlobalvarService) { }
  paramjudul;
  paramisi ;
  paramtgl;
  ngOnInit() {
   
    this.paramjudul=this.globalvar.getjudul();
    this.paramisi=this.globalvar.getisi();
    this.paramtgl=this.globalvar.gettgl();

    // let isiisi = this.route.snapshot.paramMap.get("isi");
    // this.paramisi = isiisi;

    // let isitgl = this.route.snapshot.paramMap.get("tgl");
    // this.paramtgl = isitgl;
  }

}