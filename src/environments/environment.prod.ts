declare var require: any;

export const environment = {
  appVersion: require('../../package.json').version,
  resumeSchemaVersion: require('../../node_modules/resume-schema/package.json').version,
  production: true,
  defaultLanguage: 'nl',
};
