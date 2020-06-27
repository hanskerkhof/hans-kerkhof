import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumeFileSize',
})
export class ResumeFileSizePipe implements PipeTransform {
  private units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

  transform(bytes: number = 0, precision: number = 2): string {
    /* istanbul ignore next */
    if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) {
      return bytes.toString();
    }

    let unit = 0;

    while (bytes >= 1024) {
      bytes /= 1024;
      unit++;
    }

    return bytes.toFixed(+precision) + ' ' + this.units[unit];
  }
}
