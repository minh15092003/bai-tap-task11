var today = new Date();

var year = today.getFullYear();

var est = new Date ('Apr 16, 1996 15:45:55');

var difference = today.getFullYear() - est.getTime();

difference = (difference / 3129999999);

var elMsg = document.getElementById('message');

elMsg.textContent = Math.floor(difference) + 'years of online travel advice';
