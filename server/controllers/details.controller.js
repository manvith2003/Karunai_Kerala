import jwt from "jsonwebtoken";

// Models
import User from "../models/User/user.models.js";
import Contributor from "../models/Contributor/contributor.models.js";
import Admin from "../models/Admin/admin.models.js";
import CareInstitution from "../models/Care Institution/careInstitution.models.js"
import Provider from "../models/Provider/provider.models.js";
import Volunteer from "../models/Volunteer/volunteer.models.js";

const roleModelMapping = {
    'Contributor': Contributor,
    'Admin': Admin,
    'Care Institution': CareInstitution,
    'Provider': Provider,
    'Volunteer': Volunteer
};

export const details = async (request, response) => {
    try {
            let user = request.user;

            if (!user) {
                return response.status(404).json({ msg: "User not found" });
            }

            if (!user.isDetailsFilled) {
                const role = user.role;
                const data = request.body;
                const userId = user._id;

                const savedDetails = await saveUserDetails(role, data, userId);

                // Update user's isDetailsFilled flag
                user.isDetailsFilled = true;
                await user.save();

                return response.status(200).json({ details: savedDetails });
            } else {
                return response.status(201).json({ msg: "Details already filled" });
            }
    } catch (error) {
        return response.status(500).json({ error: error.message, msg: "Error saving user details" });
    }
};

const saveUserDetails = async (role, data, userId) => {
    try {
        const Model = roleModelMapping[role];
        if (!Model) {
            throw new Error("Role not supported");
        }

        const savedDetails = new Model({ ...data, user: userId });
        await savedDetails.validate()
        await savedDetails.save();

        return savedDetails;
    } catch (error) {
        throw new Error(error.message);
    }
};
