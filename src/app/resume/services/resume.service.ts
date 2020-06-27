import { Injectable } from '@angular/core';
import { Resume } from '../models/resume';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://hanskerkhof.nl/api/resume.json';
  }

  public getResume(): Observable<any> {
    return this.http.get(this.url);
  }

  /* istanbul ignore next */
  // get resume(): Resume {
  //   return {};
  // }
}
