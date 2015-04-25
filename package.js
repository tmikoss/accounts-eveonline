Package.describe({
  name: 'tmikoss:accounts-eveonline',
  version: '0.1.0',
  summary: 'Authentication with EvE Online SSO',
  git: 'https://github.com/tmikoss/accounts-eveonline.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');

  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('oauth2', ['client', 'server']);
  api.use('http', ['client', 'server']);
  api.use('service-configuration', ['client', 'server']);
  api.use('random', 'client');
  api.use('templating', 'client');

  api.addFiles(['lib/eveonline_configure.html', 'lib/eveonline_configure.js'], 'client');
  api.addFiles('lib/eveonline_common.js', ['client', 'server']);
  api.addFiles('lib/eveonline_server.js', 'server');
  api.addFiles('lib/eveonline_client.js', 'client');
  api.addFiles('lib/eveonline_server_helpers.js', 'server');

  api.export('EveonlineHelpers', 'server');
});
