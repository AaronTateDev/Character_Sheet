var normalDT = document.getElementById("normalDT"),
normalDR = document.getElementById("normalDR"),
laserDT = document.getElementById("laserDT"),
laserDR = document.getElementById("laserDR"),
fireDT = document.getElementById("fireDT"),
fireDR = document.getElementById("fireDR"),
plasmaDT = document.getElementById("plasmaDT"),
plasmaDR = document.getElementById("plasmaDR"),
explodeDT = document.getElementById("explodeDT"),
explodeDR = document.getElementById("explodeDR"),
raceResists = document.getElementById("raceSelector"),
tooltip3 = new HTML5TooltipUIComponent

/*normalDT = document.getElementById("normalDT"),
normalDT = document.getElementById("normalDT")*/;

let 	
ugNormalDT = 0, 
ugNormalDR = 0,
ugLaserDT = 0,
ugLaserDR = 0,
ugFireDT = 0,
ugFireDR = 0,
ugPlasmaDT = 0,
ugPlasmaDR = 0,
ugExplodeDT = 0,
ugExplodeDR = 0,
ugAC = 0,
ugRR = 0,
ugPoisonResist = 0,
ugGasResist = 0,
ugElecResist = 0; /*Undergarment Resistance Values*/

let 	
arNormalDT = 0, 
arNormalDR = 0,
arLaserDT = 0,
arLaserDR = 0,
arFireDT = 0,
arFireDR = 0,
arPlasmaDT = 0,
arPlasmaDR = 0,
arExplodeDT = 0,
arExplodeDR = 0,
arAC = 0,
arRR = 0,
arPoisonResist = 0,
arGasResist = 0,
arElecResist = 0; /*Armor Resistance Values*/

let 
racialDT = 0,
racialDR = 0;/*Racial Bonus Resistance Values*/

var myUndergarments = new Select('#undergarment',{
    // auto show the live filter
    filtered: 'auto',
    // auto show the live filter when the options >= 8
    filter_threshold: 2,
    // custom placeholder
    filter_placeholder: 'Select Undergarments...'
});

var myArmor = new Select('#armor',{
    // auto show the live filter
    filtered: 'auto',
    // auto show the live filter when the options >= 8
    filter_threshold: 4,
    // custom placeholder
    filter_placeholder: 'Select Armor...'
});

function undergarmentEquip() {  
	let ugChange = document.getElementById("undergarment");
	let ugButton = document.getElementById("undergarmentButton");
	

	if (raceResists.value == "Deathclaw" || raceResists.value == "Deathclaw (Grey Tribe)" || raceResists.value == "Robot"){
		tooltip3.set({
          animateFunction: "spin",
          color: "salmon",
          contentText: "A " + raceResists.value + " may not wear undergarments.",
          stickTo: "right",                        
          maxWidth: 130,
          target: event.target
        });
        tooltip3.show();  
        tooltip3.mount();
	    event.target.addEventListener('mousemove',function(){            
	            tooltip3.hide();
	    });/*Armor Requirement tooltip*/ 
	    	ugNormalDT = 0;
			ugNormalDR = 0;
			ugLaserDT = 0;
			ugLaserDR = 0;
			ugFireDT = 0;
			ugFireDR = 0;
			ugPlasmaDT = 0;
			ugPlasmaDR = 0;
			ugExplodeDT = 0;
			ugExplodeDR = 0;
			ugAC = 0; 
			ugRR = 0;
			ugPoisonResist = 0;
			ugGasResist = 0;
			ugElecResist = 0; 
			ugButton.innerHTML = "Equip";			
    }else {
    
    switch (event.target.id != "raceSelector") {
	    case ugChange.value == "None":	    		    
	        break;

	    case ugButton.innerHTML == "Unequip: " + ugChange.value:	        
	    	ugNormalDT = 0;
			ugNormalDR = 0;
			ugLaserDT = 0;
			ugLaserDR = 0;
			ugFireDT = 0;
			ugFireDR = 0;
			ugPlasmaDT = 0;
			ugPlasmaDR = 0;
			ugExplodeDT = 0;
			ugExplodeDR = 0;
			ugAC = 0; 
			ugRR = 0;
			ugPoisonResist = 0;
			ugGasResist = 0;
			ugElecResist = 0; 
			ugButton.innerHTML = "Equip";		    
	        break;
	    	

	    case ugChange.value == "Basic Clothing":
	    	ugNormalDT = 2;
			ugNormalDR = 0;
			ugLaserDT = 0;
			ugLaserDR = 0;
			ugFireDT = 0;
			ugFireDR = 0;
			ugPlasmaDT = 0;
			ugPlasmaDR = 0;
			ugExplodeDT = 1;
			ugExplodeDR = 0;
			ugAC = 0; 
			ugRR = 0;
			ugPoisonResist = 0;
			ugGasResist = 0;
			ugElecResist = 0;
			ugButton.innerHTML = "Unequip: " + ugChange.value; 
			console.log(ugChange.value);     
	        break;

	    case ugChange.value == "Brotherhood Undersuit":
	        ugNormalDT = 3;
			ugNormalDR = 0;
			ugLaserDT = 3;
			ugLaserDR = 0;
			ugFireDT = 3;
			ugFireDR = 5;
			ugPlasmaDT = 3;
			ugPlasmaDR = 0;
			ugExplodeDT = 3;
			ugExplodeDR = 5;
			ugAC = 5;
			ugRR = 0;
			ugPoisonResist = 0;
			ugGasResist = 0;
			ugElecResist = 0;
			ugButton.innerHTML = "Unequip: " + ugChange.value;
	        break;

	    case ugChange.value == "Armored Undersuit":
	        ugNormalDT = 0;
			ugNormalDR = 5;
			ugLaserDT = 0;
			ugLaserDR = 5;
			ugFireDT = 0;
			ugFireDR = 5;
			ugPlasmaDT = 0;
			ugPlasmaDR = 5;
			ugExplodeDT = 0;
			ugExplodeDR = 5;
			ugAC = 10;
			ugRR = 5;
			ugPoisonResist = 0;
			ugGasResist = 0;
			ugElecResist = -5;
			ugButton.innerHTML = "Unequip: " + ugChange.value;
	        break;

	    case ugChange.value == "Environmental Undergear":
	        ugNormalDT = 2;
			ugNormalDR = 0;
			ugLaserDT = 2;
			ugLaserDR = 0;
			ugFireDT = 2;
			ugFireDR = 0;
			ugPlasmaDT = 2;
			ugPlasmaDR = 0;
			ugExplodeDT = 2;
			ugExplodeDR = 0;
			ugAC = 0;
			ugRR = 10;
			ugPoisonResist = 10;
			ugGasResist = 10;
			ugElecResist = 5;
			ugButton.innerHTML = "Unequip: " + ugChange.value;
	        break;

	        default:
    }
}
    switch (raceResists.value) {
    case "Super-Mutant":
    	racialDT = 0;
    	racialDR = 20;
        break;

    case "Deathclaw":
    	racialDT = 4;
    	racialDR = 40;
        break;

        case "Deathclaw (Grey Tribe)":
    	racialDT = 4;
    	racialDR = 40;
        break;

    case "Robot":
    	racialDT = 0;
    	racialDR = 40;
        break;

    case "Andriod Humanoid Robot":
    	racialDT = 0;
    	racialDR = 25;
        break;

    default:
    	racialDT = 0;
    	racialDR = 0;
	}
    
    normalDT.value = ugNormalDT + arNormalDT + racialDT || ugNormalDT + racialDT;
	normalDR.value = ugNormalDR + arNormalDR + racialDR || ugNormalDR + racialDR;
	laserDT.value = ugLaserDT + arLaserDT + racialDT || ugLaserDT + racialDT;
	laserDR.value = ugLaserDR + arLaserDR + racialDR || ugLaserDR + racialDR;
	fireDT.value = ugFireDT + arFireDT + racialDT || ugFireDT + racialDT;
	fireDR.value = ugFireDR + arFireDR + racialDR || ugFireDR + racialDR;
	plasmaDT.value = ugPlasmaDT + arPlasmaDT + racialDT || ugPlasmaDT + racialDT;
	plasmaDR.value = ugPlasmaDR + arPlasmaDR + racialDR || ugPlasmaDR + racialDR;
	explodeDT.value = ugExplodeDT + arExplodeDT + racialDT || ugExplodeDT + racialDT;
	explodeDR.value = ugExplodeDR + arExplodeDR + racialDR|| ugExplodeDR + racialDR;


secondarySkills();
}

function armorEquip() {     
    let arChange = document.getElementById("armor");
	let arButton = document.getElementById("armorButton");
    
    switch (true) {
    case arChange.value == "None" || arButton.innerHTML == "Unequip: " + arChange.value:
    	arNormalDT = 0;
		arNormalDR = 0;
		arLaserDT = 0;
		arLaserDR = 0;
		arFireDT = 0;
		arFireDR = 0;
		arPlasmaDT = 0;
		arPlasmaDR = 0;
		arExplodeDT = 0;
		arExplodeDR = 0;
		arAC = 0; 
		arRR = 0;
		arPoisonResist = 0;
		arGasResist = 0;
		arElecResist = 0; 
		arButton.innerHTML = "Equip";		    
        break;

    case arChange.value == "Robe":
    	arNormalDT = 0;
		arNormalDR = 5;
		arLaserDT = 0;
		arLaserDR = 5;
		arFireDT = 0;
		arFireDR = 5;
		arPlasmaDT = 0;
		arPlasmaDR = 5;
		arExplodeDT = 0;
		arExplodeDR = 5;
		arAC = 10; 
		arRR = 0;
		arPoisonResist = 0;
		arGasResist = 0;
		arElecResist = 0;
		arButton.innerHTML = "Unequip: " + arChange.value;      
        break;
	}

	switch (raceResists.value) {
    case "Super-Mutant":
    	racialDT = 0;
    	racialDR = 20;
        break;

    case "Deathclaw":
    	racialDT = 4;
    	racialDR = 40;
        break;

        case "Deathclaw (Grey Tribe)":
    	racialDT = 4;
    	racialDR = 40;
        break;

    case "Robot":
    	racialDT = 0;
    	racialDR = 40;
        break;

    case "Andriod Humanoid Robot":
    	racialDT = 0;
    	racialDR = 25;
        break;

    default:
    	racialDT = 0;
    	racialDR = 0;
	}
    
    normalDT.value = ugNormalDT + arNormalDT + racialDT || arNormalDT + racialDT;
	normalDR.value = ugNormalDR + arNormalDR + racialDR || arNormalDR + racialDR;
	laserDT.value = ugLaserDT + arLaserDT + racialDT || arLaserDT + racialDT;
	laserDR.value = ugLaserDR + arLaserDR + racialDR || arLaserDR + racialDR;
	fireDT.value = ugFireDT + arFireDT + racialDT || arFireDT + racialDT;
	fireDR.value = ugFireDR + arFireDR + racialDR || arFireDR + racialDR;
	plasmaDT.value = ugPlasmaDT + arPlasmaDT + racialDT || arPlasmaDT + racialDT;
	plasmaDR.value = ugPlasmaDR + arPlasmaDR + racialDR || arPlasmaDR + racialDR;
	explodeDT.value = ugExplodeDT + arExplodeDT + racialDT || arExplodeDT + racialDT;
	explodeDR.value = ugExplodeDR + arExplodeDR + racialDR || arExplodeDR + racialDR;

	
secondarySkills();

}

