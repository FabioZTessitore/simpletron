import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/accounts-layout/accounts-layout.js';
import '../../ui/layouts/home-layout/home-layout.js';
import '../../ui/pages/splash/splash.html';
import '../../ui/pages/signin/signin.js';
import '../../ui/pages/signup/signup.js';
import '../../ui/pages/not-found/not-found.html';
import '../../ui/pages/home/home.js';

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('AccountsLayout', { content: 'NotFound' });
  },
};

FlowRouter.route('/', {
  name: 'Splash',
  action() {
    BlazeLayout.render('AccountsLayout', { content: 'Splash' });
  },
});

FlowRouter.route('/Signin', {
  name: 'Signin',
  action() {
    BlazeLayout.render('AccountsLayout', { content: 'Signin' });
  },
});

FlowRouter.route('/Signup', {
  name: 'Signup',
  action() {
    BlazeLayout.render('AccountsLayout', { content: 'Signup' });
  },
});

FlowRouter.route('/home', {
  name: 'Home',
  action() {
    BlazeLayout.render('HomeLayout', { content: 'Home' });
  },
});
