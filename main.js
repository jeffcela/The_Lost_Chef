// var source = document.getElementById("aboutsite").innerHTML;

// var template = Handlebars.compile(source);

// var context = {
//   title: "George"
// };



const source = document.getElementById('aboutsite').innerHTML;
 
const template = Handlebars.compile(source);
 
const context = {
  title: 'Text of the paragraph element'
};
 
const compiledHtml = template(context);