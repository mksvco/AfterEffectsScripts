// Check if a composition is open and there's at least one selected shape layer
if (app.project.activeItem instanceof CompItem) {
    var comp = app.project.activeItem;
    var selectedLayers = comp.selectedLayers;
    if (selectedLayers.length > 0) {
        // Iterate through the selected layers
        for (var i = 0; i < selectedLayers.length; i++) {
            var originalLayer = selectedLayers[i];
            // Check if the selected layer is a shape layer
            if (originalLayer instanceof ShapeLayer) {
                var numGroups = originalLayer.property("ADBE Root Vectors Group").numProperties;
                // Duplicate the original layer for each group
                for (var j = 1; j <= numGroups; j++) {
                    var duplicatedLayer = originalLayer.duplicate();
                    var groupToDelete = j;

                    // Remove all but one group
                    for (var k = duplicatedLayer.property("ADBE Root Vectors Group").numProperties; k >= 1; k--) {
                        if (k !== groupToDelete) {
                            duplicatedLayer.property("ADBE Root Vectors Group").property(k).remove();
                        }
                    }
                    // Rename the duplicated layer
                    duplicatedLayer.name = originalLayer.name + " - Group " + j;
                }
            }
        }
    } else {
        alert("Please select a shape layer in your composition.");
    }
} else {
    alert("Please open a composition in Adobe After Effects.");
}
