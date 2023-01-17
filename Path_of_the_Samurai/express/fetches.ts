///////////////////

fetch("http://localhost:3000/courses/", { method: "GET" })
  .then((res) => res.json())
  .then((json) => console.log(json));

///////////////////

fetch("http://localhost:3000/courses", {
  method: "POST",
  body: JSON.stringify({
    title: "dba",
  }),
  headers: {
    "content-type": "application/JSON",
  },
})
  .then((res) => res.json())
  .then((json) => console.log(json));

///////////////////

fetch("http://localhost:3000/courses/1", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((json) => console.log(json));

///////////////////

fetch("http://localhost:3000/courses/3", {
  method: "PUT",
  body: JSON.stringify({
    title: "dba",
  }),
  headers: {
    "content-type": "application/JSON",
  },
})
  .then((res) => res.json())
  .then((json) => console.log(json));