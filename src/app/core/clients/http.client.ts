import { Injectable } from "@angular/core";
import { HttpService } from "../services/http.service";
import { EndPoint } from "../models/endpoint";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ClientParameter } from "../models/client.parameter";
import { map, Observable } from "rxjs";

@Injectable()
export abstract class HttpClientGeneric<T> {

  urlResource!: string
  endPoint!: EndPoint

  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
    ){
    this.urlResource = this.httpService.buildResourceUrl(this.endPoint)
  }

  post(parameter: ClientParameter): Observable<T> {
    let url = this.urlResource + parameter.path
    let headers: HttpHeaders = this.httpService.getHeaders(parameter.aplicationType)
    let options = {headers: headers}
    return this.httpClient.post<T>(url, parameter.body, options).pipe(
      map(response => this.httpService.responseMap(response, parameter.map))
    )
  }
}
