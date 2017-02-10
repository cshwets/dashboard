import {Injectable} from '@angular/core';  
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class LookupService{
    constructor(public httpSvc:Http){

    }

    getVehicleList():Observable<any>
    {
        return this.httpSvc.get("./app/services/vehicles.json")
        .map((response)=>response.json())
        .catch((error)=>Observable.throw(error.json))
        ;
    }
}