/*
---
script: notification.js
version: 1.0
description: NotificationCenter is a notification proxy for communication between object instances without knowing about each other.
license: MIT-style
source: http://github.com/eneko/notification.js

authors:
- Eneko Alonso: (http://enekoalonso.com)

provides:
- NotificationCenter
- Notification
...
*/

var Notification = function(key, message, sender) {
	this.key = key || '*';
	this.message = message || {};
	this.sender = sender || null;
}

var NotificationCenter = {
	observers: {
		'*': []
	},

	addObserver: function(key, callback, observer) {
		var ob = { instance: observer, post: callback };
		if (this.observers[key]) {
			this.observers[key].push(ob);
		} else {
			this.observers[key] = [ob];
		}
		if (key !== '*') this.observers['*'].push(ob);
	},

	removeObserver: function(key, observer) {
		if (this.observers[key]) {
			for (var i = this.observers[key].length - 1; i >= 0; i--) {
				if (this.observers[key][i].instance == observer) {
					this.observers[key].splice(i, 1);
				}
			}
		}
	},

	postNotification: function(notification) {
		if (this.observers[notification.key]) {
			for (var i = 0, l = this.observers[notification.key].length; i < l; i++) {
				this.observers[notification.key][i].post(notification);
			}
		}
	}

};

