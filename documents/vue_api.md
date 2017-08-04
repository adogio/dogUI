# API

## Table of Contents

- [API](#api)
    - [Table of Contents](#table-of-contents)
    - [Components](#components)
        - [cover](#cover)
        - [title](#title)
        - [block](#block)
        - [input](#input)
        - [textarea](#textarea)
        - [button](#button)
        - [cell](#cell)
        - [info](#info)
        - [static](#static)
        - [small](#small)
        - [select](#select)
        - [picture view](#picture-view)
        - [search bar](#search-bar)
        - [Fold block](#fold-block)
    - [Effects](#effects)
        - [alert](#alert)
        - [loading](#loading)
        - [uploading](#uploading)
        - [double check](#double-check)
        - [qrcode](#qrcode)
        - [draw menu](#draw-menu)

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
    -   (slot="draw") content that display in draw table (only working with extend draw triggired)

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
    -   Icon: String -> the font awesome icon that displayed on left site of info. (optional)
        -   If no icon proped will appear with default infotmation-o of font awesome
-   Slots
    -   Content of information

### static

-   Component
    -   Tag name
        -   Regular -> dog-static
        -   Sample -> sta
-   Props
    -   Icon: String -> the font awesome icon that displayed on left site of info. (optional)
        -   If no icon proped will appear with default arraw-right of font awesome
-   Slots
    -   Content of static information
-   Warning
    -   This component only render once, content will never change after mounted

### small

-   Component
    -   Tag name
        -   Regular -> dog-small
        -   Sample -> sma
-   Props
    -   Icon: String -> the font awesome icon that displayed on left site of info. (optional)
        -   If no icon proped will appear with default arraw-right of font awesome
-   Slots
    -   Content of static information
-   Warning
    -   This component only render once, content will never change after mounted

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

-   Component
    -   Tag name
        -   Regular -> dog-fold
        -   Sample -> fol
-   Props
    -   Info: String -> the title that displayed on block's top.
    -   Icon: String -> the font awesome icon that displayed on left site of info.
-   Slots
    -   The full content of fold block that will be folded
    -   (slot="half") the half content that will be aleways displayed

## Effects

### alert

-   Effect area
    -   In dog cover
-   Function 
    -   dog.alert(icon, content);
-   Arguments
    -   icon: string -> the icon that will be poped up with alert (optional)
    -   content: string -> the content that will be poped up with alert
-   Effect
    -   Popup a alert from buttom
-   Warning
    -   Use settimeout for more then 5 ms bewteen two alerts to avoid issue.

### loading

-   Effect area
    -   In dog cover
-   Function 
    -   dog.unload();
-   Effect
    -   Stop loading screen of dog cover

### uploading

-   Effect area
    -   In dog cover
-   Function 
    -   dog.upload();
-   Effect
    -   Switch the page display to upload page

### double check

-   In development

### qrcode

-   Effect area
    -   In dog cover
    -   Select extend qrcode
-   Function 
    -   dog.qrcode(url, content, settings);
-   Arguments
    -   url: string -> the qrcode pointing url or a sentence
    -   content: string -> the content that will display under qrcode
    -   settings: object (optional)
        -   mode: string -> image for image mode, text for text mode
        -   topper: string -> display strings's image or text itself on the top of page
        -   center: string -> display strings's image or text itself on the center of qrcode
-   Effect
    -   Popup a qrcode page that contain a qrcode.

### draw menu

-   Effect area
    -   In dog cover
    -   Select extend draw
-   Function 
    -   dog.draw(status);
-   Arguments
    -   status: boolean -> if true, only working with draw table closed
-   Effect
    -   Popup a draw table.