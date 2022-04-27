1. express express-handlebars
2. cd express-handlebars/
3. npm install
4. npm uninstall jade --save
5. npm install express-handlebars --save
6. var hbs = require('express-handlebars'); at app.js
- importing new engine i.e. express-handlebars at app.js file

7. 
app.engine('hbs', hbs.engine({
  extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'
}));
- set up the new hbs engine with extention name for recognising the file with .hbs, rootlayout is layout.hbs and the root directory would be root node directory/views/layouts

8. app.set('view engine', 'hbs'); 
- changed form jade to hbs engine

9. layout.hbs
{{}} is used to bind the data
{{{body}}} is used to use the html template, The name should be body always.

10. if else block in handlebars (if only accepts one arguments)
{{#if condition}}
<p>condition is true.</p>
{{else}}
<p>condition is false.</p>
{{/if}}

11. each expression/ loop iteration in handlebars
loop itration in handlebars? </br>
{{#each arr}}
  {{this}}
{{/each}}

</br>loop iteration with key value pair...</br>
{{#each arr as |value key|}}
  index= {{key}}
  value= {{value}}</br>
{{/each}}

