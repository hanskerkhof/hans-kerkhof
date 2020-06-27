import { Injectable } from '@angular/core';
import { Resume } from '../models/resume';
const resume: Resume = require('../../../../mocks/resume-mock.json');

@Injectable({
  providedIn: 'root',
})
export class ResumeStubService {
  constructor() {}

  public get resume(): Resume {
    return resume;
  }
}
