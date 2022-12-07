# Configure
Extract api keys with `git secret reveal`

# Packages
1. Init NPM package manager: `npm init`
2. Install npm modules using `npm install`:
    * express
    * body-parser
    * request
3. Run using `nodemon server.js`

# Deploy to Heroku
1. Make an account at [heroku.com](heroku.com)
2. Copy this directory in another folder. 
3. Remove `.gitignore`
4. Create `Procfile` file with content:

```
web: node app.js
```

5. Execute:
```
git init
git add .
heroku create
git push heroku main
```
6. Go to the link that appears!