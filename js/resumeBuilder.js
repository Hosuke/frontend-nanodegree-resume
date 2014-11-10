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
    "pictureURL" : "images/hosuke_logo.png",
    "welcomeMessage" : "天空被未来浸染",
    "skills" : ["AngularJS", "HTML" ,"CSS", "JavaScript", "Python", "Java"]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkill);
        });
    }
};

var work = {
    "jobs" : [
        {
            "employer" : "66HEX",
            "title" : "Co-Founder",
            "location" : "Xiamen",
            "dates" : 2013,
            "description" : "UAV solution provider"
        },
        {
            "employer" : "Myself",
            "title" : "Indie Game Developer",
            "location" : "Canberra",
            "dates" : 2014,
            "description" : "Make indie HTML 5 games"
        }
    ]
};

work.display = function() {
    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    });
};


var education = {
    "schools" : [
        {
            "name" : "Australian National University",
            "location" : "Canberra, ACT, Australia",
            "degree" : "Bachelor of Advanced Computing",
            "majors" : ["Computational Foundation"],
            "dates" : 2013,
            "url" : "http://www.anu.edu.au/"
        },
        {
            "name" : "Anglo Chinese Junior College",
            "location" : "Singapore",
            "majors" : ["Science"],
            "degree" : "A - level",
            "dates" : 2011,
            "url" : "http://www.acjc.edu.sg/"
        }
    ],
    "onlineCourses": [
        {
            "title":"Introduction to Artificial Intelligence (Advanced Track)",
            "school":"Udacity",
            "dates":2011,
            "url":"https://www.udacity.com"
        },
        {
            "title" : "Introduction to Computer Science and Programming Using Python",
            "school" : "edX",
            "dates" : 2014,
            "url" : "https://courses.edx.org/courses/MITx/6.00.1-x/1T2014/info"
        },
        {
            "title" : "Introduction to Computational Thinking and Data Science",
            "school" : "edX",
            "dates" : 2014,
            "url" : "https://courses.edx.org/courses/MITx/6.00.2x/1T2014/info"
        }
    ]
};

education.display = function(){
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last a").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        school.majors.forEach(function(major) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedSchoolMajor);
        });
        $(".education-entry:last").append(formattedSchoolLocation);
    });

    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function (course) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
            $(".education-entry:last").append(formattedOnlineTitle);
            $(".education-entry:last a").append(formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineDates);
        });
    }
};


var projects = {
    "projects" : [
        {
            "title" : "Poke2048",
            "dates" : "2014",
            "description" : "Pokefied version of 2048",
            "images" : ["images/poke2048.jpg"]
        },
        {
            "title" : "Not IE",
            "dates" : "2014",
            "description" : "Do not tap on IE",
            "images" : ["images/notIE.jpg"]
        }
    ]
};

projects.display = function() {
    projects.projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
        var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        if (project.images.length > 0) {
            project.images.forEach(function(image){
                var formattedImage = HTMLprojectImage.replace("%data%",image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    })
};

bio.display();
work.display();
education.display();
projects.display();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    // My last name is HUANG
    name[0] = name[0].toUpperCase();
    // My first name is Geyang
    name[1] = name[1].slice(0,1).toUpperCase() + name[1].slice(1).toLocaleLowerCase();
    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

//initializeMap();
$("#mapDiv").append(googleMap);
