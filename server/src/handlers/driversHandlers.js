const { driversController } = require("../controllers/driversController");


const getHandlerDrivers = async (req, res) => {
  try {
    let respuesta = await driversController();
    
    res.status(200).json({
      respuesta,
      message: "Data retrieved and saved successfully",
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getHandlerDriversById = (req, res) =>  {
    const {id} = req.params; //en este caso req está llegando por params, por lo tanto para extraer el id se desestructura
    res.status(200).send(`detalle del ${id} del usuario`)
};

const getHandlerDriversByName = (req, res) => {
    const { name } = req.query; // en este caso req está llegando por query, por lo tanto para extraer el name se desestructura
    res.status(200).send(`aquí están todos los usuarios con el nombre ${name}`);
  };

  const postHandlerDriver = (req, res) => {
    const { name, surname, age } = req.body; // en este caso req está llegando por body, por lo tanto para extraer los datos se desestructura
    res.status(201).send(`usuario creado correctamente con los datos ${name}, ${surname}, ${age}`);
  };


  module.exports = {
    getHandlerDrivers,
    getHandlerDriversById,
    getHandlerDriversByName,
    postHandlerDriver
};




