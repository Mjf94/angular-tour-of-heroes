

# Angular Tutorial: Tour of Heroes with Ahead-Of-Time and Universal support

This repo follows this [offcail instruction](https://angular.io/docs/ts/latest/guide/universal.html#!#serve-aot) on angular.io. It adds support of Ahead-Of-Time and Universal to improve the speed. 

Forked from [johnpapa's repo](https://github.com/johnpapa/angular-tour-of-heroes.git) as I do not want to redo the tour-of-heroes tutorial.

# Getting Started
## Get the Code
```
git clone https://github.com/Mjf94/angular-tour-of-heroes.git toh
cd toh
npm i # or: yarn install
```

### Just in Time (JiT) Compilation

Runs the TypeScript compiler and launches the app

```
npm start
```

### Ahead of Time (AoT) Compilation 

Runs the Angular AoT compiler, rollup, uglify for an optimized bundle, then launches the app

```
npm run build:aot 
# when finish, run
npm run serve:aot
```

### Angular Universal  

Runs in Angular Universal mode

```
npm run build:uni 
# when finish, run
npm run serve:uni
```



