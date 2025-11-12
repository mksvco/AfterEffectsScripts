# Overview
This collection includes three After Effects scripts for cycling through text from external files:

1. `Cycle Text Layer through Strings.jsx`: Cycles through lines of text from a .txt file, updating a single text layer.
2. `Cycle Two Text Layers through Strings.jsx`: Cycles through tab-separated values from a .tsv file, updating two text layers simultaneously.
3. `Cycle Three Text Layers through Strings.jsx`: Cycles through tab-separated values from a .tsv file, updating three text layers simultaneously.

All scripts use a Slider Control for adjusting the timing of text changes in real-time.

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

## Three Text Layers Script (`Cycle Three Text Layers through Strings.jsx`)
- Reads from a tab-separated values (.tsv) file
- Updates three text layers simultaneously from three columns
- First selected layer uses first column, second uses second, third uses third
- Shares a single Frames Per Text slider for synchronized timing
- Maintains perfect synchronization between all three text layers
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

## Three Text Layers Script
1. Create or open a composition in After Effects
2. Select THREE text layers (order matters - first selected gets first column, etc.)
3. Go to File → Scripts → Run Script File… and choose `Cycle Three Text Layers through Strings.jsx`
4. When prompted, select your .tsv file containing tab-separated values (three columns per row)
5. Adjust the Frames Per Text slider on the first text layer to control timing

# Notes
- The expression loops endlessly through the lines.
- Avoid extremely large .txt/.tsv files (hundreds of thousands of characters) — AE expressions can slow down with very long embedded strings.
- Edit your .txt/.tsv file and re-run the script any time you want to refresh the list.
- For more control, you can easily add additional sliders (e.g., Start Offset, Random Order) to the same text layer.
- **Line Breaks**: Use literal `\n` in your text entries to create multi-line text. For example, `Hello\nWorld` will display as two lines: "Hello" on the first line, "World" on the second.

# Image Layer Triggering

All three scripts support automatic triggering of image/solid layers based on text content. When a text layer displays a specific value, corresponding image layers automatically become visible.

## How It Works
1. Name your image or solid layers using the pattern: `trigger:value`
   - Example: `trigger:header`, `trigger:special`, `trigger:intro`
   - The part after `trigger:` is the value that will be matched against text content
2. Select your text layer(s) AND the image/solid layers you want to trigger
3. Run the script as normal
4. The script automatically applies opacity expressions to the image layers
5. When the text layer shows the matching value, the image layer's opacity will be 100% (visible)
6. When the text layer shows a different value, the image layer's opacity will be 0% (hidden)

## Example Workflow

### Composition Setup
- `Text Layer 1` (cycling through values)
- `trigger:Scene1` (image or solid layer)
- `trigger:Scene2` (image or solid layer)
- `trigger:Intro` (image or solid layer)

### Data File (.tsv for multi-layer) or (.txt for single-layer)
```
Scene1
Intro
Scene2
```

### Result
- When Text Layer 1 shows "Scene1", only the `trigger:Scene1` layer is visible
- When Text Layer 1 shows "Intro", only the `trigger:Intro` layer is visible
- When Text Layer 1 shows "Scene2", only the `trigger:Scene2` layer is visible

**Note:** Trigger matching is case-insensitive, so `trigger:hello` will match text values of "Hello", "HELLO", "hello", etc.

# Line Break Examples

## Single Text Layer with Line Breaks
```
Line 1
Multi\nLine\nText
Another\nEntry
```
Result: The second entry will display as three lines in After Effects.

## Multi-Column with Line Breaks
```
Col 1 Text	Col 2\nLine 2
Row 2\nPart A	Part B\nLine 2
```
Both columns support `\n` for multi-line text independently.

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
You are a bold one.	Execute Order 66.
```

## Three Text Layers (.tsv)
```
First Layer	Second Layer	Third Layer
Hello	World	!
One	Two	Three
Apple	Banana	Cherry
```
