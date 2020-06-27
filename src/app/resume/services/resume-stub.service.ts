import { Injectable } from '@angular/core';
import { Resume } from '../models/resume';
import { Observable, of } from 'rxjs';
const resume: Resume = require('../../../../test/mocks/resume-mock.json');

@Injectable({
  providedIn: 'root',
})
export class ResumeStubService {
  constructor() {}

  public getResume(): Observable<any> {
    return of(resume);
  }
}
