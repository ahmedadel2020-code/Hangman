const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unnable to get puzzle')
    }
}


const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountryDetails(location.country)
    return country
}

const getCountryDetails = async (countryCode) => {
    const response = await fetch('//restcountries.com/v3.1/all')
        if(response.status === 200) {
            const data =  await response.json()
            return data.find((code) => code.cca2 === countryCode)
        } else {
            throw new Error(`Unnable to fetch country`)
        }
    
}

const getLocation = async () => {
    const response = await fetch("//ipinfo.io/json?token=96487569f24c3c")
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unnable to fetch location')
        }
}

