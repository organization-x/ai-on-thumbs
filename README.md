![Logo](/assets/stock/ai-on-thumbs-logo.png)
# AI on Thumbs
Explore AI concepts using just your thumbs!!

### Available in the App Store and Google Play Store

## Directory Structure
**Assets** - media, images, fonts, etc. organized by which lesson they are used for. 
* Stock is for media used across multiple lessons

Components - contains all the components that are used for advanced functionality (mutliple choice boxes, email prompt, magnifying glass, etc.)

Screens - screens of the app are organized into a folder for the corresponding lesson it is a part of (course_1, course_2, etc.)
* Screens are labeled with their corresponding number (1_intro.js, 2_review.js)

App.js
* Imports all the functions from their .js screen files (Course2Intro  --> './screens/course_2/1_intro')
* Chronologically orders screens (as per their number) in the body of App.js to run everything in order

## Protocols for Development
* Create a branch for the lesson that you/your team is working on (i.e. course_2)
* For each individual contributor, create your own branch to work on your screens, make revisions, work on anything
* Check your screens (QC) on at least two different devices to make sure it all looks good
* Lint the code with a linting tool before submission (yarn standard --fix)
* After revisions are made, create a PR (Pull Request) to merge your branch into the course branch (i.e. course_2)
* If revisions are necessary, make them and commit back to your individual branch and request a review
* All code should be reviewed by an EM
* EVEN IF IT IS A COMMA, MAKE THE PR

## Course 1: Facial Recognition Algorithm
Explore the beginning concepts of facial recognition with interactice tutorials and games! See how computers SEE images and recognize patterns.

### Authors

* Alexander Zhou
* Axel Mora
* Jackson Choyce
* Mitch Cutts
* Rohan Joshi


## Course 2: Facial Recognition Algorithm pt 2
Delve deeper into the world of facial recognition and its advanced ideas! 
### Authors
* Advay Aravind
* Alexander Zhou
* Alex Fry
* Mitch Cutts
* Rohan Joshi
* Sanjay Manoj
* Zac Brammer
