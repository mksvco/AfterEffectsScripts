// Apply Tabular Figures to Selected Text Layers
// This script detects numbers in selected text layers and applies
// tabular lining figures (OpenType feature) to automatically format them
// Author: Created for After Effects
// Description: Applies the 'tlf' (tabular lining figures) OpenType feature
// to any numeric characters found in selected text layers

// Main script logic
function main() {
    // Check if After Effects is available
    if (app.project === null) {
        alert("No project is open.");
        return;
    }
    
    // Check if a composition is active
    if (app.project.activeItem === null || !(app.project.activeItem instanceof CompItem)) {
        alert("Please open a composition first.");
        return;
    }
    
    var comp = app.project.activeItem;
    var selectedLayers = [];
    
    // Collect all selected text layers
    for (var i = 0; i < comp.layers.length; i++) {
        if (comp.layers[i].selected && comp.layers[i] instanceof TextLayer) {
            selectedLayers.push(comp.layers[i]);
        }
    }
    
    // Check if any text layers were selected
    if (selectedLayers.length === 0) {
        alert("Please select at least one text layer.");
        return;
    }
    
    // Start undo group
    app.beginUndoGroup("Apply Tabular Figures to Text");
    
    try {
        // Apply tabular figures to each selected text layer
        var processedCount = 0;
        for (var i = 0; i < selectedLayers.length; i++) {
            if (applyTabularFiguresToLayer(selectedLayers[i])) {
                processedCount++;
            }
        }
        
        app.endUndoGroup();
        
        if (processedCount > 0) {
            alert("Successfully applied tabular figures to " + processedCount + " text layer(s).");
        } else {
            alert("No text layers with numbers were found.");
        }
    } catch (e) {
        app.endUndoGroup();
        alert("Error: " + e.message);
    }
}

// Function to apply tabular figures to a text layer
function applyTabularFiguresToLayer(textLayer) {
    try {
        var textProp = textLayer.property("Text");
        if (!textProp) return false;
        
        var sourceTextProp = textProp.property("Source Text");
        if (!sourceTextProp) return false;
        
        var originalTextDoc = sourceTextProp.value;
        
        // Create a new TextDocument to work with
        var textDoc = new TextDocument(originalTextDoc);
        var fullText = textDoc.toString();
        
        // Check if text contains any numbers
        if (!/\d/.test(fullText)) {
            $.writeln("No numbers found in layer: " + textLayer.name);
            return false;
        }
        
        $.writeln("Processing layer: " + textLayer.name);
        
        // Apply tabular lining figures to entire text
        // Get character styling for the entire text range
        var charStyle = textDoc.getStyleAt(0, CHARACTER_STYLE);
        
        if (charStyle) {
            // Enable tabular lining figures OpenType feature
            charStyle.fontFeatures = "tlf";
            
            $.writeln("Applied tabular lining figures (tlf) to: " + textLayer.name);
        }
        
        // Set the modified text back to the layer
        sourceTextProp.setValue(textDoc);
        return true;
        
    } catch (e) {
        $.writeln("Error processing layer " + textLayer.name + ": " + e);
        return false;
    }
}

// Run the main function
main();
