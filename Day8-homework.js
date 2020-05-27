
const getData = async() =>{
  let rawData = await fetch('https://striveschool.herokuapp.com/api/product/',{
    method : 'GET',
    headers: new Headers({
      'Authorization': 'Basic dXNlcjE4OlEyejVWN2hFRlU2SktSckU='
    })
  }  )
  let parsedData = await rawData.json()
  return parsedData
}
const sendData = async (productData) =>{
  let response = await fetch('https://striveschool.herokuapp.com/api/product/',{
    method:'POST',
    body: JSON.stringify(productData),
    headers : new Headers({
      'Authorization': 'Basic dXNlcjE4OlEyejVWN2hFRlU2SktSckU=',
      'Content-type': "application/json"
    })
  })
  return response
}

const deleteData = async() =>{
  let response = await fetch('https://striveschool.herokuapp.com/api/product/',{
    method:'DELETE',
    // body: JSON.stringify(productData),
    headers : new Headers({
      'Authorization': 'Basic dXNlcjE4OlEyejVWN2hFRlU2SktSckU=',
      'Content-type': "application/json"
    })
  })
  return response
}