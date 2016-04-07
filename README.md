# accounts-eveonline

Meteor.js authentication with EvE Online SSO

## Usage

Add to application and follow the graphical configuration guidelines - same as `accounts-twitter` or `accounts-facebook`.

## Access scopes

By default, `accounts-eveonline` requests the `publicData` scope. Can be configured via method options: `Meteor.loginWithEveonline({ scope: 'publicData' })`.

## User data

The following information will be added to `Meteor.users` records:

```
{
  services: {
    eveonline: {
      id: '...', // EvE Online account ID
      accessToken: '...', // Access token for use in CREST API calls
      refreshToken: '...', // Refresh token for updating access token
      expiresAt: ... // Timestamp when access token will expire
    }
  }  
  profile: {
    eveOnlineCharacterId: ..., // ID of the character that was selected in login process
    eveOnlineCharacterName: '...' // Name of the character that was selected in login process
  }
}
```

## Helper functions

`accounts-eveonline` exposes `EveonlineHelpers` object with following helper functions:

### refreshAuthToken(user)

Calling `EveonlineHelpers.refreshAuthToken(meteorUserRecord)` will attempt to obtain new auth token from SSO server by using the refresh token.

Available only server-side. If successful, data gets updated in `Meteor.users` collection.
