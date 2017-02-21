import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { CPU } from '../cpu/cpu.js';
import { Memory } from '../memory/memory.js';

Meteor.methods({
  'users.signup': function (userAttributes) {
    const UserSchema = new SimpleSchema({
      username: { type: String },
      password: { type: String },
    });

    UserSchema.validate(userAttributes);

    const sameUsername = Meteor.users.findOne({ username: userAttributes.username });
    if (sameUsername) {
      throw new Meteor.Error('users.signup', 'username already exists');
    }

    const userId = Accounts.createUser(userAttributes);
    Meteor.call("cpu.create", userId);
    Meteor.call("memory.create", userId);

    return {
      _id: userId,
    };
  },
});
