# Getting Started with admin dashboard template
Download this template then run `npm install`

After that run `npm start` \
Then you can start customizing the template to your needs

### Change colors & fonts in:
### `src/scss/variables.scss`

# Charts
## Line chart

## `Props`
`data` should contain objects with both property data and label .\
`fill` true / false, true if you want background color .\
`backgroundColor` css color, for example: 'rgba(150, 100, 200, .6)' .\
`borderColor` css color, for example: 'rgb(92, 184, 92)' .\
If you want to change things like tension, borderWidth and other things you can do this manually. All charts are created with chartjs, documentation: https://www.chartjs.org/docs/latest/


## Pie Chart 

## `Props`
`colors` an array of colors which the data will be displayed in

# Info boxes
## `Small info box`

`icon` icon property uses https://ionic.io/ionicons icon name to select the icon for the small info box. for example "people-outline" \
`title` The title of the small info card \
`number` The number on the small info card

## `Medium info box`

`title` The title shown on top of the info box

## `Large info box`

`title` The title shown on top of the info box
