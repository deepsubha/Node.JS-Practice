Template Engine - `JADE` (now PUG)

- Jade is one of the popular template engine that is used in Express (Node.js web application framework) to render HTML content dynamically.

what does a template-engine do? 
- A template engine enables you to use static template files in your application. At runtime it replaces all the variable with the values dynamically, and then transform the file into HTML file and send it to the client. This approach makes it easier to render a html page.

what is PUG.js?
- PUG.js or PUG is a javascript library that was previously known as `JADE`. It is a easy to code HTML in a more readable fashion. one upside to PUG is that it equips developers to code <ins>resuable HTML</ins> documents by pulling data dynamically.
  **Its syntax is sensitive to indentation and white spaces**
Checkout-Links: 1. https://www.educative.io/edpresso/what-is-pug-syntax
				2. https://pugjs.org/api/getting-started.html

what is templating engine in node js?
- js. Template engine helps us to creare HTML page with less/reusable/easy-readable code. Also, It can inject data to HTML at client side and produce the final HTML. It makes our application lighter.

layout.js is the root file and then we extends or inherit other html files from layout.js file.

*_Standard Syntaxes used in JADE_*

<ins>1. attributes</ins>
a(href='https://www.google.com/') Google
a(href='https://www.google.com/', target='_blank') Google

2. follow indentation like python
<ol>
 <li> Text 1</li>
 <li> Text 2</li>
 <li> Text 3</li>
 <li> Text 4</li>
</ol>

above code converted to the below syntax.
ol
	li Text 1
	li Text 2
	li Text 3
	li.
		ashfkjshdfkj shfkjhhf dskhfkh sdfhkhdfkskdf sdkhfkdskdsfk skfhksghgldghj vbkdfhgh vefhvkhvklj vihhvk vkdhfvkhv
		vkdhvkhv v dflv v hkdhvkhvkv vkdhvkhvkv. khvkhvkhvkh v ihkvh vkhkhk hvk khkhvkhvk vkhkvhvh
		vkhvkhv vkhvkhdk rywofpi s ougpe
		syfiourejn doup epgogjeljg
using `.` to use multiple lines in jade.

3. case
//- Generating a random number between 0 and 99
- var number = Math.floor(Math.random() * 100)

//- using case to figure out in what range is the number
case number
    when number < 25
        p Number is between 0 and 24 inclusive
    when number < 50
        p Number is between 25 and 49 inclusive
    when number < 75
        p Number is between 50 and 74 inclusive
    default
        p Number is between 75 and 99 inclusive
        
4. Unbuffered Code vs. Buffered Code
unbuffered code does not directly output anything. It stores the value and that is used some other places.
buffered code starts with `=` and if there is any expression it will refer the actual value in that place.
// Unbuffered Code
- var number = 99
- var coffee = 'latte'
- var list = ["Belgium", "France", "China"]

// Buffered Code
p= "99 times 2 is: " + number*2
p= "I prefer " + coffee + " over cappuccino"

5. Buffered Comments vs. Unbuffered Comments vs. Multiline Comments
Buffered Comments are added using a double forward-slash//. They appear in the rendered HTML file.
Unbuffered Comments are added using the double forward-slash followed by a hyphen//-. They do not appear in the rendered HTML file.
Multiline Comments are added using a double forward-slash // followed by an indented block.

// This is a Buffered Comment

//- This is an Unbuffered Comment

//
    This is
    a multiline
    comment
    
6. doctype html: To compile a standard HTML5 doc, use doctype followed by html.
7. Inheritance
PUG inheritance makes use of the block and extend keywords. 
//- This is what a typical parent template will contain named layout.pug

doctype html
    html
        head
            h2 Include scripts here
                block scripts
        
        head
            h2 Include your favorite candy name here
            block content

//- Extending this over child template

extend layout.pug

block scripts  
    script(src='courses.js')
    script(type='application/javascript')

block content 
    p   gummy bears
    
8. Interpolation
Interpolation is an easy way to substitute placeholders in a template with corresponding JavaScript expressions. This can be done using #{}.

//- Replacing with a variable
    - var name = 'subhadeep maiti'

    h2 Printing name in all lower caps
        p Mr. #{name}

    h2 printing name with first letter of each name in uppercase
        p Mr. #{name.charAt(0).toUpperCase() + name.slice(1)}
        
        
        
        
10. Inheritance:

at layout.jade --> we use "doctype html" at the begining that means it is the root file. then we use "block content" that means we can inherit this file as required later. in index.jade we use "extends layout" at the begining that means this file is inherited from layout.jade file.  then "block content" means that piece of code will be visible to parent jade file i.e. layout.jade file.

        
        
        
        
        
        


