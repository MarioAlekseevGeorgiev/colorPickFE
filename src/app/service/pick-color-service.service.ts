import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {PickColorRGB} from "../Interfaces/PickColorRGB";
import {Observable} from "rxjs";
import {PickColor} from "../Interfaces/PickColor";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PickColorServiceService {

  constructor(private httpClient: HttpClient) { }

  createPickColorRGB$(pickColorRGB: PickColorRGB): Observable<PickColor> {
    let params = new HttpParams().set("redComponent",   pickColorRGB.redComponent)
                                 .set("blueComponent",  pickColorRGB.blueComponent)
                                 .set("greenComponent", pickColorRGB.greenComponent);
    return this.httpClient.get<PickColor>(`${environment.apiBaseUrl}/pickColor/rgb`, {params});
  }
}
