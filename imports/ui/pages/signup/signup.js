import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Materialize } from 'meteor/materialize:materialize';

import './signup.html';

Template.Signup.onCreated(function () {
  this.errorSignup = new ReactiveDict();
});

Template.Signup.helpers({
  errorMessage: function (field) {
    const instance = Template.instance();
    return instance.errorSignup.get(field);
  },
});

Template.Signup.events({
  'submit form': function (e, instance) {
    e.preventDefault();

    const userAttributes = {
      username: e.target.username.value,
      password1: e.target.password1.value,
      password2: e.target.password2.value,
    };

    // validate userAttributes
    instance.errorSignup.set('username', '');
    instance.errorSignup.set('password1', '');
    instance.errorSignup.set('password2', '');
    instance.errorSignup.set('passwordMatch', '');

    if (!userAttributes.username)
      instance.errorSignup.set('username', 'Username obbligatorio');
    if (userAttributes.username && userAttributes.username.length < 3)
      instance.errorSignup.set('username', 'Username deve contenere almeno tre caratteri');
    if (!userAttributes.password1)
      instance.errorSignup.set('password1', 'Password obbligatoria');
    if (!userAttributes.password2)
      instance.errorSignup.set('password2', 'Ripetizione Password obbligatoria');
    if (userAttributes.password1 !== userAttributes.password2)
      instance.errorSignup.set('passwordMatch', 'Le password non coincidono');

    if (instance.errorSignup.get('username') ||
        instance.errorSignup.get('password1') ||
        instance.errorSignup.get('password2') ||
        instance.errorSignup.get('passwordMatch')) {
      return;
    }

    Meteor.call('users.signup', {
      username: userAttributes.username,
      password: userAttributes.password1,
    }, function (err, result) {
      if (err) {
        Materialize.toast(err.reason, 3000);
        return;
      }

      Meteor.loginWithPassword(userAttributes.username, userAttributes.password1);
      FlowRouter.go('Home');
    });
  },
});
