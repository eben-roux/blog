#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vitepress/dist

# if you are deploying to a custom domain
echo 'www.ebenroux.co.za' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/eben-roux/blog master:gh-pages

cd -