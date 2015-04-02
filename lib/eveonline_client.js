Eveonline.requestCredential = function (options, credentialRequestCompleteCallback) {
  if (!credentialRequestCompleteCallback && typeof options === 'function') {
    credentialRequestCompleteCallback = options;
    options = {};
  }

  var config = ServiceConfiguration.configurations.findOne({service: 'eveonline'});

  if (!config) {
    credentialRequestCompleteCallback && credentialRequestCompleteCallback(new ServiceConfiguration.ConfigError("Service not configured"));
    return;
  }

  var credentialToken = encodeURIComponent(Random.id());
  var loginStyle = OAuth._loginStyle('eveonline', config, options);
  var scope = 'publicData';

  var loginUrl = "https://login.eveonline.com/oauth/authorize" +
    '?response_type=code' +
		'&client_id=' + config.clientId +
    '&redirect_uri=' + encodeURIComponent(Meteor.absoluteUrl("_oauth/eveonline?close")) +
    '&scope=' + scope +
		'&state=' + OAuth._stateParam(loginStyle, credentialToken);

  OAuth.initiateLogin(credentialToken, loginUrl, credentialRequestCompleteCallback);
};
