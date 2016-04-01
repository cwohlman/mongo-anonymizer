import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.anonymize.onCreated(function() {
  const instance = this;

  instance.result = new ReactiveVar();
});

Template.anonymize.helpers({
  message: function () {
    const result = Template.instance().result.get();

    return result && result + '';
  }
});

Template.anonymize.events({
  'click [data-action="anonymize"]'(event, instance) {
    Meteor.call('anonymize', (error, result) => {
      instance.result.set(error || result);
    });
  },
});

Template.users.helpers({
  users: function () {
    return Meteor.users.find();
  }
});
