import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { RoomType } from '../room-type.model';

@Component({
  selector: 'app-roomtype',
  templateUrl: './roomtype.component.html',
  styleUrls: ['./roomtype.component.css']
})
export class RoomtypeComponent implements OnInit {

  roomtypeGroup = new FormGroup({
    roomTypeId : new FormControl(),
    roomTypeName : new FormControl("",Validators.required),
    chargesPerDay : new FormControl("",Validators.required)
  });
  constructor(@Inject(RestService) private srvc) { }

  roomtypeList : RoomType[];
  
  ngOnInit(): void {
     this.loaddata();
  }
loaddata(){
  this.srvc.getRoomType().subscribe(
    (res)=>{
        this.roomtypeList=res as RoomType[];
    },
    (err)=>{
        window.alert(JSON.stringify(err));
    }
  );
}
 saveRoomType():void {
    console.log(this.roomtypeGroup.value);
    this.srvc.saveRoomType(this.roomtypeGroup.value).subscribe(
      (res)=>{
          alert('RoomType Successfully Added')
          this.loaddata();
          
          this.roomtypeGroup.reset();
      },
      (err)=>{
        alert(JSON.stringify(err));
      }
    );
  }
  searchRoomType():void {
    var rtId = this.roomtypeGroup.get('roomTypeId').value;
    this.srvc.searchRoomType(rtId).subscribe(
      (res)=>{
          this.roomtypeGroup.patchValue(res);
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
deleteRoomType():void {
    var rtId = this.roomtypeGroup.get('roomTypeId').value;
    this.srvc.deleteRoomType(rtId).subscribe(
      (res)=>{
          alert("RoomType deleted");
          this.loaddata();
          this.roomtypeGroup.reset();
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
updateRoomType():void {
    var rtId = this.roomtypeGroup.get('roomTypeId').value;
    this.srvc.updateRoomType(rtId, this.roomtypeGroup.value).subscribe(
      (res)=>{
          alert("RoomType updated");
          this.loaddata();
          this.roomtypeGroup.reset();
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
}