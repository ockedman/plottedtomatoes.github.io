const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA2NTNkNWI0NDZlY2I1NTJlYzI3NTUzNjU0ODVjNyIsIm5iZiI6MTczODU4NTI0My40NzUwMDAxLCJzdWIiOiI2N2EwYjQ5Yjc3NmVkZjRiZTM5NTRjNjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MTDdS62ngDtk9JDJDJitRRX2Zvg3H3_e0KVHCB_h5Vs'
  }
};

fetch('https://api.themoviedb.org/3/configuration/countries?language=en-US', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));