//$.getScript('js/kundera.js', 
(function(root, factory) {
  if (typeof exports === 'object' && typeof require === 'function') {
    module.exports = factory(require("backbone"), require('underscore'));
  } else if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["backbone", "underscore"], function(Backbone, _) {
      // Use global variables if the locals are undefined.
      return factory(Backbone || root.Backbone, _ || root._);
    });
  } else {
    factory(Backbone, _);
  }
 }(this, function(Backbone, _) { 


window.kunderaResponse;
 	window.onload = function onStart(){
 	/*	alert("in kundera");
 		var imported = document.createElement('script');
		imported.type = 'text/javascript';
		imported.src = 'http://localhost:8080/KunderaJSRest/kundera.js';
		imported.setAttribute('async', true);
		document.head.appendChild(imported);
		//$.getScript('js/kundera.js'); */




		Kundera.setKunderaRestUrl("http://localhost:8080/KunderaJSRest");
		Persistence.createEntityManagerFactory("twissandra", null, "select","display");
 		
	};
	//Backbone.Kundera = function()




 	Backbone.sync = function(method, model, options) {

 		

		success = function (result) {
			
			/*if(options.success) */{
				options.success(result);

			}
			//kunderaResponse = result;
			//console.log(options.success);
			console.log(result);

		}

		error = function(result) {
			if(options.error) {
				options.error(result);
			}
		}

		options || (options = {});

		switch(method) {
			case 'create':
				var kobj = JSON.stringify(model)
				 em.persist(kobj, "Book");
				break;
			case 'delete':
					alert("before");
					em.deleteEntity(id, "Book");		
					alert("after");

				break;
			case 'update':
				break;
			case 'read':
			    var response;		
				return em.createQuery("select b from Book b", null);
				//return "Hello";
				selectSuccess = function(resp){
					success(resp);
					//kunderaResponse = resp;
					obj = Kundera.fromJSONObject(resp);
					options.success(response);

					//console.log(obj);
				};
				selectFailure = function(resp){
         			 return resp;
				};
				//console.log(kunderaResponse);
				//return response;
				break;

		}	
		//console.log(obj);
		//return obj;
	};
	
	//var obj = {};
	/*selectSuccess = function(resp){
				obj = Kundera.fromJSONObject(resp);
				return obj;
				//console.log(obj);

			};

	selectFailure = function(resp){
         		 return resp;
			};*/

}));		
			/*initialise : function() {
		        //alert("inside initialise");
				Persistence.createEntityManagerFactory("twissandra", null, "selectQueryE","display");
			//	alert("after initialise");

			}



      			selectQueryE : function() {
				//alert("inside selectQuery");
				em.createQuery("select b from Book b", null,"selectSuccess","selectFailure");
				//alert("inside selectQuery");
			};

		  selectSuccess :function(resp){
		     	 console.log(resp);
		     
			},


			selectFailure :function(resp){
		     	 console.log(resp);
		     
			}  

		

	var obj = {};

	function selectQueryE(resp) {
			//alert("inside selectQuery");
			em.createQuery("select b from Book b", null,"selectSuccess","selectFailure");
			//alert("inside selectQuery");
			} 
		function select(){}

    		function selectSuccess(resp){
         	 //console.log(resp);
		 obj = Kundera.fromJSONObject(resp);
         	 //console.log(obj);
		display(obj);
		}


		function selectFailure(resp){
         	 console.log(resp);
		}

		function display(obj) {
				var array = obj["book"];
				var html = "<table><th>Author</th><th>ISBN</th><th>Publication</th><th>Options</th>";
				for (var i in array){
				
					html += "<tr><td>" + array[i]["author"] + "</td><td>" + array[i]["isbn"] + "</td><td>" +array[i]["publication"] + "</td><td><div><button>Update</button><button onClick='deleteRow(" + array[i]["isbn"] +")'>Delete</button></div></td></tr>";
}	
		
		html += "</table></html>"
		document.getElementById("data").innerHTML = html;		

		}

		function deleteRow(id){
		em.deleteEntity(id, "Book");		
		}
*/