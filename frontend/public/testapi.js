var http = require("https");

var options = {
  "method": "GET",
  "hostname": "api.edx.org",
  "port": null,
  "path": "/catalog/v1/catalogs/415/courses",
  "headers": {
    "authorization": "JWT eyJhbGciOiJIUzI1NiJ9.eyJzY29wZXMiOiBbInJlYWQiLCAid3JpdGUiLCAicHJvZmlsZSIsICJlbWFpbCJdLCAiYWRtaW5pc3RyYXRvciI6IGZhbHNlLCAicHJlZmVycmVkX3VzZXJuYW1lIjogIm5lb3plbndlYiIsICJmaWx0ZXJzIjogW10sICJpYXQiOiAxNTQ4NzcwMDE3LCAic3ViIjogIjg4ZTU1YTU4ZmIwNjY5MTZjNTIxZmZhOTcyMzA2YzMxIiwgImZhbWlseV9uYW1lIjogIiIsICJhdWQiOiAicmlubXlieWVkbnVhdzVwaGxpZENvY0R1ZGJ5bGJPYkRpYkpvZGJvc2dldHNFYmFsZDQiLCAiaXNzIjogImh0dHBzOi8vY291cnNlcy5lZHgub3JnL29hdXRoMiIsICJlbWFpbF92ZXJpZmllZCI6IHRydWUsICJuYW1lIjogIm5lb3plbndlYiIsICJ2ZXJzaW9uIjogIjEuMS4wIiwgImdpdmVuX25hbWUiOiAiIiwgImV4cCI6IDE1NDg3NzM2MTcsICJpc19yZXN0cmljdGVkIjogZmFsc2UsICJlbWFpbCI6ICJuZW96ZW53ZWJAZ21haWwuY29tIn0.CADqPGH7vzel_KyinYsCEBJLNBe3P4UGpb9x1CXWxYQ",
    "content-length": "0"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();