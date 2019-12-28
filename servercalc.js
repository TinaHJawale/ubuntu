http=require("http");
url=require("url");
fs=require("fs");
query=require ("querystring");
module=require("./modulec");

processRequest=function(req,resp)
{
	d=url.parse(req.url);
	switch(d.pathname)
	{
	case "/":
			resp.writeHead(200,{'Content-Type':'text/html'})
			fs.readFile("form1.html",function(error,data)
			{
			if(error)
			{
			resp.end("error");
			console.log("in error");
			}
			else{
				resp.end(data).toString;
				console.log("in data");
			}
			
			});
			break;
	
	case "/cal":
			
			  data=query.parse(d.query);
			  resp.writeHead(200,{'Content-Type':'text/html'})
			switch(data.a)
			{
					case'addition':
					{
					console.log("in addition case");
					f=module.addition(data.num1,data.num2);
					resp.write(f.toString());
					resp.end();
					break;
					}
					
			
					case'substraction':
					{
						
					t=module.substraction(data.num1,data.num2);
					
					resp.write(t.toString());
					resp.end();
					break;
				
					}	
					case'multiplication':
					{
						console.log("in multiplication");
						m=module.multiplication(data.num1,data.num2);
					resp.write(m.toString());
					resp.end();
					break;
					}
					case'division':
					{
						console.log("in division");
						m=module.division(data.num1,data.num2);
					resp.write(m);
					resp.end();
						
						break;
					}
			break;
			}
	}
}

http.createServer(processRequest).listen(1500);
console.log("servercalc is on");