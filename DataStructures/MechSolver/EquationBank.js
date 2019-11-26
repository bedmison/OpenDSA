/**
 * This class points to the list of equations in different groups
 * created from the equation_bank.js file.
 * 
 * It is to be directly associated with the equation_bank section id.
 * Behaviour/Description: On spawning,
 * 1) find the unique "groups" values for all the equations,
 * 2) create a new div element for each page pointer in dictionary indexed by group,
 * 3) For each equation in the bank, create a new 
 * 
 */

class EquationBank{
    constructor(jsavCanvasObj, dim_obj) 
    {
        this.globalSectionObj = jsavCanvasObj;
        this.DIMENSIONS = {
            "POSITION_X": dim_obj["EQBANK"]["CORNER_X"],
            "POSITION_Y": dim_obj["EQBANK"]["CORNER_Y"],
            "WIDTH": dim_obj["EQBANK"]["WIDTH"],
            "HEIGHT": dim_obj["EQBANK"]["HEIGHT"]
        }

        // Initializing the equation bank list: pointers to actual objects
        // + list representations
        this.equation_pages = {};
        this.createEquationPages();
        console.log(this.equation_pages);
        // Structure:
        /* 
        {
            group:
            {
                pagediv: pageDivObject, // control css display attribute for selection.
                equations:
                {
                    equationObj:
                    {
                        equationObjectName: equationObject,
                        equationDivName: equationDiv
                    }
                }
            }
        }
         */
        
        // Create the main visual element, and start filling in.
        this.createEquationBank();
    }
    createEquationBank()
    {
        // Creating the equation div/box
        this.equationBankBox = this.globalSectionObj.g.rect(
            this.DIMENSIONS["POSITION_X"],
            this.DIMENSIONS["POSITION_Y"],
            this.DIMENSIONS["WIDTH"],
            this.DIMENSIONS["HEIGHT"],
            {
                "fill":"whitesmoke",
                "id": "eqbank",
                "r": 10
            });
        this.equationBankDiv = (list => list[list.length-1])
        (document.getElementsByTagName("rect"))

        this.globalSectionObj.label("Equation Bank", 
            {
                left: this.DIMENSIONS["POSITION_X"]+this.DIMENSIONS["WIDTH"]/2 - 46, 
                top: this.DIMENSIONS["POSITION_Y"]-12,
            })
            .addClass("workspacelabel")
        
        // Setup the page selection and equation selection mechanisms
        console.log(this.equationBankDiv);

        // Add something inside this.
        var selectDDLDiv = document.createElement("div");
        selectDDLDiv.className = "selectddl";
        selectDDLDiv.setAttribute("id","equationSelectDDL");
        selectDDLDiv.appendChild(document.createElement("select"));
        console.log(selectDDLDiv);
        selectDDLDiv.childNodes[0].setAttribute("id", "equation_selector");
        for(var pagename in this.equation_pages){
            selectDDLDiv.childNodes[0].innerHTML += "<option value="+pagename+">"+pagename+"</option>";
        }
        
        document.getElementById("DeformsProblemPRO").childNodes[0].appendChild(selectDDLDiv);
        document.getElementById("equation_selector").addEventListener("change", this.changePages);
    }
    createEquationPages()
    {
        // We have access to the equations dictionary in equation_bank.js, we process it directly.
        for(var objectIndex in equations)
        {
            var currentObj = equations[objectIndex];
            if(currentObj["group"] in this.equation_pages)
                this.equation_pages[currentObj["group"]][objectIndex] = currentObj;
            else
            this.equation_pages[currentObj["group"]] = 
            {
                "pagediv": null,
                "equations": {
                    "equationObj": {
                        currentObj
                    },
                    "SelectableEquationObject": null
                }
                
            };
        }

        // Creating the page objects 

    }
    changePages()
    {
        // This function handles the onchange() event for the drop down box
    }
    selectEquation()
    {

    }
}
window.EquationBank = window.EquationBank || EquationBank