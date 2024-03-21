import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Supervisor} from "../models/supervisor";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private baseURL: string = "http://localhost:8080/api"

  constructor( private http: HttpClient ) { }

  public getAllSupervisors(): Observable<Supervisor[]> {
    return this.http.get<Supervisor[]>(`${this.baseURL}/supervisors`);
  }

  public createNotification(notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(`${this.baseURL}/submit`, notification);
  }
}
