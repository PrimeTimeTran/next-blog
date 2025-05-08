---
draft: false
date: '2022-08-20'
title: 'System Design: Deploy Flutter Web App to production using Netlify'
summary: "Multi platform frameworks like Flutter means we can build web versions of our app simultaneously with mobile. Use Netlify to reach users on the web at the same time as iOS & Android by adding a few configurations and leveraging it's CI/CD pipeline to have web builds in no time."
tags: ['system design', 'ci/cd', 'flutter']
---

# Introduction

<img src="/static/gifs/deploy-flutter-netlify.gif" alt="preview" />

[Github Repo](https://github.com/PrimeTimeTran/system_design_deploy_flutter_netlify)

1. Create new Flutter Project:
   1. `flutter create system_design_deploy_flutter_netlify`
   2. `cd system_design_deploy_flutter_netlify`
   3. `git init`
   4. `git add .`
   5. `git commit -m "Initial commit"`
2. Create new remote Github Repo & Push code:
   1. https://github.com/new
   2. Create repo named `system_design_deploy_flutter_netlify`
   3. `git remote add origin git@github.com:PrimeTimeTran/system_design_deploy_flutter_netlify.git`
   4. `git branch -M main`
   5. `git push -u origin main`
3. Create new Netlify App:
   1. https://app.netlify.com
   2. Add New Site > Choose Existing Project > Github > `system_design_deploy_flutter_netlify`
   3. **Build Settings**:
      1. Build Command: `if cd flutter; then git pull && cd ..; else git clone https://github.com/flutter/flutter.git; fi && flutter/bin/flutter config --enable-web && flutter/bin/flutter build web --release`
      2. Publish Directory: `build/web`
   4. Deploy Site.
4. Watch logs looking for build success:
   1. If everything went smoothly you should eventually see a "Published" keyword in the site's overview page under "Production Deploys"
   2. <img src="/static/images/deploy-flutter-netlify.png" alt="preview" />

# Conclusion

Deploying Flutter to Netlify can be trickier than other frameworks due to Netlify not having Flutter installed on each of their server instances.

We can get around this issue by checking for flutter's installation in our **build command**.

```sh
if cd flutter; then git pull && cd ..; else git clone https://github.com/flutter/flutter.git; fi && flutter/bin/flutter config --enable-web && flutter/bin/flutter build web --release
```

If the **host system**, the machine about to run the build command, doesn't have Flutter installed then install it before creating a web build of the Flutter app.
