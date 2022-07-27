import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { Room } from '../room.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.styl']
})
export class RoomComponent implements OnInit {

  roomGroup = new FormGroup({
    roomId : new FormControl(),
    roomTypeId : new FormControl("",Validators.required),
    roomStatus : new FormControl("",Validators.required)
  });
  constructor(@Inject(RestService) private srvc) { }
 roomList : Room[];
 roomtypeList;
  ngOnInit(): void {
    this.loaddata();
  }
  loaddata(){
    this.srvc.getRoomType().subscribe(
      (res)=>{
        this.roomtypeList=res;
      },
      (err)=>{
        alert(JSON.stringify(err));
      }
    );

    this.srvc.getRoom().subscribe(
      (res)=>{
          this.roomList=res as Room[];
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
  saveRoom():void {
    console.log(this.roomGroup.value);
    this.srvc.saveRoom(this.roomGroup.value).subscribe(
      (res)=>{
          alert('RoomType Successfully Added')
          this.loaddata();
          
          this.roomGroup.reset();
      },
      (err)=>{
        alert(JSON.stringify(err));
      }
    );
  }

  searchRoom():void {
    var rmId = this.roomGroup.get('roomId').value;
    this.srvc.searchRoom(rmId).subscribe(
      (res)=>{
          this.roomGroup.patchValue(res);
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
deleteRoom():void {
    var rmId = this.roomGroup.get('roomId').value;
    this.srvc.deleteRoom(rmId).subscribe(
      (res)=>{
          alert("Room deleted");
          this.loaddata();
          this.roomGroup.reset();
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
updateRoom():void {
    var rmId = this.roomGroup.get('roomId').value;
    this.srvc.updateRoom(rmId, this.roomGroup.value).subscribe(
      (res)=>{
          alert("Room updated");
          this.loaddata();
          this.roomGroup.reset();
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }

}
