if (typeof Eveonline === 'undefined') {
  Eveonline = {};
}

if (typeof EveonlineHelpers === 'undefined') {
  EveonlineHelpers = {};
}

Accounts.oauth.registerService('eveonline');

if (Meteor.isClient) {
  Meteor.loginWithEveonline = function(options, callback) {
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Eveonline.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.eveonline'],
    forOtherUsers: []
  });
}
