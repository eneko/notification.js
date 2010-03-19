
/* WORK IN PROGRESS */


var Notification = function(key, message, sender) {
	this.key = key || '*';
	this.message = message || {};
	this.sender = sender || null;
}

var NotificationCenter = {
	observers: {
		'*': []
	},

	addObserver: function(key, callback) {
		if (this.observers[key]) {
			this.observers[key].push(callback);
		} else {
			this.observers[key] = [callback];
		}
		if (key != '*') this.observers['*'].push(callback);
	},

	postNotification: function(notification) {
		if (this.observers[notification] || notification === '*') {
			this.observers[notification].each(function(observer) {
				observer(message);
		});
	}

};
