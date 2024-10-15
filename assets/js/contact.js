/**	CONTACT FORM
*************************************************** **/
var _hash = window.location.hash;

/**
	BROWSER HASH - from php/contact.php redirect!

	#alert_success 		= email sent
	#alert_failed		= email not sent - internal server error (404 error or SMTP problem)
	#alert_mandatory	= email not sent - required fields empty
**/	jQuery(_hash).show();

const data = {username: 'example'};
fetch('http://99.79.77.144:3000/api/contact', {
	method: 'POST',
	headers: {
	  'Content-Type': 'application/json',
	},
	body: JSON.stringify(data),
  })
	.then((response) => response.json())
	.then((data) => {
	  console.log('Success:', data);
	})
	.catch((error) => {
	  console.error('Error:', error);
	});

const submit_btn = document.getElementById('submit btn')
const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const name1 = document.getElementById('name1')
const project_name = document.getElementById('project_name')
const department = document.getElementById('department')
const message = document.getElementById('message')
const attachment = document.getElementById('attachment')



submit_btn.addEventListener('click', function() {
	console.log ('hello')
})