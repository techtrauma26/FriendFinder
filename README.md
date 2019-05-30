# FriendFinder

![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Build Status](https://img.shields.io/badge/npm%20package-4.2.0-brightgreen.svg)

![image](/app/public/images/logo.jpg)
>Dating app based on compatibility to find each user with their most suitable match.

## Table of contents

* [General info](#general-info)
* [Setup](#setup)
* [Examples](#examples)
* [Technologies](#technologies)

## General info

In this activity, you'll build a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

You will use Express to handle routing. Make sure you deploy your app to Heroku so other users can fill it out.

1. Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.



## Setup

Bamazon requires [Node.js](https://nodejs.org/) v4+ to run.

Install npm package manager and dependencies then input desired commands.

```sh
$ cd bamazon
$ npm install
$ node bamazonCustomer.js
```

## Examples

Products avaiable on Bamazon:

![Example screenshot](Images/products.gif)

Making a purchase on Bamazon:

![Example screenshot](Images/purchase.gif)

## Technologies

* [Node.js](https://nodejs.org/)- evented I/O for the backend
* [JavaScript](https://www.javascript.com/)
* [NPM](https://www.npmjs.com/) - Package manager
* [MySQL](https://www.mysql.com/)

---------------------------------------------------------------------------------------------------------------------------

# Friend Finder - Node and Express Servers

### Overview

In this activity, you'll build a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

You will use Express to handle routing. Make sure you deploy your app to Heroku so other users can fill it out.

1. Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.


6. Determine the user's most compatible friend using the following as a guide:

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
   * The closest match will be the user with the least amount of difference.

