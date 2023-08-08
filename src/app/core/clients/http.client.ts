import { Injectable, Injector } from "@angular/core";
import { HttpService } from "../services/http.service";
import { EndPoint } from "../models/endpoint";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ClientParameter } from "../models/client.parameter";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class HttpClientGeneric<T> {

  protected httpService: HttpService
  protected httpClient: HttpClient

  urlResource!: string
  endPoint!: EndPoint

  constructor(private injector: Injector){
    this.httpClient = this.injector.get(HttpClient)
    this.httpService = this.injector.get(HttpService)
    this.urlResource = this.httpService.buildResourceUrl(this.endPoint)
  }

  protected post(parameter: ClientParameter): Observable<T> {
    const [url, options] = this.getRequestDataByParameter(parameter)
    return this.httpClient.post<T>(url, [parameter.body], options).pipe(
      map(response => this.httpService.responseMap(response, parameter.map))
    )
  }

  protected put(parameter: ClientParameter): Observable<T> {
    const [url, options] = this.getRequestDataByParameter(parameter)
    return this.httpClient.put<T>(url, [parameter.body], options).pipe(
      map(response => this.httpService.responseMap(response, parameter.map))
    )
  }

  protected get(parameter: ClientParameter): Observable<T> {
    const [url, options] = this.getRequestDataByParameter(parameter)
    return this.httpClient.get(url, options).pipe(
      map(response => this.httpService.responseMap(response, parameter.map))
    )
  }

  protected getList(parameter: ClientParameter): Observable<T[]> {
    const [url, options] = this.getRequestDataByParameter(parameter)
    return this.httpClient.get(url, options).pipe(
      map(response => this.httpService.responseMap(response, parameter.map))
    )
  }

  private getRequestDataByParameter(parameter: ClientParameter): [string, any] {
    let url = this.buildUrlWithPath(parameter.path)
    if(parameter.parameters) url += parameter.parameters
    let headers: HttpHeaders = this.httpService.getHeaders(parameter.aplicationType)
    return [
      url, {headers: headers}
    ]
  }

  private buildUrlWithPath(path: string): string {
    return this.urlResource + path
  }
}
