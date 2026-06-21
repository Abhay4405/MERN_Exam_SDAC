import Event from "../Model/EventModel.js";

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};