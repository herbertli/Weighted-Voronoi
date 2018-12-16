# Weighted Voronoi
This project contains Botty McBotFace's final artifact for
Heuristic Problem Solving Fall 2018 at NYU

## Technologies Used:
- Typescript
- React
- Material-UI
- create-react-app

## Deploying:
- To course site:
    - Make sure the `homepage` attribute insides `package.json` is set correctly, for example, it should be [https://cims.nyu.edu/drecco2016/games/weight_voronoi](https://cims.nyu.edu/drecco2016/games/weight_voronoi) or something similar
    - If you have rsync:
        - run `npm buildcourse` or `yarn buildcourse` and you should be set, the directory `weighted_voronoi` should be created and this directory can be directly placed inside the `games/` directory
    - The manual way:
        - run `npm build` or `yarn build`
        - Drag contents of build/ folder (only the contents, not the folder itself) into weighted/voronoi
        - Change index.html to iframe.html
    - Note that using this method of deployment, you will need to embed this game as an `<iframe>` on your webpage.
- To gh-pages:
    - Make sure the `homepage` attribute insides `package.json` is set correctly
    - Download the `gh-pages` package and follow the instructions there

## Create React App Config:
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
