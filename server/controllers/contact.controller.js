//model
import Contact from "../models/Contact/contact.models.js";

export const submitContactForm = async (request, response) => {
  try {
    const newContact = new Contact({
      ...request.body
    });
    await newContact.save();
    return response
      .status(201)
      .json({ msg: "Contact form submitted successfully!" });
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
