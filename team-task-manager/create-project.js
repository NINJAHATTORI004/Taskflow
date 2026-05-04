const https = require('https');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjlmOGVmNWRhMjU0MzY2ZTM5YmM3NWIzIiwicm9sZSI6IkFkbWluIn0sImlhdCI6MTc3NzkyMTg4NSwiZXhwIjoxNzc3OTI1NDg1fQ.aXFQWQH5jq-ZGJ52-GUwEYd-m9xnMZjJsko0OMeNTJc';

const postData = JSON.stringify({
  name: 'Test Project',
  description: 'Test project for task assignment'
});

const options = {
  hostname: 'taskflow-backend-production-8d5e.up.railway.app',
  port: 443,
  path: '/api/projects',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': postData.length,
    'Authorization': 'Bearer ' + token
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => { 
    console.log('Status:', res.statusCode); 
    console.log('Response:', data); 
    process.exit(0);
  });
});

req.on('error', (e) => { 
  console.error('Error:', e.message);
  process.exit(1);
});

req.write(postData);
req.end();
