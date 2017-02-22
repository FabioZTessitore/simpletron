/*import { Meteor } from 'meteor/meteor';

import { CPU } from './cpu.js';

Meteor.methods({
  "cpu.create": function (userId) {
    const cpuAttributes = {
      userId,
    };

    let cpuId = CPU.findOne({ userId: Meteor.userId() });

    if (cpuId) {
      CPU.update(cpuId, { $set: cpuAttributes });
    } else {
      cpuId = CPU.insert(cpuAttributes, function (err, result) {
        if (err) {
          throw new Meteor.Error(err.reason);
        }
      });
    }

    return {
      _id: cpuId,
    };
  },
})
*/
