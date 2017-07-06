$(document).ready(function () {
  $('#formulario-contacto').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      firstname: "required"
    },

    messages: {
      email: {
        required: 'Por favor ingrese su correo electrónico',
        email: 'Por favor ingrese un correo válido'
      }
    }
  });
});


jQuery.extend(jQuery.validator.messages, {
    required: "Este campo es requerido",
    remote: "Por favor revisa este campo",
    email: "Por favor ingresa un email válido",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});
