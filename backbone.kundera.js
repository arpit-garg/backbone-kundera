
(function (root, factory) {
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

	window.onload = function onStart(){
		Persistence.createEntityManagerFactory("twissandra", null, "select","display");
	};
	
	Backbone.kundera = function() {

		create : function(model) {
			alert("Hello World");
			//var kobj = JSON.stringify(model)
			//em.persist(kobj, "Book");
		},

		read : function() {
			alert("Hello World!");
		},

		destroy : function() {

		}

		update : function() {

		}


	};	



	Backbone.kundera.sync = function(method, model, options) {
		 var store = model;

		 if (typeof options == 'function') {
    		options = {
      			success: options,
      			error: error
    		};
  		}


  		var resp;

  		switch(method) {
	  		case "read":    resp = model.id != undefined ? store.find(model) : store.findAll(); break;
	    	case "create":  resp = store.create(model);                            break;
	    	case "update":  resp = store.update(model);                            break;
	    	case "delete":  resp = store.destroy(model);                           break;
  		}
	}
			
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
		     
			}  */

		

	var obj = {};

	/*function selectQueryE(resp) {
			//alert("inside selectQuery");
			em.createQuery("select b from Book b", null,"selectSuccess","selectFailure");
			//alert("inside selectQuery");
			} */
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

 