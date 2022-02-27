var MOUNTAINS = [ 
{name: "kilimanjaro", height: 5895, place: "tanzania"}, 
{name: "poppcatepetl", height: 5426, place: "mexico"}, 
{name: "mauna loa", height: 4169, place: "america"} 
]


function buildTable(arrayOfObjects)  {
    //create a table element
    var tbl = document.createElement("table")
    
    //create top row
    var firstRow = document.createElement("tr") //create first row node
    table.appendChild(firstRow)
    var keys = Object.keys(arrayOfObjects[0]) //creates array of keys
    for (var i = 0; i < keys.length; i++) { //loop over array of keys
        var heading = document.createTextNode(keys[i]) //creates text node with the current key 
        var firstRowCell = document.createElement("th") //creates cell node
        firstRowCell.appendChild(heading) //add text to cell    
        firstRow.appendChild(firstRowCell) //add cell to first row
    }

    //data rows
    for (var j = 0; j < arrayOfObjects.length; j++)  {
        var row = document.createElement("tr")
        table.appendChild(row)
        for (var k = 0; k < keys.length; k++){
            var data = arrayOfObjects[j][keys[k]]
            var dataNode = document.createTextNode(data)
            var cell = document.createElement("td")
            cell.appendChild(dataNode)
            row.appendChild(cell)

            if (typeof data == "number") { 
	        	cell.style.textAlign = "right"; 
	        }
	      
	   }

	   return table;
	}

	document.body.appendChild(buildTable(MOUNTAINS)); 
        }

console.log(buildTable(MOUNTAINS))