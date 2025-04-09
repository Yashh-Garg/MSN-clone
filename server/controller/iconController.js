import Icon from "../models/Icon.js";

// Get all shortcuts
export const getIcons = async (req, res) => {
  try {
    const icons = await Icon.find().sort({ createdAt: -1 });
    res.json(icons);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// Add new shortcut
export const addIcon = async (req, res) => {
  const { name, url, icon } = req.body;
  if (!name || !url)
    return res.status(400).json({ message: "Name and URL are required" });

  try {
    const newIcon = new Icon({ name, url, icon: icon || name });
    await newIcon.save();
    res.status(201).json(newIcon);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create icon", error: err.message });
  }
};
// Delete icon

export const deleteIcon = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Icon.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
