var people = [{


    "firstname": "Turi",
    "lastname": "Bob",
    "height": 164,
    "img": "OIP.jfif"

}, {
    "firstname": "Lebron",
    "lastname": "Bob",
    "height": 199,
    "img": "0c40570b5f61291c93aa032749cadde7.jpg"







}];

var html = "";

for (i = 0; i < people.length; i++) {

    html += "<div class='card'>";
    html += "<div class='main'><ul><li>" + people[i].firstname + "</li><li>" + people[i].lastname + "</li></ul></div>";
    html += "<div class='image'>image/div>";
    html += "<div class='sideinfo'>" + people[i].height + "</div>";
    html += "</div>";



}


document.getElementById("container").innerHTML = html;