/*
---
script: notifications-mixin.js
version: 1.0
description: Notifications is a Mootools mixin for implementing NotificationCenter interaction in any Mootools class.
license: MIT-style
source: http://github.com/eneko/notification.js

authors:
- Eneko Alonso: (http://enekoalonso.com)

provides:
- Notifications

requires:
- core/1.2.4:Class
...
*/

var Notifications = {
	observeNotification: function(key, callback) {
		NotificationCenter.addObserver(key, callback, this);
	},
	unobserveNotification: function(key) {
		NotificationCenter.removeObserver(key, this);
	},
	postNotification: function(key, message) {
		NotificationCenter.postNotification(new Notification(key, message, this));
	}
}
