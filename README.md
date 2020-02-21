# D3 Intro

Introductary notes to D3 Javascript

## Data Viz

Tips for great data viz

- who is the audience?
- what do they need to know / do with data?
- select the appropriate data
- remove clutter / unneeded data
- draw attention to shapes, size, colors
- data should tell a story

Data is about story telling, make it human.

## SVGs

SVG stands for Scalable Vector Graphics. It’s a special image format rather than the traditional jpg, jpeg, gif, png and bmp extensions.

SVG images are created and edited through code. Not something that can necessarily be created sing cameras or image manipulation software like Photoshop.

What makes SVG so great is that you can resize images without loss of quality. Image maintain their consistency and shape without having pixelated edges.

SVG images require a lot of resources so you should only use them for basic images.
Creating SVG Images

To create an SVG image you use the <svg> element. Most web browsers support SVG images by default so you shouldn’t face any compatibility issues.

SVG images can have CSS classes and JavaScript events applied to them. This makes them easier to work with rather than a plain image.

Not all CSS properties are supported. Some elements related to SVG require certain values and properties. You’ll learn what those are throughout this course.

### SVG Rectangles

SVG rectangle elements require that you set the width and height attributes. Otherwise nothing will appear on the screen.

The fill attribute allows you to change the color of a SVG shape. You can’t use the background-color property on a SVG element. It will be ignored. The value for the fill can be named colors, rgb, hex and hsv.

The stroke property will apply a border around a shape. Just like the fill property, this can only be applied to shapes. You also need to set the stroke-width or else the stroke won’t appear.

### SVG Circles, Ellipses, and Lines

The circle element requires that you define the r attribute which will set its radius. The radius is the distance from the center of the circle to any of it’s edges.

The coordinate system works a bit differently. Circles are moved from their center points so you need to use the attributes cx and cy appropriately. 

An ellipse works similar to the circle element, but you’re required to set the radius for the x and y axis. 

Lines require that you set 2 coordinates which can be set using x1, y1, x2, and y2. Lines don’t have a fill so you need to use the stroke attribute to set the color.


### SVG Polygons & Polylines

Polygons are shapes with 3 or more straight sides. With the SVG polygon element you can create complex shapes.

The polygon element requires 1 attribute which is the points. The points must be a set of coordinates where SVG will take care of drawing lines between them in order.

Polylines are similar to polygons except polylines will not be closed. Despite the name, polylines will also have a fill. Set the fill attribute to none to have no fill.

### SVG Paths

Path elements allow you to create complex shapes. You can create sides that are either straight or curved.

You are also allowed to create multiple shapes using one element.

The path element works differently than the other shapes. You are required to input commands along with your coordinates to instruct SVG how to draw your shapes.

There are 2 types of commands which are absolute and relative. Absolute commands are created using uppercase letters. Relative commands are created using lowercase letters.

### SVG Text

The text element allows you to create text inside SVG. Your text may not appear unless you set the x and y coordinates.

Naturally, SVG will not be able to break your text into multiple lines. In these cases you may want to use the tspan element to create multi line text.

You can use regular HTML inside the text element, but you may need to apply special attributes in order for them to work. 

### SVG Definitions and Groups

Definitions allow you to create reusable elements. The benefit is that you won’t have to input the same values each time. Just define it once and you’re set!

Any elements defined inside a definition will not be displayed. You have to use the use element and pass in the ID of the definition in order to display it.

To group multiple elements together you can use the g element. The g element can hold any kind of shape and allows you to manage complex shapes easier.

### SVG Text Paths

You can create fancy text effects using text paths. Text paths allow you to use paths for text to be written on.

To create a text path you must first create a definition using the path element. You can use any commands and coordinates you want.

Then you need to apply the textPath element to the text element and pass in the ID. The text must also be inside this element for the path to take effect.

### SVG Clip Paths

Clip paths allow you to hide certain parts of a shape using custom paths. Anything inside will appear while anything outside will disappear.

Clip paths only apply to elements they’re applied to. If a shape that doesn’t have a clip path applied to it, but is touching the clip path, then it will still remain unaffected.

### Creating SVG Elements with Illustrator

Illustrator can be used to create SVG images. Just make sure you select svg as the file format when exporting.

SVG files will have special attributes when you’re creating them as a separate file. This is just for the browser to better understand everything inside.

D3 is used with SVG to create graphs and charts so be prepared to use it when we get started in the next section!

### Selections

As far as D3 is concerned, data is only text and numbers. Other types of data such as images, audio files, and videos will not work with D3 as “data”.

D3 bridges the gap between your data and the visualization (the HTML and CSS). 

Selections are objects that represent the HTML on your page. D3 will take care of creating these objects and fill them with properties/methods for you to use.

If you call the append() method, then the selection will also be updated to the element created.

### Manipulating Selections

Transformation methods are functions that change how an element looks internally. This includes attributes or the elements inside it.

The attr() method will add the attribute you pass in. It’s important to note that this will completely override an attribute if it already exists.

A better alternative to adding classes to an element is by using the classed() method. If a class exists, then it will not be removed if you try to add it.

You should always make sure you know what’s being returned. Some methods will return the current selection or an entire new one. Check the documentation to make sure.

### Binding Data

D3 has something called a waiting room when you bind data to an element. If data can’t be bound to an element, then the data will be placed inside the waiting room.

To access the data in the waiting room you need to call the enter() function. This will begin looping through each piece of data.

The minute you create an element in the loop, D3 will bind the current piece of data to that element. This is done automatically for you.

It’s always good practice to put the data into the waiting room rather than having elements prepared already.

### Displaying Data

Each element has access to the data it’s binded to. You can use this as an opportunity to change the outcome of the element.

Each transformation function can accept an anonymous function which will passed the current data in the loop.

### Loading Data Externally

D3 supports 3 file formats which are plain text, csv and json. You can load each of these using functions provided by the D3 request library.

CSV files are comma separated values. Each line is considered a row. Each comma separated value is considered a column. The first row is used as the column names.

D3 takes the time to convert CSV data into objects and arrays depending on how it’s formatted.

JSON files hardly get affected as they’re objects and arrays to begin with. It’s preferable to use JSON code rather than CSV for consistency.