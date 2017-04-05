var app = angular.module("myApp", []);

//---------
// Tipos de Depto
//---------
app.controller("myCtrl", function($scope) {
  $scope.records = [
       {
            "clase" : "active",
            "tipoid" : "tipoa",
            "imageUrl" : "./images/loga-tipo-a.jpg",
            "tipoTitle" : "Tipo A",
            "orientacion" : "Oriente",
            "capacidad" : "1 Dormitorio + 1 Baño",
            "superficieUtil" : "40m² Aprox.",
            "superficieTerraza" : "7m² Aprox.",
            "superficieTotal" : "47m² Aprox.",
            "superficieMunicipal" : "40m² Aprox."
        },

        {
          "clase" : "",
          "tipoid" : "tipoaa",
          "imageUrl" : "./images/loga-tipo-aa.jpg",
          "tipoTitle" : "Tipo AA",
          "orientacion" : "Oriente",
          "capacidad" : "1 Dormitorio + 1 Baño + terraza privada",
          "superficieUtil" : "41m² Aprox.",
          "superficieTerraza" : "7m² Aprox.",
          "superficie2" : "33m² Aprox.",
          "superficieTotal" : "81m² Aprox.",
          "superficieMunicipal" : "41m² Aprox."
        },

        {
          "clase" : "",
          "tipoid" : "tipob",
          "imageUrl" : "./images/loga-tipo-b.jpg",
          "tipoTitle" : "Tipo B",
          "orientacion" : "Sur - Oriente",
          "capacidad" : "2 Dormitorios + 2 Baños",
          "superficieUtil" : "62m² Aprox.",
          "superficieTerraza" : "9m² Aprox.",
          "superficie2" : "",
          "superficieTotal" : "71m² Aprox.",
          "superficieMunicipal" : "63m² Aprox."
        },

        {
          "clase" : "",
          "tipoid" : "tipobb",
          "imageUrl" : "./images/loga-tipo-bb.jpg",
          "tipoTitle" : "Tipo BB",
          "orientacion" : "Sur - Poniente",
          "capacidad" : "2 Dormitorios + 2 Baños + terraza privada",
          "superficieUtil" : "62m² Aprox.",
          "superficieTerraza" : "9m² Aprox.",
          "superficie2" : "45m² Aprox.",
          "superficieTotal" : "116m² Aprox.",
          "superficieMunicipal" : "63m² Aprox."
        },

        {
          "clase" : "",
          "tipoid" : "tipoc",
          "imageUrl" : "./images/loga-tipo-c.jpg",
          "tipoTitle" : "Tipo C",
          "orientacion" : "Sur - Poniente",
          "capacidad" : "2 Dormitorios suite + 2 Baños",
          "superficieUtil" : "64m² Aprox.",
          "superficieTerraza" : "9m² Aprox.",
          "superficie2" : "",
          "superficieTotal" : "73m² Aprox.",
          "superficieMunicipal" : "69m² Aprox."
        },

        {
          "clase" : "",
          "tipoid" : "tipoc1",
          "imageUrl" : "./images/loga-tipo-c1.jpg",
          "tipoTitle" : "Tipo C1",
          "orientacion" : "Poniente",
          "capacidad" : "2 Dormitorios suite + 2 Baños",
          "superficieUtil" : "64m² Aprox.",
          "superficieTerraza" : "14m² Aprox.",
          "superficie2" : "",
          "superficieTotal" : "78m² Aprox.",
          "superficieMunicipal" : "71 m² Aprox."
        },

        {
          "clase" : "",
          "tipoid" : "tipocc",
          "imageUrl" : "./images/loga-tipo-cc.jpg",
          "tipoTitle" : "Tipo CC",
          "orientacion" : "Poniente",
          "capacidad" : "2 Dormitorios suite + 2 Baños + terraza privada",
          "superficieUtil" : "64m² Aprox.",
          "superficieTerraza" : "14m² Aprox.",
          "superficie2" : "",
          "superficieTotal" : "78m² Aprox.",
          "superficieMunicipal" : "71 m² Aprox."
        },

        {
          "clase" : "",
          "tipoid" : "tipod",
          "imageUrl" : "./images/loga-tipo-d.jpg",
          "tipoTitle" : "Tipo D",
          "orientacion" : "Poniente",
          "capacidad" : "3 Dormitorios + 2 Baños",
          "superficieUtil" : "95m² Aprox.",
          "superficieTerraza" : "16m² Aprox.",
          "superficie2" : "",
          "superficieTotal" : "111m² Aprox.",
          "superficieMunicipal" : "97 m² Aprox."
        },

        {
          "clase" : "",
          "tipoid" : "tipodd",
          "imageUrl" : "./images/loga-tipo-dd.jpg",
          "tipoTitle" : "Tipo DD",
          "orientacion" : "Nor - Poniente",
          "capacidad" : "3 Dormitorios + 2 Baños + terraza privada",
          "superficieUtil" : "97m² Aprox.",
          "superficieTerraza" : "13m² Aprox.",
          "superficie2" : "52m²",
          "superficieTotal" : "162m² Aprox.",
          "superficieMunicipal" : "99 m² Aprox."
        },

        {
          "clase" : "",
          "tipoid" : "tipoe",
          "imageUrl" : "./images/loga-tipo-e.jpg",
          "tipoTitle" : "Tipo E",
          "orientacion" : "Nor - Poniente",
          "capacidad" : "3 Dormitorios + 2 Baños",
          "superficieUtil" : "83m² Aprox.",
          "superficieTerraza" : "14m² Aprox.",
          "superficie2" : "3m²",
          "superficieTotal" : "100m² Aprox.",
          "superficieMunicipal" : "89 m² Aprox."
        },

        {
          "clase" : "",
          "tipoid" : "tipoee",
          "imageUrl" : "./images/loga-tipo-ee.jpg",
          "tipoTitle" : "Tipo EE",
          "orientacion" : "Nor - Oriente",
          "capacidad" : "3 Dormitorios + 2 Baños + terraza privada",
          "superficieUtil" : "85m² Aprox.",
          "superficieTerraza" : "12m² Aprox.",
          "superficie2" : "2m²",
          "superficieTotal" : "100m² Aprox.",
          "superficieMunicipal" : "89 m² Aprox."
        }
    ]
});


//---------
// Paquetes FIBARO
//---------
app.controller("FibaroControl", function ($scope) {
  $scope.paquetes = [

    {
      "imagenProducto" : "./images/home-center-2.jpg",
      "nombreProducto" : "Home Center 2",
      "cantProducto": "1 unidad",
      "descProducto": "Controlador principal del sistema FIBARO.",
      "linkProducto" : "https://tuhogarinteligente.cl/home-center-2/"
    },

    {
      "imagenProducto" : "./images/motion-sensor.jpg",
      "nombreProducto" : "Motion Sensor",
      "cantProducto": "1 unidad",
      "descProducto": "Detecta el más mínimo movimiento, temperatura, vibración e intensidad de luz.",
      "linkProducto" : "https://tuhogarinteligente.cl/motion-sensor/"
    },

    {
      "imagenProducto" : "./images/smoke-sensor.jpg",
      "nombreProducto" : "Smoke Sensor",
      "cantProducto": "1 unidad",
      "descProducto": "Detecta humo y cambios drásticos de temperatura, activando la alarma.",
      "linkProducto" : "https://tuhogarinteligente.cl/smoke-sensor/"
    },

    {
      "imagenProducto" : "./images/flood-sensor.jpg",
      "nombreProducto" : "Flood Sensor",
      "cantProducto": "1 unidad",
      "descProducto": "Detector de inundación, constantemente mide temperatura.",
      "linkProducto" : "https://tuhogarinteligente.cl/flood-sensor/"
    },

    {
      "imagenProducto" : "./images/dimmer-2.jpg",
      "nombreProducto" : "Dimmer",
      "cantProducto": "2 unidades",
      "descProducto": "Varía la intensidad de las luces. * Fuentes dimeables.",
      "linkProducto" : "https://tuhogarinteligente.cl/dimmer/"
    },

    {
      "imagenProducto" : "./images/cerradura-inteligente.jpg",
      "nombreProducto" : "Cerradura Inteligente",
      "cantProducto": "2 unidades",
      "descProducto": "Permite la integración al sistema FIBARO.",
      "linkProducto" : "https://tuhogarinteligente.cl/cerradura-inteligente/"
    },

  ]
});
