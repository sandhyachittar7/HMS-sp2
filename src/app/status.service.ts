import { Injectable } from '@angular/core';

 

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  logged =false;
  userrole ='';
  username = '';
  
  constructor() { }
}