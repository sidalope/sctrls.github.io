## Notes

#### Default Styles
* Using the html5 Doctor version of meyer reset. Although it seems best to modify it to define default styles - and the author recommends it - I'm not sure where to draw the line. Maybe every default style that applies to an html tag can go in that file (default.css) and load it before the page specific styles.

#### Something Afoot
* In my enduring quest to make a footer that will remain at the bottom of my page, no matter where the bottom is, UNLESS there is more content than space, my throes in desperation and dehydration:
    1. Just make the website _super long_
        - yeah, but I'd know.
    2. Put it outside the grid, and give it a position relative to the top.
        - Frankenstein's monster who hasn't learned to feed itself.
    3. Please anchor it to the bottom.
        - No. I need the real-estate.
    4. Ok. The footer probably needs to sit next to main in order to know when to clear the articles container, so:
        - Maybe you can do something with flexbox and a js query to find the content and screen sizes.
    5. You forgot you had changed the size of the _main_ row right before starting this. Main is now inside a row of height 'auto' with the footer below it >.<
        - That doesn't solve the problem you forgot you had solved by changing the row to 'auto', which is that on large sizes your website is like a toad on the interstate: flatly going nowhere and illegible.
    7. minmax() will be your salvation. Do I need some js to find the height of main? Why does that feel like a corruption? Seriously, why?
        - minmax( min size of the articles' container, 60%-ish of the screen height).
        - Was that so hard? It is a beautiful start. If the content and footer fit on the page together, it should just sit it at the bottom.
        - Media queries for screen height and magic-numbering?