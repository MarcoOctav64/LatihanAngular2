import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {

  private Datajudul : String="coba";
  private Dataisi;
  private Datatgl;
  constructor() { }

public getjudul()
{
return this.Datajudul;
}
public setjdl(jdl: string)
{
  this.Datajudul = jdl;
}

public getisi()
{
return this.Dataisi;
}
public setisi(isi: string)
{
  this.Dataisi = isi;
}

public gettgl()
{
return this.Datatgl;
}
public settgl(tgl: string)
{
  this.Datatgl = tgl;
}
}