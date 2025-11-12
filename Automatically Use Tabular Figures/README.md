# Apply Tabular Figures to Selected Text

## Description
This After Effects script automatically applies tabular lining figures (OpenType feature `tlf`) to any numbers found in selected text layers.

**What are Tabular Figures?**
Tabular figures are numerals that all have the same fixed width, making them ideal for:
- Aligning numbers in columns
- Financial data and tables
- Technical specifications
- Any situation requiring consistent numeric width

## How to Use

1. **Select Text Layers**: In your After Effects composition, select one or more text layers containing numbers
2. **Run Script**: Execute `Apply Tabular Figures to Selected Text.jsx`
3. **Automatic Detection**: The script will detect any numeric characters (0-9) in the selected layers
4. **Apply OpenType Feature**: The `tlf` (tabular lining figures) OpenType feature is applied to layers containing numbers

## What It Does

- ✓ Scans selected text layers for numeric characters
- ✓ Only processes layers that contain numbers
- ✓ Applies the OpenType `tlf` (tabular lining figures) feature
- ✓ Works with single or multiple selected text layers
- ✓ Provides feedback on which layers were processed
- ✓ All changes are wrapped in a single undo group

## Requirements

- Adobe After Effects CC 2014 or later
- Text layers containing numbers
- A font that supports OpenType tabular lining figures (most modern fonts do)

## Notes

- The script only affects text layers that contain numeric digits (0-9)
- The tabular figures setting is applied to the entire text layer
- If your font doesn't support the `tlf` feature, the text will remain unchanged
- Changes can be undone with a single undo (Ctrl+Z / Cmd+Z)

## Troubleshooting

**Script does nothing:**
- Ensure you've selected at least one text layer
- Verify the text layer contains numbers
- Check that your font supports OpenType features

**Numbers don't look different:**
- Your selected font may not have distinct tabular vs. proportional figures
- Try with a font like Helvetica Neue, Roboto, or other professional typefaces
