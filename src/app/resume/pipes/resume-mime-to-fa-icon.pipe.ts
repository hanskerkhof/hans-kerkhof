import { Pipe, PipeTransform } from '@angular/core';
import { mimeTypeToIconMap } from '../models/mime-type-to-icon-map';

@Pipe({
  name: 'resumeMimeToFaIcon',
})
export class ResumeMimeToFaIconPipe implements PipeTransform {
  transform(mime: string, ...args: unknown[]): unknown {
    return mimeTypeToIconMap[mime];
    return null;
  }
}
