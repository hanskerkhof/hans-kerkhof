import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'resumeSafeUrl',
})
export class ResumeSafeUrlPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string, ...args: unknown[]): unknown {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
