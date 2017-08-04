# API

## Table of Contents

-   [API](#api)
    -   [Table of Contents](#table-of-contents)
    -   [Components](#components)
        -   [cover](#cover)
        -   [title](#title)
        -   [block](#block)
        -   [input](#input)
        -   [textarea](#textarea)
        -   [button](#button)
        -   [cell](#cell)
        -   [info](#info)
        -   [select](#select)
        -   [picture view](#picture-view)
        -   [search bar](#search-bar)
    -   [Effects](#effects)
        -   [alert](#alert)
        -   [loading](#loading)
        -   [uploading](#uploading)
        -   [double check](#double-check)
        -   [qrcode](#qrcode)

## Components

### cover

-   Component
    -   Tag name
        -   Regular -> dog-cover
        -   Sample -> cov
-   Props
    -   Info: String -> the display text in the loading screen.
    -   Icon: String -> the font awesome icon name in the middle  of the loading screen.
-   Slots
    -   Things going to show after loading.

### title

-   Component
    -   Tag name
        -   Regular -> dog-title
        -   Sample -> tit
-   Props
    -   Info: String -> the title that displayed on very top of the page.
    -   Icon: String -> the icon that displayed on left site of title.
-   Slots
    -   Things going to show inside title.

### block

-   Component
    -   Tag name
        -   Regular -> dog-block
        -   Sample -> blo
-   Props
    -   Info: String -> the title that displayed on block's top.
    -   Icon: String -> the icon that displayed on left site of info.
-   Slots
    -   Things going to show inside the block.

### input

-   Component
    -   Tag name
        -   Regular -> dog-input
        -   Sample -> inp
-   Props
    -   v-model: variable of string -> two way bounded variable with input box
    -   @oninput: function(event) -> call the function with event when input change 
-   Slots
    -   The title of input.

### textarea

-   Component
    -   Tag name
        -   Regular -> dog-textarea
        -   Sample -> tex
-   Props
    -   v-model: variable of string -> two way bounded variable with input box
    -   @oninput: function(event) -> call the function with event when input change 
-   Slots
    -   The title of input.

### button

-   Component
    -   Tag name
        -   Regular -> dog-button
        -   Sample -> but
-   Props
    -   color: string -> color of button, avaliable options:
        -   blue
        -   green
        -   red
        -   orange
        -   purple
        -   black
    -   size: string -> size of button, avaliable options:
        -   xl
        -   large
        -   normal
        -   small
    -   icon: string -> font awesome icon that will display on button
    -   @onclick: function() -> call the function when click on the button
-   Slots
    -   Button content

### cell

-   Component
    -   Tag name
        -   Regular -> dog-cell
        -   Sample -> cel
-   Props
    -   left: string -> content that display on the left of cell
-   Slots
    -   Content that display on the right of cell

### info

-   Component
    -   Tag name
        -   Regular -> dog-info
        -   Sample -> inf
-   Props
    -   Info: String -> the title that displayed on block's top.
    -   Icon: String -> the font awesome icon that displayed on left site of info.
        -   If no icon proped will appear with default infotmation-o of font awesome
-   Slots
    -   Content of information

### select

-   Component
    -   Tag name
        -   Regular -> dog-select
        -   Sample -> sel
-   Props
    -   v-model: variable of string -> two way bounded variable with selected if box
    -   list: array of object or array of string -> the array use to display and select in select component
        -   example of list: ['bejing', 'shanghai'] array of string
            -   In this example the select box will display beijing and shanghai
            -   While select any of them, the v-model variable will be beijing or shanghai
        -   example of list: [{id: 1, name: 'beijing'},{id: 2, name: 'shanghai'}] array of object
            -   In this example the select box will display beijing and shanghai
            -   While select any of them, the v-model variable will be 1 or 2
-   Slots
    -   The title of select.

### picture view

-   Component
    -   Tag name
        -   Regular -> dog-view
        -   Sample -> vie
-   Props
    -   pictures: array of string -> A array of picture url (either url or base 64) that in display
-   Slots
    -   Title of picture block

### search bar

-   Component
    -   Tag name
        -   Regular -> dog-search
        -   Sample -> sea
-   Props
    -   placeholder: string -> the place holder of search bar
    -   @change: function(event) -> when input in search bar, call this function with input event
-   Slots
    -   Nothing.

### Fold block

## Effects

### alert

### loading

### uploading

### double check

### qrcode
