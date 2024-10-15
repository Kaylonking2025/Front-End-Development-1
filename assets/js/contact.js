/**	CONTACT FORM
*************************************************** **/
var _hash = window.location.hash;

/**
	BROWSER HASH - from php/contact.php redirect!

	#alert_success 		= email sent
	#alert_failed		= email not sent - internal server error (404 error or SMTP problem)
	#alert_mandatory	= email not sent - required fields empty
**/	jQuery(_hash).show();


// grabs the element by ID from html
const submit_btn = document.getElementById('submit btn')
// grabs the element by ID from html
const name = document.getElementById('name')
// grabs the element by ID from html
const email = document.getElementById('email')
// grabs the element by ID from html
const phone = document.getElementById('phone')
// grabs the element by ID from html
const name1 = document.getElementById('name1')
// grabs the element by ID from html
const project_name = document.getElementById('project_name')
// grabs the element by ID from html
const project_desc = document.getElementById('project_desc')
// grabs the element by ID from html
const department = document.getElementById('department')
// grabs the element by ID from html
const message = document.getElementById('message')
// grabs the element by ID from html
const attachment = document.getElementById('attachment')


// this event listener adds the inforamtion in the input fields
submit_btn.addEventListener('click', function() {
	const object = {
		fullname : name.value,
		email : email.value,
		phone : phone.value,
		company_name : name1.value,
		project_name : project_name.value,
		project_desc : project_desc.value,
		department : department.value,
		message : message.value,
		file : null,

	}
	
// this function sends that information over to the servers
	
    fetch('http://99.79.77.144:3000/api/contact', {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json',
		},
		body: JSON.stringify(object),
	})
	.then((response) => response.json())
	.then((data) => {
	  console.log('Success:', data);
	})
	.catch((error) => {
	  console.error('Error:', error);
	});
})