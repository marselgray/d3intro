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

### Starting with Scales

D3 can be used to create any type of visualization. It’s not biased towards nay chart or graph.

Adobe color is a tool that allows you to find great color combinations and even build your own.

You can use the data to change the outcome of the bar/chart. Most commonly used to manipulate the height or height.

### Random Data

Generating Random data can help battle test your graph as it allows you to cover more scenarios.

There are situations where clients may not be able to provide you data so you’ll be responsible for generating dummy data in the mean time.

The D3 random library takes care of generating random data for you.

### Using SVG

Moving SVG elements requires that you change their x and y coordinates. The X coordinate goes from left to right and the y coordinate goes from top to bottom.

If you’re reusing values, then you should store it in a variable. This makes it easy to change later on if you ever need to.

Labels are a way to identify a shape. Users will be able to better understand compare your visualization if you provide labels.

Text anchoring is special to SVG. You can determine whether text gets pushed form its side or center point.

### Scatter Plot

Scatter plots allow you to chart large amounts of data. They are circles that represent 2 pieces of data. They can also vary in size to show more impact over others.

Creating a scatter plot is similar to creating a bar graph. You create the elements, bind the data, create more elements for the data and add details.

You can use the join() function to combine arrays to strings. This can be useful for displaying coordinates stored in arrays.

Math is used to position and set the size of elements. D3 can take care of the more complex operations so you don’t have to.

### Scales

Scales are functions that take your data and will lower or increase the values so that they can be used for visualization.

The input domain is the original set of data. It’s the highest and lowest numbers in your data.

The output range is the numbers that the original data should be scaled to. These would usually be size of the viewing area.

The D3 array library is a utility library that provides functions for working with arrays no matter how complex. It’s included in the core by default so you don’t need to do anything to set it up.

### Applying Scales to Visualizations

The d3.max() and d3.min() functions can be passed in accessor functions for complex array and object structures.

An accessor function is a function that returns a value that’s used for grabbing certain data from an object or array.

Adding padding to your visualizations is common so that shapes and text don’t get cut off from the viewing area.

You can reverse the range and D3 will take care of scaling the values appropriately for you.

### Exploring More Scales

D3 provides various scales for various scenarios. An official list of scales can be found on the D3 Scales library.

Each scale can be used for scaling different types of shapes such as the scaleSqrt() function for circles.

Some scales are used for data that don’t contain numeric values such as colors or categorical data.

### Time Scales

Dates in your data will most likely come in a format that neither D3 or JavaScript can understand. D3 only works with Date Objects.

There are a set of functions that will take care of reading your formatted dates and converting them into date objects to use with scales and vice versa.

MomentJS is also a popular library for converting dates. You can use this if you’re comfortable with it.

D3’s time scale will read your dates and convert them into numbers that can be used to visualize your data.

### Adding an Axis

An axis is a line with ticks that provide a way to visually measure the distance between certain points in a graph. D3 provides a set of functions for creating an axis.

The axisTop() and axisBottom() functions are used for creating a horizontal axis. The axisLeft() and axisRight() functions are used for creating a vertical axis.

Unlike scales, these functions will draw the SVG elements for you. It’s good practice to store these generated elements inside a group so they can be moved and managed easily.

You can use CSS to refine the outcome of your SVG shapes. The more cleaner a shape looks, the more resources is required to render it. 

### Refining the Axis and adding the Y Axis

The ticks() function allows you to set a number of ticks an axis should have. The number will only be taken as a suggestion.

The tickValues() function will allow you to completely control how many ticks are outputted along with the actual values themselves. D3 will take the time to space them out.

The tickFormat() function will allow you to format the text that gets outputted for each tick. You are provided the data for each tick so you can manipulate it appropriately. 

### Ordinal Scales

Ordinal scales are used to convert categorical data into numbers that can be used for your visualizations.

The definition of ordinal is relating to a “thing’s” position in a series.

D3 will evenly distribute your ordinal data. It’s important to note that it will apply padding at the end.

A band is a specific set of numbers in a range. The set of numbers are usually distributed evenly in a pattern. Not always, but that’s usually the case.

### Refining the Bar Graph

You can use numeric data as ordinal data if you wish. Instead of using the numbers themselves, you can use their index.

The band width is the distance between number in the band range. D3 provides a function called bandwidth() which will calculate this for you without the padding.

Band scales were made specifically for bar charts so it’s recommend you use them.

### Updating the Bar Graph

There are 3 situations you’ll find yourself in when it comes to updating data. This can be a change in your original date, an addition or a removal.

Changes in data usually occur during an event. By default, D3 supports all JavaScript events by using the on() function on a selection.

The reverse() function is a JavaScript array function that will take care of reversing the values in your array.

You can bind your data to the elements again to let D3 be aware of the change. You will have to redraw only the elements affected and only change the attributes that were affected.

### Transitions and Animations

Applying a transition is as simple as applying the transition() function your current selection. D3 will take care of animating the attributes for you.

Transitions can only be applied to attributes that currently exist. Otherwise there will be no animation applied.

You can control the duration of your transition by applying the duration() function. The length of time is measured in milliseconds.

You can delay a transition by applying the delay() function. This is also measured in milliseconds. Be careful with your delays as it can be easy to ruin the user experience with long delays and animations.

### Updating the Data

If your data changes, then your visualization will not reflect that accurately. You’ll need to update the domain before you do anything else. Just call the domain() function again and pass in the new minimum and maximum values.

### Reinforcing Transitions and Animations

The axis needs to be updated when your data changes drastically. If not, then the data can be inaccurately read.

You do not need to pass in the scales again as D3 will be able to detect those changes for you and update the axis appropriately.

You are allowed to animate the axis by chaining the transition(), delay(), and duration() functions.

### Reinforcing Transitions and Animations

The axis needs to be updated when your data changes drastically. If not, then the data can be inaccurately read.

You do not need to pass in the scales again as D3 will be able to detect those changes for you and update the axis appropriately.

You are allowed to animate the axis by chaining the transition(), delay(), and duration() functions.

### Refining the Scatterplot

Clip paths allow you to hide portions of a shape that appears outside of its viewing area.

It’s more efficient to group your elements together and then apply a clipping path rather than applying clip paths to each element individually.

Transitions have events called start and end. The start event is triggered when the transitioned begins. The end transition event is triggered when the transition ends. Each element will have their own transition events.

You can have multiple transitions occurring on the page. However, you can’t have multiple transitions applied to the same element at the same time or else the previous transitions will be cancelled.