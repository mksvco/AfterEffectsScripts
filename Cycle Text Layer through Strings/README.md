# Overview
This collection includes two After Effects scripts for cycling through text from external files:

1. `Cycle Text Layer through Strings.jsx`: Cycles through lines of text from a .txt file, updating a single text layer.
2. `Cycle Two Text Layers through Strings.jsx`: Cycles through tab-separated values from a .tsv file, updating two text layers simultaneously.

Both scripts use a Slider Control for adjusting the timing of text changes in real-time.

# Features

## Single Text Layer Script (`Cycle Text Layer through Strings.jsx`)
- Reads strings from a plain .txt file (one line per entry)
- Automatically adds a Frames Per Text slider to control the speed
- Loops through all lines indefinitely
- Works on the selected text layer or creates a new one if none is selected
- Escapes and embeds file contents directly into the layer expression—no external dependencies

## Two Text Layers Script (`Cycle Two Text Layers through Strings.jsx`)
- Reads from a tab-separated values (.tsv) file
- Updates two text layers simultaneously from separate columns
- First selected layer uses first column, second layer uses second column
- Shares a single Frames Per Text slider for synchronized timing
- Maintains perfect synchronization between both text layers
- Embeds file contents directly into layer expressions—no external dependencies

# Usage

## Single Text Layer Script
1. Create or open a composition in After Effects
2. Optionally select an existing text layer (or the script will make one)
3. Go to File → Scripts → Run Script File… and choose `Cycle Text Layer through Strings.jsx`
4. When prompted, select your .txt file containing one line per text entry
5. Adjust the Frames Per Text slider on the text layer to control timing

## Two Text Layers Script
1. Create or open a composition in After Effects
2. Select TWO text layers (order matters - first selected gets first column)
3. Go to File → Scripts → Run Script File… and choose `Cycle Two Text Layers through Strings.jsx`
4. When prompted, select your .tsv file containing tab-separated values
5. Adjust the Frames Per Text slider on the first text layer to control timing

# Notes
- The expression loops endlessly through the lines.
- Avoid extremely large .txt files (hundreds of thousands of characters) — AE expressions can slow down with very long embedded strings.
- Edit your .txt file and re-run the script any time you want to refresh the list.
- For more control, you can easily add additional sliders (e.g., Start Offset, Random Order) to the same text layer.

# Example Files

## Single Text Layer (.txt)
```
Hello there!
General Kenobi.
You are a bold one.
Kill him!
```

## Two Text Layers (.tsv)
```
First Layer Text	Second Layer Text
Hello there!	General Kenobi.
You are	a bold one.
Execute	Order 66.
```
