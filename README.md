# finders-keepers

A question and answer message board build with Ember!

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd finders-keepers`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Planning

1. Configuration/dependencies
  * Bootstrap: located in package.json
  * All other other dependencies are installed by Ember and located in package.json

2. Specs
  * Spec 1: User can create and save a new question with content, an author, and a date
  * Spec 2: User can edit and delete questions
  * Spec 3: User can view all questions on the index/homepage route
  * Spec 4: Users can view individual questions on the question/id route
  * Spec 5: User can add answers to questions with an author and content
  * Spec 6: User can edit and delete questions

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for `index`
  * Template/html page for `about`
  * Template/html page for `contact`
  * Template/html page for `new-question`
  * Template/html page for `question`
  * Display all posts on index with `index-tile` component
  * Display individual post content with `question-detail` component
  * Display update post form with `update-question` component
  * Display comments with `answer-tile` component
  * Display new comment form with `new-answer` component
  * Display update post form with `update-question` component

4. UX/UI
  * Develop custom style with css/Bootstrap

5. Polish
  * Refactor and DRY up code where appropriate
  * Make README (more) awesome!

6. Future Additions:
  * Add tags/categories to questions
