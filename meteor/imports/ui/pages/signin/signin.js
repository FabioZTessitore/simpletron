import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Materialize } from 'meteor/materialize:materialize';

import './signin.html';

Template.Signin.events({
  'submit form': function (e, instance) {
    e.preventDefault();

    const userAttributes = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    Meteor.loginWithPassword(userAttributes.username, userAttributes.password, function (err) {
      if (err) {
        Materialize.toast(err.reason, 3000);
        return;
      }

      FlowRouter.go('Home');
    });
  },
});
