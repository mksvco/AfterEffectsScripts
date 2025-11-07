#Overview
This After Effects script cycles through lines of text from an external .txt file, updating a text layer’s content every X frames.
The number of frames per change is controlled by a Slider Control on the text layer, allowing easy real-time adjustment.

#Features
- Reads strings from a plain .txt file (one line per entry).
- Automatically adds a Frames Per Text slider to control the speed.
- Loops through all lines indefinitely.
- Works on the selected text layer or creates a new one if none is selected.
- Escapes and embeds file contents directly into the layer expression—no external dependencies.

#Usage
Create or open a composition in After Effects.
Optionally select an existing text layer (or the script will make one).
Go to File → Scripts → Run Script File… and choose Cycle Text From TXT.jsx.
When prompted, select your .txt file containing one line per text entry.
Adjust the Frames Per Text slider on the text layer to control how many frames each line lasts.

#Notes
- The expression loops endlessly through the lines.
- Avoid extremely large .txt files (hundreds of thousands of characters) — AE expressions can slow down with very long embedded strings.
- Edit your .txt file and re-run the script any time you want to refresh the list.
- For more control, you can easily add additional sliders (e.g., Start Offset, Random Order) to the same text layer.

#Example .txt file
```
Hello there!
General Kenobi.
You are a bold one.
Kill him!
```
