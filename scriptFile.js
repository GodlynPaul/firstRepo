	var app = angular.module("myApp",["ngRoute"]);
	app.controller("SimpleController", function($scope){
		$scope.namesList=["Godlyn Paul","Soumya John","Vaibav John","Reshmi John","Ashwin John"];
		userData=[{name:'Godlyn Paul',city:'Kochi'},
		{name:'Soumya John',city:'BMB'},
		{name:'Vaibav John',city:'DRD'},
		{name:'Reshmi John',city:'GJT'},
		{name:'Ashwin John',city:'KTM'}];
		$scope.customers=userData;
		$scope.userDataList=userData;
		$scope.states = [{name:'KL',cities:[{name:'KL1'},{name:'KL2'},{name:'KL3'}]},
		{name:'KA',cities:[{name:'KA1'},{name:'KA2'},{name:'KA3'}]},
		{name:'MH',cities:[{name:'MH1'},{name:'MH2'},{name:'MH3'}]}];
		});


// 	app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
// 		$routeProvider
// 			.when('/view1',{controller:'rpController',templateUrl:'template/view1.html'})
// 			.when('/view2',{controller:'rpController',templateUrl:'template/view2.html'})
// 			.when('/view3',{controller:'rpController',templateUrl:'template/view3.html'})
// 			.when('/view4/:day/:month/:year',{controller:'rpController',templateUrl:'template/view4.html'})
//  			.otherwise({redirectTo:'/view1'})
// /*  	$locationProvider.html5Mode(false);
//  	   	$locationProvider.hashPrefix('!');	*/
// 		$locationProvider.html5Mode({enabled: true, requireBase: true, rewriteLinks: true});
// 	}]);

	app.controller("rpController",function($scope,$routeParams,$rootScope,$log){
		$scope.rCustomers=[{name:'Godlyn Paul',city:'Kochi'},{name:'Soumya John',city:'BMB'},{name:'Vaibav John',city:'DRD'},{name:'Reshmi John',city:'GJT'},{name:'Ashwin John',city:'KTM'}];
		$scope.addCustomer=function(){
			$scope.rCustomersb.push({
				name:$scope.newCustomer.rInName,
				city:$scope.newCustomer.rInCity
			})
		};
		$scope.routeParamsData = "Date :"+$routeParams.day+"-"+$routeParams.month+"-"+$routeParams.year;
/*		$scope.$on("$routeChangeStart",function(event,next,current){
			if(!confirm("Do you.. ?"+next.$$route.originalPath)){
				event.preventDefault();
			}
		});			*/
/*		$scope.$on("$locationChangeStart",function(event,next,current){
			if(!confirm("Do you.. ?"+next)){
				event.preventDefault();
			}
		}); 		*/

		$scope.$on("$routeChangeStart",function(event,next,current){
			$log.debug("RCStart");
			$log.log(event);
			$log.warn(next);
			$log.info(current);
		});
		$scope.$on("$routeChangeSuccess",function(event,next,current){
			$log.debug("RCSuccess")
		});
		$rootScope.$on("$locationChangeStart",function(event,next,current){
			$log.debug("LCStart");
			$log.log(event);
			$log.warn(next);
			$log.info(current);
		});
		$rootScope.$on("$locationChangeSuccess",function(event,next,current){
			$log.debug("LCSuccess")
		});
	});

// 	app.controller("viewParamController",function($scope,$routeParams){
// 		$scope.routeParamsData = "Date :"+$routeParams.day+"-"+$routeParams.month+"-"+$routeParams.year;
// 	})

	app.controller("eventController",function($scope){
	 	$scope.technologies =[{name:"AngularJS",like:0,dislike:0},
	 	{name:"NodeJS",like:0,dislike:0},
	 	{name:"JQuery",like:0,dislike:0},
	 	{name:"JavaScript",like:0,dislike:0}]
	 	$scope.incTechLike =function(tech){
	 		tech.like++;
	 	}
	 	$scope.incTechDisLike =function(tech){
	 		tech.dislike++;
	 	}
	 	$scope.undoLike = function(tech){
	 	if(tech.like>0){tech.like--;}}
	 	$scope.clearAllLikes=function(){
	 		angular.forEach(technologies,function(value,key){
	 	});
	 	}
	});

	app.controller("multiplefilter",function($scope){
	$scope.employees=[
    	{"id": "999399000098982285","firstname": "Balraj1","lastname": "Bhullar05","email": "balraj_bhullar+2775613_om@apple.com"},
	    {"id": "999394000098982285","firstname": "Balraj2","lastname": "Bhullar01","email": "balraj_bhullar+2775623_om@apple.com"},
	    {"id": "999994500098982285","firstname": "Balraj3","lastname": "Bhullar02","email": "balraj_bhullar+2775633_om@apple.com"},
   		{"id": "999999045609982285","firstname": "2Balraj","lastname": "Bhullar03","email": "balraj_bhullar+2775653_om@apple.com"},
    	{"id": "999999000456982285","firstname": "3Balraj","lastname": "01Bhullar","email": "balraj_bhullar+2775643_om@apple.com"},
    	{"id": "999999006740982285","firstname": "4Balraj","lastname": "02Bhullar","email": "balraj_bhullar+2775663_om@apple.com"},
			{"id": "999999000098985628","firstname": "5Balraj","lastname": "03Bhullar","email": "balraj_bhullar+2775673_om@apple.com"},
			{"id": "999999000098985675","firstname": "1Balraj","lastname": "04Bhullar","email": "balraj_bhullar+2775683_om@apple.com"},
  	]
   	$scope.employees2 = [
  		{name:"Ben",gender:1,salary:5000,dob:new Date("Thu Jan 01 1970 05:29:57 GMT+0530 (IST)")},
  		{name:"Aen",gender:2,salary:5100,dob:new Date("Thu Jan 02 1970 05:29:57 GMT+0530 (IST)")},
  		{name:"Cen",gender:3,salary:5200,dob:new Date("Thu Jan 03 1970 05:29:57 GMT+0530 (IST)")},
  		{name:"Den",gender:1,salary:5300,dob:new Date("Thu Jan 04 1970 05:29:57 GMT+0530 (IST)")},
 		{name:"Fen",gender:2,salary:5400,dob:new Date("Thu Jan 05 1970 05:29:57 GMT+0530 (IST)")},
 		{name:"Gen",gender:3,salary:5500,dob:new Date("Thu Jan 06 1970 05:29:57 GMT+0530 (IST)")}
 	]
 	$scope.hideSalary;
	});

	app.filter("genderFilter",function (){
		return function(gender){
				switch(gender){
					case 1:return("Male");
					case 2:return("Female");
					case 3:return("Not disclosed");
				}
			}
	})

	app.controller("perSalary",['$scope','mathServices',function($scope,mathServices){
   		employees4 = [
  		{name:"Ben",salary:1000},
  		{name:"Aen",salary:2100},
  		{name:"Cen",salary:3200},
  		{name:"Den",salary:4300},
 		{name:"Fen",salary:5400},
 		{name:"Gen",salary:6500}
	 	]
 		$scope.employees4 = mathServices.perSalFunc(employees4);
 	}]);

	app.factory("mathServices",function(){
		return {
				perSalFunc: function(employees){
			 		for(i=0;i<employees.length;i++){
 						employees[i].salary=(employees[i].salary/10000)*100;
 						employees[i].salary= Math.floor(employees[i].salary);
 					}
 				return employees;
				}
			}
	});

	app.controller("anchorScroll",function($scope,$location,$anchorScroll){
		$scope.scrollTo = function(scrollLoc){
			$location.hash(scrollLoc);
			$anchorScroll.yOffset = 100;
			$anchorScroll();
		}
	});

	console.log($.datepicker.formatDate("d M yy", new Date(12-12-2016)));

	Person = function(name,age){
		this.name=name;
		this.age=age;
	}

	app.provider("gProvider",function(){
		this.$get=function(){
			console.log("gProvider");
			return "returnedGprovider";
		}
	});

	app.factory("gFactory",function(){
		return new Person("GodlynPaul","24");
	});

	app.service("gService2",function(){
		return new Person("GodlynPaul","24");
	});

	app.service("gService",function(){
		this.gServiceVal=function(){
			return "returnGservice";
		}
	});

	app.controller("FacProSer",function(gProvider,gFactory,gService,gService2){
		console.log("MyService: "+gService.gServiceVal());
		console.log("MyService2: "+gService2.name+ " "+gService2.age);
		console.log("MyFactory: "+gFactory.name+ " "+gFactory.age);
		console.log("MyProvider: "+gProvider);
	})

	app.controller("AppBind",function($scope,$rootScope){
		$scope.messageSetTimeOut=0;
		$rootScope.messageSetTimeOut2=0
		$scope.getMessage = function() {
 	 		setTimeout(function() {
    			$scope.messageSetTimeOut = $scope.messageSetTimeOut+1;
    			$rootScope.messageSetTimeOut2 = $rootScope.messageSetTimeOut2+1;
    			$scope.$digest(); //this triggers a $digest
  			}, 2000);
			$scope.messageSetTimeOut=10;
		};
		$scope.showBorderFlag=true;
		$scope.makeBoldFlag=true;
	})

	app.controller("noScopeTry",function($scope,$route){
		$scope.ToReload = function(){
			$route.reload();
		}
		this.nameToDisp="Godlyn Paul";
 		$scope.nameToDisp= "BalrajBhullar";
 	})


 	app.controller("promiseTrail",function($timeout,$scope,$q){

 	$scope.startTime=Date.now()
/* 		function add(x,y,callbackCase,errorCase){
 			$timeout(function(){
 				if(true){
 					callbackCase(x+y);
 				}else{
 					errorCase(0);
 				}
 			},100);
 		}
		add(1,2,function(successResponse){
 			add(successResponse,3,function(successResponse){
 				add(successResponse,4,function(successResponse){
 					$scope.dataOnUi=successResponse;
		 			$scope.totalTime= Date.now()-$scope.startTime;
 				},function(errorResponse){$scope.dataOnUi=errorResponse;});
 			},function(errorResponse){$scope.dataOnUi=errorResponse;});
 		},function(errorResponse){$scope.dataOnUi=errorResponse;});
 */

 		function add2(r,s){
 			var q= $q.defer();
 			setTimeout(function(){
 				if(false){
					q.resolve(r+s);
				}else{
					q.reject(0);
				}
 			},100);

 			return q.promise;
 		}
 		add2(5,5)
 			.then(function(successResponse){
				return add2(successResponse,1);
 			})
 			.then(function(successResponse){
				return add2(successResponse,1);
			})
 			.then(function(successResponse){
 				$scope.dataOnUi2=successResponse;
	 			$scope.totalTime2= Date.now()-$scope.startTime;
 			})
 			.catch(function(failureResponse){
 				$scope.dataOnUi2=failureResponse;
	 		})
 	})

 	app.controller("cusDirController",['$scope',function($scope){
 		  $scope.employees = {
            "headers": ['Serial No', 'Name', 'Hobby'],
            "index": ['serialNo', 'name', 'hobby'],
            "data" : [{
                "serialNo": 1,
                "name": "Trupthi",
                "hobby": "Travelling"
            }, {
                "serialNo": 2,
                "name": "Bhavika",
                "hobby": "Badmintion"
            }, {
                "serialNo": 3,
                "name": "Sakar",
                "hobby": "Cricket"
            }]
            };

            $scope.animals = {
                "headers": ['Serial No', 'Name', 'Extinct'],
                "index": ['serialNo', 'name', 'extinct'],
                "data": [{
                "serialNo": 1,
                "name": "Dodo",
                "extinct": "Yes"
            }, {
                "serialNo": 2,
                "name": "Dog",
                "extinct": "No"
            }, {
                "serialNo": 3,
                "name": "Cat",
                "extinct": "No"
            }]
            };
 	}]);

 	app.directive('cusEmpAnimalTable',function(){
 		return{
 			restrict: 'E',
 			scope:{
 					list: '=',
 					allowHiglight: '=',
 					allowDisplay: '='
  	    		  },
 			template:'<div class="transcludeA"></div>\
 					<table class= "myTab">\
						<thead>\
							<tr class="myTab">\
								<td ng-repeat="header in list.headers" class= "myTab">{{header}}</td>\
							<tr>\
						</thead>\
						<tbody>\
							<tr ng-repeat="ae in list.data" ng-mouseover="mouseOverFn($event,true)" ng-mouseout="mouseOverFn($event,false)" ng-click="onClickFn($event)">\
								<td class= "myTab">{{ae[list.index[0]]}}</td>\
								<td class= "myTab">{{ae[list.index[1]]}}</td>\
								<td class= "myTab">{{ae[list.index[2]]}}</td>\
							</tr>\
						</tbody>\
					</table>\
					<div class="transcludeB"></div>\
     				<h1 ng-show="allowDisplay && disName">The selected row has {{disName}}</h1>\
     				<br>',
			transclude:true,
			link:function(scope, element, attrs, controller, transcludeFn){
				scope.mouseOverFn= function(evt,needTohilight){
					if(scope.allowHiglight){
	 					$(evt.target).parent().css('background-color',needTohilight?'red':'white');
					}
				}
				scope.onClickFn= function(evt){
					if(scope.allowDisplay){
						scope.disName=$(evt.target).parent("tr").find("td").next().html();
					}
				}
				scope.initz = function(){
          $('.transcludeA').append(transcludeFn()[0]);
          $('.transcludeB').append(transcludeFn()[1]).append(transcludeFn()[2]);
					}
				scope.initz();
			}
		}
 	})

	app.component('myFirstComponent',{
		template:'<div ng-transclude="sa"> </div>\
							<div ng-transclude="sc"> </div>\
							<div> My first component - By  {{god.firstName}} {{lastName}}</div>\
							<div ng-transclude="sb"> </div>\
							<ng-transclude></ng-transclude>\
							<div ng-transclude="dd"> </div>',

		controller: function myFirstComponentFn($scope){
			this.firstName = "Godlyn";
			$scope.lastName= "Paul";
		},
		controllerAs : 'god',
		transclude: {
			sa: 'setApple',
			sb: 'setBanana',
			sc: 'setChikoo',
			dd: 'div'
		}
	});

	app.directive('tryComp',function($interpolate){
		return{
			restrict: 'AEC',
			compile:function(tElement,tAttributes){
				tElement.css("border","1px solid blue");
				console.log(tAttributes.text + "- in Compile" );
				debugger;
				console.log(tElement+"godlyn");
				return{
			// link:{
					pre: function(scope,iElement,iAttributes){
						console.log(iAttributes.text + "- in pre" );
					},
					post: function(scope,iElement,iAttributes){
						console.log(iAttributes.text + "- in post" );
						iElement.on("click",scope.cusClickFn);
						if(iAttributes.text === "GC 3"){
							iElement.css("border","3px solid black");
						}
					}
				}
			 },
			controller: function($scope,$element,$attrs){
				var goo = $interpolate($attrs.text)($scope);
				console.log(goo + "- in controller");
				$scope.cusClickFn=function(){
					alert(goo);
				}
			}
		}
	});

	app.config(function config($interpolateProvider){
		console.log($interpolateProvider);
		$interpolateProvider.startSymbol('');
		$interpolateProvider.endSymbol('');
	});
