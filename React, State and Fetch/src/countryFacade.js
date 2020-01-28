//Add imports here

const countryFacade = () => {

  const getLabels = () => {
    var labels = fetch("http://localhost:3333/labels")
    .then((response)=> {response.json();})
    
    return labels;
  }

  const getCountries = () => {
    var labels = fetch("http://localhost:3333/countries")
    .then((response)=> {
      return response.json();});
    return labels;
  }
  return {
    getLabels,
    getCountries
  }
}

export default  countryFacade();