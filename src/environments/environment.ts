// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

declare var require: any;

export const environment = {
  appVersion: require('../../package.json').version,
  resumeSchemaVersion: require('../../node_modules/resume-schema/package.json').version,
  production: false,
  defaultLanguage: 'nl',
  api: {
    url: 'assets',
    mode: 'local'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
