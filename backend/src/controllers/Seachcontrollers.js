const Dev = require("../models/Dev");
const parseStringarray = require("../utils/parseStringarray");

module.exports = {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;

    const techsArray = parseStringarray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray // Se tiver pelo menos um tech, ele encontra, nao precisa ser as techs todas iguais
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000 // Distancia em metros
        }
      }
    });

    return response.json({ devs });
  }
};