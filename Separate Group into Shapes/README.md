# Split Shape Layer into One-Group Duplicates (After Effects)

Duplicate each selected **shape layer** so that every duplicate contains **exactly one** of the original layer’s _Contents_ groups.  
The script renames each duplicate as `Original Name – Group N`.

---

## What this script does

- Checks that you have an open comp and at least one selected **Shape Layer**.
- For each selected shape layer:
  - Reads the number of groups under **Contents** (internally `ADBE Root Vectors Group`).
  - Creates one duplicate per group.
  - On each duplicate, **removes all other groups**, leaving only that one.
  - Renames the duplicate to `〈Layer Name〉 – Group 〈index〉`.
- Leaves the original layer untouched.

---

## Installation

You can run it ad-hoc or install it permanently.

### Option A — Run once
1. Save the code to a file named, for example, `Separate Groups into Shapes.jsx`.
2. In After Effects, go to **File → Scripts → Run Script File…**
3. Choose the `.jsx` file.

### Option B — Install
1. Save as `Separate Groups into Shapes.jsx`.
2. Move it to your Scripts folder:
   - **macOS:** `/Applications/Adobe After Effects <version>/Scripts/`
   - **Windows:** `C:\Program Files\Adobe\Adobe After Effects <version>\Support Files\Scripts\`
3. Restart After Effects.
4. Run via **File → Scripts → Separate Groups into Shapes**.

---

## How to use

1. Open a composition.
2. Select one or more **shape layers** that contain groups in **Contents** (e.g., `Group 1`, `Group 2`, …).
3. Run the script.
4. You’ll get N new layers (per original) named:
```Original Layer Name – Group 1
Original Layer Name – Group 2
etc...```

5. Mute, solo, or pre-comp the resulting layers as needed.

---

## Notes & behavior details

- The script reads from `ADBE Root Vectors Group` (the internal name for **Contents** on a shape layer).
- Duplicates preserve:
- Transforms, effects, track mattes, and switches of the original layer.
- Layer order (each duplicate appears above the original, in order of creation).
- **Original layer is not modified.**
- **Empty groups:** If a group has no visible contents, you’ll still get a duplicate for it.
- **Multiple selections:** All selected shape layers are processed.
