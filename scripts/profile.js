var user = {
  "user": {
 "name": "Kat",
 "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
 "full-name" : "Katherine Vicks",
 "phone" : "416-382-3820",
 "city" : " Toronto, ON",
 "email" : "kat@myemail.com",
 "address" : "34 Leval St, M63 3N2",
 "description" : "Strong user experience (UX) design skills. Experience in user research and interaction design gained through corporate and nonprofit externships. Completed three externships during summer breaks to gain experience in UX design and information architecture. Excels at managing usability testing for XYZ landing pages in preparation for Web site redesign.Very competent in testing parameters, prepared prototypes, recruited users, facilitated tests and reported results."
 }
};

document.getElementById( "user-name" ).innerHTML = user.user['full-name'];
document.getElementById( "user-handle" ).innerHTML = user.user.name;
document.getElementById( "user-location" ).innerHTML = user.user.city;
document.getElementById( "user-image" ).setAttribute( 'src' , user.user.image );
document.getElementById( "user-description" ).innerHTML = user.user.description;
document.getElementById( "user-phone" ).innerHTML = user.user.phone;
document.getElementById( "user-address" ).innerHTML = user.user.address;
document.getElementById( "user-email" ).innerHTML = user.user.email;