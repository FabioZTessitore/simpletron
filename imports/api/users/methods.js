import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Memory } from '../memory/memory.js';

//import { CPU } from '../../ui/partials/cpu/client/cpu.js';

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
    //Meteor.call("cpu.create", userId);
    //CPU.cpuCreate(userId);
    Meteor.call("memory.create", userId);

    return {
      _id: userId,
    };
  },
});
