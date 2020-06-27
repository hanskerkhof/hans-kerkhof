#!/usr/bin/env bash

npm --no-git-tag-version version patch \
&& aws s3 cp src/assets/content/resume.json s3://hanskerkhof/api/resume.json --region eu-west-1 --acl public-read \
&& aws s3 cp src/assets/i18n/nl.json s3://hanskerkhof/api/i18n/nl.json --region eu-west-1 --acl public-read \
&& aws s3 cp src/assets/i18n/en.json s3://hanskerkhof/api/i18n/en.json --region eu-west-1 --acl public-read \
&& npm run prerender \
&& aws s3 sync dist/hanskerkhof/browser s3://hanskerkhof --region eu-west-1 --acl public-read \
&& aws s3 cp dist/hanskerkhof/browser/index.html s3://hanskerkhof/index.html --metadata Cache-Control=max-age=0 --cache-control no-cache --expires 0 --acl public-read
