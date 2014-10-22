$("header").append();
$("#main").append("Hosuke");
var awesomeThought = "I am Hosuke and I am AWESOME!";
console.log(awesomeThought);
var funThoughts = awesomeThought.replace("AWESOME","FUN");
$("#main").append(funThoughts);

var name = "Huang Geyang";
var role = "Front-End Developer";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "name" : "Huang Geyang",
    "role" : "Front-End Developer",
    "contacts" : {
        "email":"Geyang@mensa.org.au",
        "mobile":"Secret",
        "github":"hosuke",
        "twitter":"@huanggeyang",
        "location":"Canberra"
    },
    "pictureURL" : "images/fry.jpg",
    "welcome" : "天空被未来浸染",
    "skills" : ["AngularJS", "HTML" ,"CSS", "JavaScript"]
};

var work = {};
work.position = "Time Traveler";
work.employer = "Nobody";
work.years = 21;

var education = {
    "schools" : [
        {
            "name" : "Australian National University",
            "location" : "Canberra, ACT, Australia",
            "degree" : "Bachelor of Advanced Computing",
            "majors" : "Computational Foundation",
            "dates" : 2013,
            "url" : "http://www.anu.edu.au/"
        },
        {
            "name" : "Anglo Chinese Junior College",
            "location" : "Canberra, ACT, Australia",
            "degree" : "A - level",
            "dates" : 2011,
            "url" : "http://www.acjc.edu.sg/"
        }
    ],
    "onlineCourse": [
        {
            "name":"Introduction to Artificial Intelligence (Advanced Track)",
            "school":"Udacity",
            "dates":2011,
            "url":""
        },
        "edX 6.00.1x",
        "edX 6.00.2x"
    ]
};
education["name"] = "Australian National University";
education["years"] = "2013 - ";
education["city"] = "Canberra, ACT, Australia";




var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedContact = HTMLheaderName.replace("%data%",);
var formattedName = HTMLheaderName.replace("%data%",);
var formattedName = HTMLheaderName.replace("%data%",);
var formattedName = HTMLheaderName.replace("%data%",);

