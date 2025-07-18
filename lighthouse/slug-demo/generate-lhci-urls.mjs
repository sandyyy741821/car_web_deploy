import fs from 'fs';
import fetch from 'node-fetch'; 

const BASE_URL = "https://dev.futurx.app/college/"; 
const API_URL = "https://api-dev.futurx.app/v1/college-list?degree=";
const DEGREES = ["bachelor", "master", "doctoral", "associate"];
const AUTH_TOKEN = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdNWHRkVjVKVnpPYWJ6SEpWOHM1USJ9.eyJpc3MiOiJodHRwczovL2Rldi1ncmF2aXR5LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNDQ0MzEzMTQ1MzM5MjA0NzQ3OCIsImF1ZCI6WyJodHRwOi8vbG9jYWxob3N0OjQwMDAiLCJodHRwczovL2Rldi1ncmF2aXR5LnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3NDk3OTU1NzEsImV4cCI6MTc0OTc5OTE3MSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBvZmZsaW5lX2FjY2VzcyIsImF6cCI6IlQxNkFwcXpzWmVmUEVhUkt0akp2dmZXSjlSQXdTM1YwIn0.Cy_5qq9rIv763SlDEuCM4ozu6BLQXgb8Pl-jICXPKI7nlXelwqBn3x2UfeskeRoeuPD0rUZm-JcP5K5JkrsqAPxH0sxeuq7ZaV697cd1Ck6kvrstNdHOLevriRPMqgIXfZOXjtPjEtVnry96jR5toS-GE_tTlNe38KBw3JqNKfXfcmnv2dHIlW4v9UEJ9LKeSUqJI-k3dJ8KrhKHGELgcvwkueZ82AJ9ZRQ8w2owdQacO8-laowu66Y_hWSUvTLN3nHsDc9R250WE7ljaIhDIHC-VQxg7gFLf9fhsYOtaIYBpJMm_NXxLtckLmSAK8CZGRzc6D6Oom0I-FQgAVLvhw"; // replace with real token

const headers = {
  "Authorization": AUTH_TOKEN,
  "Content-Type": "application/json"
};

let allUrls = [];

for (const degree of DEGREES) {
  try {
    const res = await fetch(`${API_URL}${degree}`, { headers });
    const json = await res.json();
    const data = json.data;

    const urls = data
      .filter(college => college.collegeSlug)
      .map(college => `${BASE_URL}${college.collegeSlug}`);

    allUrls.push(...urls);
  } catch (err) {
    console.error(`Failed to fetch for ${degree}:`, err.message);
  }
}

fs.mkdirSync(".lighthouseci", { recursive: true });
fs.writeFileSync(".lighthouseci/urls.txt", allUrls.join("\n"));

console.log("✅ LHCI URLs generated:");
console.log(allUrls);
