var electronics = [{
		"type": "laptop",
		"brandName": "Dell",
		"name": "inspiron5542",
		"color": [
			"silver",
			"black"
		],
		"specification": {
			"ram": "8gb",
			"hardisk": "1TB",
			"graphicCard": "4gb amd Radeon"
		},
		"price": "RS 56000",
		"itemLeft":"10",
		"rating": "7.5/10",
		"comments": [{
				"fisrtName": "Rachita",
				"lastName": "batra",
				"comment": "good build quality i like this laptop alot",
				"rate": "9/10"
			},
			{
				"fisrtName": "Lakshay",
				"lastName": "kukreja",
				"comment": "perfect model for me",
				"rate": "9/10"
			}
		]
	},
	{
		"type": "laptop",
		"brandName": "Dell",
		"name": "inspiron3547",
		"color": [
			"silver",
			"black"
		],
		"specification": {
			"ram": "4gb",
			"hardisk": "512GB",
			"graphicCard": "2gb amd Radeon"
		},
		"price": "RS 36000",
		"itemLeft":"1",
		"rating": "7.5/10",
		"comments": [{
				"fisrtName": "Rahul",
				"lastName": "batra",
				"comment": "good build quality i like this laptop alot",
				"rate": "9/10"
			},
			{
				"fisrtName": "Karan",
				"lastName": "kukreja",
				"comment": "My favourite model",
				"rate": "9/10"
			}
		]
	},
	{
		"type": "laptop",
		"brandName": "lenovo",
		"name": "ThinPad3470",
		"color": [
			"silver",
			"black"
		],
		"specification": {
			"ram": "16gb",
			"hardisk": "2TB",
			"graphicCard": "8gb amd Radeon"
		},
		"price": "RS 108799",
		"itemLeft":"7",
		"rating": "9/10",
		"comments": [{
				"fisrtName": "Akhil",
				"lastName": "batra",
				"comment": "good build quality i like this laptop alot",
				"rate": "9/10"
			},
			{
				"fisrtName": "Avni",
				"lastName": "kukreja",
				"comment": "gaming laptop insain",
				"rate": "9/10"
			}
		]
	},
	{
		"type": "laptop",
		"brandName": "Dell",
		"name": "ThinPad340",
		"color": [
			"silver",
			"black"
		],
		"specification": {
			"ram": "8gb",
			"hardisk": "512GB",
			"graphicCard": "4gb amd Radeon"
		},
		"price": "RS 75699",
		"itemLeft":"11",
		"rating": "7/10",
		"comments": [{
				"fisrtName": "Shivam",
				"lastName": "batra",
				"comment": "good build quality i love this laptop alot",
				"rate": "9/10"
			},
			{
				"fisrtName": "Manvi",
				"lastName": "kukreja",
				"comment": "bit costly",
				"rate": "4/10"
			}
		]
	},
	{
		"type": "mobile",
		"brandName": "samsung",
		"name": "Note8",
		"color": [
			"golden",
			"black"
		],
		"specification": {
			"ram": "6gb",
			"hardisk": "64gb",
			"display": "oled 6.4inch",
			"camera": [
				"16+16mpbackcamera",
				"12 megapixel frontCamera"
			]
		},
		"price": "RS 64000",
		"itemLeft":"20",
		"rating": "10/10",
		"comments": [{
				"fisrtName": "Rachita",
				"lastName": "batra",
				"comment": "Awsome mobile",
				"rate": "9/10"
			},
			{
				"fisrtName": "Lakshay",
				"lastName": "kukreja",
				"comment": "my first prefrence",
				"rate": "9/10"
			}
		]
	},
	{
		"type": "mobile",
		"brandName": "sony",
		"name": "XZ premium",
		"color": [
			"golden",
			"black",
			"Silver"
		],
		"specification": {
			"ram": "6gb",
			"hardisk": "64gb",
			"display": "oled 6.4inch",
			"camera": [
				"23 mpbackcamera",
				"12 megapixel frontCamera"
			]
		},
		"price": "RS 64000",
		"itemLeft":"25",
		"rating": "9/10",
		"comments": [{
				"fisrtName": "Rahul",
				"lastName": "batra",
				"comment": "Awsome mobile",
				"rate": "9/10"
			},
			{
				"fisrtName": "parul",
				"lastName": "kukreja",
				"comment": "my first prefrence",
				"rate": "9/10"
			}
		]
	},
	{
		"type": "LED",
		"brandName": "sony",
		"name": "RX100",
		"color": [
			"black"
		],
		"specification": {
			"ram": "6gb",
			"hardisk": "64gb",
			"display": "52.4inch"
		},
		"price": "RS 74000",
		"itemLeft":"2",
		"rating": "9/10",
		"comments": [{
				"fisrtName": "Rahul",
				"lastName": "batra",
				"comment": "my dream led tv",
				"rate": "9/10"
			},
			{
				"fisrtName": "parul",
				"lastName": "kukreja",
				"comment": "my first prefrence",
				"rate": "9/10"
			}
		]
	}
]

function readData(electronics)			//function for printing all the objects in the array .
{
   	console.log(electronics);		//This function of the javascript will print all the elements of the json in the console.
}

function findParticularEntry(electronics ,name)  // function for finding object with its name
{	
	outer: 							//This is the label which is given for telling the break to come out of the block of statement.
 	for(x in electronics)			// for each loop is used for finding the name of the item by comparing it with each element.
    {
        if(electronics[x].name == name)		// compare of given name and the name present array is done  .
        {
            console.log(electronics[x]);	// printing of  object whose name matches with the name passed through the function.
            break outer;   					// After completion  breaking the code of statment  nd come out of it .
        }

        else if(x == 6)						// used when we are unable to find it .
        {
        	console.log("item not found");	// printing obejct not found in the console to ensure that object with this name does'nt exist.
        }
    }
            
}

function findByIndex(electronics,indexNumber)              //function for finding object with the help of the indexnumber.
{
	outer: 											// label for breaking the block of code after the complition . 
	for(x in electronics)						// for each loop used for the  finding obejct with its index number .
   	{
   		if(x == indexNumber)					//	comparing the given index number with the index number of the object of the array.
   		{
   			console.log(electronics[x]);		// printing the value found at the index number in the console .
   			break outer;						// after completion of the given task breaking the block of statment.
   		}					
   		else if(x == 6)							// else if statement used when indexnumber is not there in the array.
   		{
   			console.log("item doesnot exist at the given indexNumber");     // printing in the console that index number is not thare in the array .
   		}
    }
}			
readData(electronics );												// Calling the function and passing array to the function .
findParticularEntry(electronics ,"Note8");							// Calling the function and passing array & string  to the function .
findByIndex(electronics ,6);										// Calling the function and passing array & integer  to the function .