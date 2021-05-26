let email_id = document.querySelector('#email');
let contatc_id = document.querySelector('#contact');
let postcode_id = document.querySelector('#post-code');
let result_show = document.querySelector('#result');


email_id.addEventListener('click', validate);
contatc_id.addEventListener('click', validate);
postcode_id.addEventListener('click', validate);


let re_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let re_contact = /^(\+)?(88)?01[0-9]{9}$/;
let re_post = /^[0-9]{4}$/;


function validate(e) {
    // console.log(e.target.id)
    //re.test(str)
    if (e.target.id === 'email') {

        result_show.innerHTML = "";
        var email_str = prompt("Please enter the email-id");
        if (re_email.test(email_str)) {
            result_show.appendChild(document.createTextNode(`Email ID '${email_str}' is valid`))
            result_show.className = 'p-3 mb-2 bg-success text-white'
        } else {
            result_show.appendChild(document.createTextNode(`'${email_str}' is not a valid email id`))

            result_show.className = 'p-3 mb-2 bg-danger text-white'
        }


    }
    if (e.target.id === 'contact') {

        result_show.innerHTML = "";
        var contact_str = prompt("Please enter the contact number");
        if (re_contact.test(contact_str)) {
            result_show.appendChild(document.createTextNode(`Contact number '${contact_str}' is valid`))
            result_show.className = 'p-3 mb-2 bg-success text-white'
        } else {
            result_show.appendChild(document.createTextNode(`'${contact_str}' is not valid`))

            result_show.className = 'p-3 mb-2 bg-danger text-white'
        }

    }
    if (e.target.id === 'post-code') {

        result_show.innerHTML = "";
        var post_str = prompt("Please enter the post-code");
        if (re_post.test(post_str)) {
            result_show.appendChild(document.createTextNode(`Post number '${post_str}' is valid`))
            result_show.className = 'p-3 mb-2 bg-success text-white'
        } else {
            result_show.appendChild(document.createTextNode(`'${post_str}' is not valid`))

            result_show.className = 'p-3 mb-2 bg-danger text-white'
        }

    }
}