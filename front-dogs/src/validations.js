export function validate(input) {
  let errors = {}
  const {name, value} = input
  const urlRegex = /^(https?:\/\/)?(www\.)?([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/;
  const letterRegex = /^[A-Za-z]+$/
  const numberRegex = /^[0-9]+$/

  switch (name) {

    case 'name':
      if (value.trim().length === 0) errors = {...errors, name: `This field is mandatory`}
      else if (!letterRegex.test(value)) errors = {...errors, name: 'Name should be only letters'}
      break;
    case 'minWeight':      
    case 'maxWeight':
    case 'minHeight':
    case 'maxHeight':
    case 'minLife_span':
    case 'maxLife_span':
      if (value.trim().length === 0) errors = {...errors, [name]: `This field is mandatory`}
      else if (!numberRegex.test(value)) errors = {...errors, [name]: `${name} should be only numbers`}
      break;

    case 'image':
      if (!urlRegex.test(value)) errors = {...errors, image: 'Image should be a valid URL'}
      break;
      
    default:
      break;
  }

  return errors
}

export function validateSubmit(allInputs, errors) {
  if (
    Object.keys(errors).length === 0 &&
    allInputs.name &&
    allInputs.image &&
    allInputs.minHeight &&
    allInputs.maxHeight &&
    allInputs.minWeight &&
    allInputs.maxWeight &&
    allInputs.minLife_span &&
    allInputs.maxLife_span
  ) return false
  return true
}

export function validateInputs(allInputs) {
  let errors = {}
  if (parseInt(allInputs.maxHeight) < parseInt(allInputs.minHeight)) errors = {...errors, height: 'Max height should be higher than min height'}
  if (parseInt(allInputs.maxWeight) < parseInt(allInputs.minWeight)) errors = {...errors, weight: 'Max weight should be higher than min weight'}
  if (parseInt(allInputs.maxLife_span) < parseInt(allInputs.minLife_span)) errors = {...errors, life_span: 'Max life span should be higher than min life span'}
  return errors
}