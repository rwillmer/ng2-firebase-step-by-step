exports.config = {

  framework: 'jasmine2',

  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',

  // location of E2E test specs
  specs: [
    '../e2e-tests/tests/**/*.spec.js'
  ],

  // Special option for Angular2, to test against all Angular2 applications
  // on the page. This means that Protractor will wait for every app to be
  // stable before each action, and search within all apps when finding
  // elements.
  useAllAngular2AppRoots: true,

  // allow for testing of non-Angular sites
  //
  // From http://ng-learn.org/2014/02/Protractor_Testing_With_Angular_And_Non_Angular_Sites/
  //
  onPrepare: function(){
    global.isAngularSite = function(flag){
      browser.ignoreSynchronization = !flag;
    };
  }
};
