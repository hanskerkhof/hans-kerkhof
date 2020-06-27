import { Injectable } from '@angular/core';
import { Resume } from '../models/resume';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  public url: string;

  constructor(private http: HttpClient) {
    if (environment.api.mode === 'local') {
      this.url = `${environment.api.url}/content/resume.json`;
    } else {
      this.url = `${environment.api.url}/resume.json`;
    }
  }

  public getResume(): Observable<any> {
    return this.http.get(this.url);
  }

  /* istanbul ignore next */
  // get resume(): Resume {
  //   return {};
  // }
}
