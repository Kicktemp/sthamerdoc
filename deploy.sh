#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain

echo 'sthamerdoc.kicktemp.com' > CNAME

git add -A
git commit -m 'deploy'

git push -f git@github.com:Kicktemp/sthamerdoc.git master:gh-pages

cd -
