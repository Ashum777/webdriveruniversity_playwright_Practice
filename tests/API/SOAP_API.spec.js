// soapApiBeeceptorTest.spec.js
const { test, expect } = require('@playwright/test');
const { parseStringPromise } = require('xml2js');
import {XMLParser} from 'fast-xml-parser'
// import { parseStringPromise } from 'xml2js';

test('SOAP POST to Beeceptor mock and validate XML response', async ({ request }) => {
  // Define SOAP request body
  const soapBody = `<?xml version="1.0" encoding="utf‑8"?>
  <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <ListOfContinentsByName xmlns="http://www.oorsprong.org/websamples.countryinfo" />
    </soap:Body>
  </soap:Envelope>`;

  // Send the POST request using request fixture
  const response = await request.post(
    'https://soap-practice.free.beeceptor.com/CountryInfoService', {
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        'SOAPAction': 'ListOfContinentsByName'
      },
      body: soapBody
    }
  );

  // Validate HTTP status
  console.log(response.status());
  expect(response.status()).toBe(200);

  // Get response text (XML)
  const respText = await response.text();
  console.log('SOAP Response:', respText);

  // Basic string validations
//   expect(respText).toContain('<soap:Envelope');
//   expect(respText).toContain('<soap:Body>');
//   expect(respText).toContain('<ListOfContinentsByNameResponse')

  // Parse XML and perform structured assertions
  const parsed = await parseStringPromise(respText, { explicitArray: false });
  console.log(parsed);
  
//   const envelope = parsed['soap:Envelope'];
//   expect(envelope).toBeDefined();
//   const body = envelope['soap:Body'];
//   expect(body).toBeDefined();
//   const opResponse = body['ListOfContinentsByNameResponse'];
//   expect(opResponse).toBeDefined();
//   const result = opResponse['ListOfContinentsByNameResult'];
//   expect(result).toBeDefined();

//   // Expect at least one continent object with sCode field
//   const continents = result['tContinent'];
//   expect(continents).toBeDefined();

//   // If single object or array
//   if (Array.isArray(continents)) {
//     expect(continents.length).toBeGreaterThan(0);
//     expect(continents[0]['sCode']).toBeDefined();
//   } else {
//     expect(continents['sCode']).toBeDefined();
//   }
});

test('verify the second soap request',async({request}) =>{
    const soapbody1 = `<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <ListOfContinentsByName xmlns="http://www.oorsprong.org/websamples.countryinfo" />
  </soap12:Body>
</soap12:Envelope>`
    
    let response1 = await request.post('http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL',{
        headers : {
            'Content-Type': 'application/soap+xml; charset=utf-8',
            'SOAPAction': 'ListOfContinentsByName'
          },
        body : soapbody1

    })
    console.log(response1.status());
    let resText = await response1.text()
    console.log(resText);
    
})

// soapApiTest.spec.js

test('SOAP request to ListOfContinentsByName and validate response', async ({ request }) => {
  const endpoint = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso';
  const soapBody = `<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <ListOfContinentsByName xmlns="http://www.oorsprong.org/websamples.countryinfo" />
  </soap12:Body>
</soap12:Envelope>`;

  const response = await request.post(endpoint, {
    headers: {
      'Content-Type': 'application/soap+xml; charset=utf-8',
      'SOAPAction': 'ListOfContinentsByName'
    },
    data: soapBody
  });

  // Assert HTTP status code
  console.log(response.status());
  
  expect(response.status()).toBe(200);

  // Parse and validate XML response
  const xmlResponse = await response.text();
  const parser = new XMLParser()
  const JSONData = parser.parse(xmlResponse) 
  console.log('converted to json',JSONData);
  console.log(JSONData.envelope.body());
  const body1 = jsonData['soap:Envelope']['soap:Body'];
  console.log(body1);
  

  console.log(xmlResponse);
  
  const parsedResponse = await parseStringPromise(xmlResponse);
  console.log(parsedResponse);
  
    
  const envelope = parsedResponse['soap12:Envelope']//['soap12:Body']
//   ['ListOfContinentsByNameResponse']['ListOfContinentsByNameResult']['tContinent'][0];
  console.log(envelope);
  
//   expect(envelope).toBeDefined();

  const body = envelope['soap12:Body'];
//   expect(body).toBeDefined();

  const responseBody = body['ListOfContinentsByNameResponse'];
  console.log(responseBody);
  
//   expect(responseBody).toBeDefined();
//   console.log(responseBody);
  

//   const result = responseBody['ListOfContinentsByNameResult'];
//   expect(result).toBeDefined();

//   const continents = result['tContinent'];
//   expect(continents).toBeDefined();
//   expect(Array.isArray(continents)).toBe(true);
//   expect(continents.length).toBeGreaterThan(0);

//   // Validate first continent
//   const firstContinent = continents[0];
//   expect(firstContinent['sCode']).toBe('AF');
//   expect(firstContinent['sName']).toBe('Africa');
});
