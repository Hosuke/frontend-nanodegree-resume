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
    "welcomeMessage" : "天空被未来浸染",
    "skills" : ["AngularJS", "HTML" ,"CSS", "JavaScript"]
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
            "location" : "Singapore",
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
            "url":"https://www.udacity.com"
        },
        {
            "title" : "edX 6.00.1x",
            "school" : "edX",
            "dates" : 2014,
            "url" : "https://www.edx.com"
        },
        {
            "title" : "edX 6.00.2x",
            "school" : "edX",
            "dates" : 2014,
            "url" : "https://www.edx.com"
        }
    ]
};


var projects = {
    "projects" : [
        {
            "title" : "Poke2048",
            "dates" : "2014",
            "description" : "Pokefied version of 2048",
            "images" : ["images/197x148.gif"]
        },
        {
            "title" : "Not IE",
            "dates" : "2014",
            "description" : "Do not tap on IE",
            "images" : ["images/197x148.gif"]
        }
    ]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").append(formattedName);
    $("#header").append(formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%",bio.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.location);
    $("#header").append(formattedMobile);
    $("#header").append(formattedEmail);
    $("#header").append(formattedGithub);
    $("#header").append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            console.log(formattedSkill);
            $('#skills').append(formattedSkill);
        });
    }
};

bio.display();

work.display = function() {
    work.jobs.forEach(function (job) {
        console.log(job);
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

work.display();

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

projects.display();

initializeMap();
$("#mapDiv").append(googleMap);

// var formattedName = HTMLheaderName.replace("%data%",bio.name);
// var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
// var formattedContact = HTMLheaderName.replace("%data%",);
// var formattedName = HTMLheaderName.replace("%data%",);
// var formattedName = HTMLheaderName.replace("%data%",);
// var formattedName = HTMLheaderName.replace("%data%",);

