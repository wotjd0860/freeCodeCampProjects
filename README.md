# RandomQuotes from freeCodeCamp

## General Information
- Period : 2024-04-03 ~ 
- Member : Jaeseong Park

## Skills
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/Bootstrap5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">

## Learning content by date

### [2024-04-03]
- Created react app by using ``` npx create-react-app [project name]```.
- Connected to github repository
   
    ```git remote add origin [repository url]```

    ```git branch -M Developer```

    ```git branch --set-upstream-to=origin/Developer Developer```

- Installed bootstrap

    ```npm install react-bootstrap bootstrap```

    added ```import 'bootstrap/dist/css/bootstrap.css';``` to the index.js file

- Resolved git pull error (fatal: refusing to merge unrelated histories)

    ```$ git push [remote] [branch] --allow-unrelated-histories```

    ```$ git pull [remote] [branch] --allow-unrelated-histories```

- Deployed to github pages

    ```npm install gh-pages --save```

    added ```"homepage": "[github page url]",``` to the package.json file.

    added ```"predeploy": "npm run build", "deploy": "gh-pages -d build"``` to the "script" in the package.json file.

    ```npm run deploy```
