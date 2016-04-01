import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
  anonymize() {
    const users = Meteor.users.find().fetch();
    let counter = 1;
    _.each(users, (user) => {
      const emails = user.emails;
      _.each(emails, (email) => {
        email.address = `user${counter++}@example.com`;
      });
      Meteor.users.update(user._id, {
        $set: {
          emails: emails,
        },
      });
      Accounts.setPassword(user._id, 'password');
    });
    return `${counter} users updated.`;
  },
});

Meteor.publish(null, () => {
  return Meteor.users.find();
});
