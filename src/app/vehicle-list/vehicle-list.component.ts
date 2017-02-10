import { Component, OnInit } from '@angular/core';
import {LookupService} from '../services/lookup.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  constructor(lookupSvc: LookupService) { 
    lookupSvc.getVehicleList()
      .subscribe(
        result => {
          this.vehicles = result.vehicles;
        },
        error =>{
          console.log(error);
        })
  }

  vehicles: Array<any>;
  showVehicle = "N";
  vehicleRec;

  //Column header;
  vehicleListHeaders = [ "Sr No", "Year", "Make", "Model" ];

  showDetails(data)
  {
    if (this.showVehicle=='N')
    {
      this.showVehicle='Y';
    }
    this.vehicleRec = data;
  }

  ngOnInit() {
  }



}
