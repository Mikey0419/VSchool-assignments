let query = '{ boards (limit:1) {name id description items { name column_values{title id type text }}} }';
const authkey = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE3MTE4Njk1NywidWlkIjoyNTcxMjgxMSwiaWFkIjoiMjAyMi0wNy0xOVQyMDowMzowNi4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTAzMzA3OTEsInJnbiI6InVzZTEifQ.VUGeKg3Sgryqz1rIEzHLQmgJdcYfjuAOtOm-SRHc7g0';

fetch ("https://api.monday.com/v2", {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : authkey
   },
   body: JSON.stringify({
     'query' : query
   })
  })
   .then(res => res.json())
   .then(res => console.log(JSON.stringify(res, null, 2)));