Template.configureLoginServiceDialogForEveonline.base_url = function () { return Meteor.absoluteUrl(); }

Template.configureLoginServiceDialogForEveonline.fields = function () {
  return [
    {property: 'clientId', label: 'Client ID'},
    {property: 'secret', label: 'Secret Key'}
  ];
};
