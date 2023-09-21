function validate(input) {
    //Validaciones
    let errors = {};
    if (!input.name) {
      errors.name = "Need a name";
    }
    if (!input.image) {
      errors.image = "Need an image URL";
    }
    if (!input.height) {
      errors.height = "Need a height";
    }
    if (!input.weight) {
      errors.weight = "Need a weight";
    }
    if (!input.life_span) {
      errors.life_span = "Need a life span";
    }
    return errors;
  }