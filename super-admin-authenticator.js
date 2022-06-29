/*
 * Template for JavaScript based authenticator's.
 * See org.keycloak.authentication.authenticators.browser.ScriptBasedAuthenticatorFactory
 */

// import enum for error lookup
FormMessage = Java.type('org.keycloak.models.utils.FormMessage');
Validation = Java.type('org.keycloak.services.validation.Validation');
Messages = Java.type('org.keycloak.services.messages.Messages');

/**
 * An example authenticate function.
 *
 * The following variables are available for convenience:
 * user - current user {@see org.keycloak.models.UserModel}
 * realm - current realm {@see org.keycloak.models.RealmModel}
 * session - current KeycloakSession {@see org.keycloak.models.KeycloakSession}
 * httpRequest - current HttpRequest {@see org.jboss.resteasy.spi.HttpRequest}
 * script - current script {@see org.keycloak.models.ScriptModel}
 * authenticationSession - current authentication session {@see org.keycloak.sessions.AuthenticationSessionModel}
 * LOG - current logger {@see org.jboss.logging.Logger}
 *
 * You one can extract current http request headers via:
 * httpRequest.getHttpHeaders().getHeaderString("Forwarded")
 *
 * @param context {@see org.keycloak.authentication.AuthenticationFlowContext}
 */
function authenticate(context) {
    var roleModel = realm.getRole("SuperAdmin");
    if (roleModel === null || !user.hasRole(roleModel)) {
        context.clearUser();
        context.forkWithErrorMessage(new FormMessage(Validation.FIELD_USERNAME, Messages.INVALID_USERNAME_OR_EMAIL));
    } else {
        context.success();
    }
}