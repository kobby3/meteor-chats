import { Template } from 'meteor/templating';
import './body.html';
import './message.js';
import { Messages } from '../api/messages.js';
Template.body.helpers({
  messages() {
    return Messages.find();
  },
});
Template.body.events({
    'submit .new-message'(event) {
      // Prevent default browser form submit
      event.preventDefault();
      const target = event.target;
      const text = target.text.value;
      // Insert a message into the collection
      Messages.insert({
        text,
        createdAt: new Date(), // current time
       owner: Meteor.userId(), username:Meteor.user().username,
      });
      target.text.value = '';
      // scroll to last message
      $('.panel-body').scrollTop($('.media-list').height())
     },
  });