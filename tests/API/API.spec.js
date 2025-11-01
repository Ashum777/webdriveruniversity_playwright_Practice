const {test,expect} = require("@playwright/test")
let token
const {request} = require("https")

test("verify the get API", async({request}) =>{
    let req = await request.get("https://reqres.in/api/users?page=2")
    let statusCode = await req.status()
    let res = await req.json() 
    console.log(statusCode);
    console.log(res);
    expect(statusCode).toBe(200)
    // expect(res.data[1]).toBe(6)
    expect(res.data[3].first_name).toEqual("Byron")
    console.log(res.data[3].first_name);
})
test("Verify the post API", async({request}) =>{
    let req1 = await request.post('https://reqres.in/api/users',{
       data : { "name": "Ashutosh",
        "job": "leader"}
    })
    let res1 = await req1.json()
    console.log(res1)
    expect(req1.status()).toBe(201)
    // expect(res1.job).toBe("leader")
    console.log(res1.createdAt)

})
test("Verify the PUT API", async({request}) =>{
     let req2 = await request.put('https://reqres.in/api/users/2', {
        data :
            {
                "name": "Ashish",
                "job": "zion resident"
            }
    })
    let res2 = await req2.json()
    console.log(res2);
    expect(req2.status()).toBe(200)
    console.log(res2.name) 
})

test("Verify the delete API", async({request}) =>{
    let req3 = await request.delete('https://reqres.in/api/users/2')
    let stCode = await req3.status()
    console.log(stCode);
    expect(stCode).toBe(204) 
})
test("Verify the get API EX2", async({request}) =>{
    let req4 = await request.get('https://gorest.co.in/public/v2/users', {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization":
                "Bearer 0a0a6a6d691a89afd6afe415607fb15b6e4b4c40b61bfed8dacc73619bb4a192",
        }
    })
    let res4 = await req4.json()
    let stat = await req4.status()
    console.log(res4);
    console.log(stat);
    expect(stat).toBe(200)
    console.log(res4[0].name);
    expect(res4[0].name).toBe("Anjushri Tagore")
})

test('Verifuy get in SOAp', async({request}) =>{
    let req5 = await request.get('https://soap-service-free.mock.beeceptor.com/CountryInfoService?WSDL')
    // let res = req5.status()
    console.log(req5);
    
})
test('SOAP POST request and validate response', async () => {
    // Create a new APIRequestContext
    const apiContext = await request.newContext({
      baseURL: 'https://soap-service-free.mock.beeceptor.com'
    });
  
    // Define the SOAP XML body
    const soapBody = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <ListOfContinentsByName xmlns="https://soap-service-free.mock.beeceptor.com/CountryInfoService">
      </ListOfContinentsByName>
    </soap:Body>
  </soap:Envelope>`;
  
    // Send the POST request
    const response = await apiContext.post('https://soap-test-server.mock.beeceptor.com/CountryInfoService.wso', {
      headers: {
        "Content-Type": "application/xml"
      }
    });
  
    // Verify status code
    expect(response.status()).toBe(200);
  
    // Get response text
    const respText = await response.text();
    console.log('SOAP response:', respText);
  ///
    // Simple content check: verify that the response contains expected tag
    // //expect(respText).toContain('<ListOfContinentsByNameResult');
  //
    // Further XML parsing // validation could be done if needed
  });