var source = document.getElementById("loginname").innerHTML;

var template = Handlebars.compile(source);

var context = {
  firstname: "George"
};