# CustomElement-Timeline
Simple Timeline, it is a web components, it takes in parameters an array of object and a booleen value for the darkmode

# How to install ?

Just get the index.js file

# How to use ?

````html
<head>
<script src="index.js" type="module" defer></script>
</head>
<body> 
<timeline-element id="myTimeline"></timeline-element>
</body>
<script>
const data = [
    {
        title: 'My title1',
        text: 'Text1',
        Date: new Date()
    },
      {
        title: 'My title2',
        text: 'Text2',
        Date: new Date()
    }
]

const timeline = document.querySelector('#myTimeline')
timeline.data = data
</script>
````

## How to update array ?

````html
<script>
const data = [
    {
        title: 'My title1',
        text: 'Text1',
        Date: new Date()
    },
      {
        title: 'My title2',
        text: 'Text2',
        Date: new Date()
    },
]

data.push({
        title: 'My title3',
        text: 'Text3',
        Date: new Date()
})

const timeline = document.querySelector('#myTimeline')
timeline.data = data //Re-set prop
</script>
````

## How to use darkmode ? 

````html
<script>
const timeline = document.querySelector('#myTimeline')
timeline.darkmode=true
</script>
````

I took over the design of a codepen project:

https://codepen.io/ygc/pen/AXzVya/