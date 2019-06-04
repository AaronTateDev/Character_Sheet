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
tooltip3 = new HTML5TooltipUIComponent, /*Undergarment Req*/
tooltip4 = new HTML5TooltipUIComponent, /*Armor Req*/
tooltip5 = new HTML5TooltipUIComponent, /*Both Req*/
tooltip6 = new HTML5TooltipUIComponent; /*Stat Req*/

let 
ugChange = document.getElementById("undergarment"),
ugButton = document.getElementById("undergarmentButton"),
arChange = document.getElementById("armor"),
arButton = document.getElementById("armorButton");

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
ugElecResist = 0,
ugWt = 0,
ugStReq = 0; /*Undergarment Resistance Values*/

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
arElecResist = 0,
arWt = 0,
arStReq = 0,
sneakAdjust = 0,
arpeReq = 0,
aragReq = 0,
agBonus = 0,
stBonus = 0,
peBonus = 0,
scienceAdjust = 0,
lockpickAdjust = 0,
stealingAdjust = 0,
repairAdjust = 0,
firstAidAdjust = 0,
doctorAdjust = 0,
trapsMinesAdjust = 0,
healthPercentAdjust = 0,
healthFlatAdjust = 0,
pCTAdjust = 0,
pWatercAdjust = 0,
pACAdjust = 0,
pAPCTAdjust = 0; /*Armor Resistance Values*/

let 
racialDT = 0,
racialDR = 0,
gearStatReqTxt;

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

function equipSelection() {
	tooltip3.set({
          animateFunction: "scalein",
          color: "terminal darkgreen",
          contentText: "A " + raceResists.value + " may not wear undergarments.",
          stickTo: "right",                        
          maxWidth: 130,
          target: event.target
        });/*Undergarment Requirement tooltip*/ 

    tooltip4.set({
          animateFunction: "scalein",
          color: "terminal darkgreen",
          contentText: "A " + raceResists.value + " may not wear armor.",
          stickTo: "right",                        
          maxWidth: 130,
          target: event.target
        });/*Armor Requirement tooltip*/ 

    tooltip5.set({
          animateFunction: "scalein",
          color: "terminal darkgreen",
          contentText: "A " + raceResists.value + " may not wear undergarments or armor.",
          stickTo: "right",                        
          maxWidth: 130,
          target: event.target
        });/*Armor Requirement tooltip*/ 

        tooltip3.mount();         
        tooltip4.mount();
        tooltip5.mount();        
        
	if(event.target.id == "raceSelector"){

		if (raceResists.value == "Deathclaw" || raceResists.value == "Deathclaw (Grey Tribe)" || raceResists.value == "Robot"){
			tooltip5.show();
		    event.target.addEventListener('mousemove',function(){            
		    	tooltip5.hide();
			});
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
			ugWt = 0;
			ugStReq = 0;
			sneakAdjust = 0;
			ugButton.innerHTML = "Equip";

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
			arWt = 0;
			arStReq = 0; 
			sneakAdjust = 0;
			arpeReq = 0;
			aragReq = 0;
			agBonus = 0;
			stBonus = 0;
			peBonus = 0;
			lockpickAdjust = 0;
			stealingAdjust = 0;
			repairAdjust = 0;
			firstAidAdjust = 0;
			doctorAdjust = 0;
			scienceAdjust = 0;
			trapsMinesAdjust = 0;
			healthPercentAdjust = 0;
			healthFlatAdjust = 0;
			pCTAdjust = 0;
			pWatercAdjust = 0;
			pACAdjust = 0;
			pAPCTAdjust = 0;			
			arButton.innerHTML = "Equip";

			undergarmentEquip();
			armorEquip();			
		}else {			
			undergarmentEquip();
			armorEquip();
			statRequirements();
		}
		
	}else if(event.target.id == "undergarmentButton") {
		if (raceResists.value == "Deathclaw" || raceResists.value == "Deathclaw (Grey Tribe)" || raceResists.value == "Robot"){
			tooltip3.show();
		    event.target.addEventListener('mousemove',function(){            
		    	tooltip3.hide();
			});
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
			ugWt = 0;
			ugStReq = 0;
			ugButton.innerHTML = "Equip";
		}else {
		undergarmentEquip();
		statRequirements();
		}
	}else if(event.target.id == "armorButton") {
		if (raceResists.value == "Deathclaw" || raceResists.value == "Deathclaw (Grey Tribe)" || raceResists.value == "Robot"){
			tooltip4.show();
		    event.target.addEventListener('mousemove',function(){            
		    	tooltip4.hide();
			});
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
			arWt = 0;
			arStReq = 0;
			sneakAdjust = 0;
			arpeReq = 0;
			aragReq = 0;
			agBonus = 0;
			stBonus = 0;
			peBonus = 0;			
			lockpickAdjust = 0;
			stealingAdjust = 0;
			repairAdjust = 0;
			firstAidAdjust = 0;
			doctorAdjust = 0;
			scienceAdjust = 0;
			trapsMinesAdjust = 0;
			healthPercentAdjust = 0;
			healthFlatAdjust = 0;
			pCTAdjust = 0;
			pWatercAdjust = 0;
			pACAdjust = 0;
			pAPCTAdjust = 0;			
			arButton.innerHTML = "Equip";

		}else {
			arpeReq = 0;
			aragReq = 0;
			agBonus = 0;
			stBonus = 0;			
			peBonus = 0;
			scienceAdjust = 0;
			lockpickAdjust = 0;
			stealingAdjust = 0;
			repairAdjust = 0;
			firstAidAdjust = 0;
			doctorAdjust = 0;			
			trapsMinesAdjust = 0;
			healthPercentAdjust = 0;
			healthFlatAdjust = 0;
			pCTAdjust = 0;
			pWatercAdjust = 0;
			pACAdjust = 0;
			pAPCTAdjust = 0;			
			armorEquip();
			statRequirements();
			
		}
		
		if ((+document.getElementById('thrownMod').value + sTotal + 5) < document.getElementById('thrownWeight').value) {
            document.getElementById('thrownWeight').value = (+document.getElementById('thrownMod').value + sTotal + 5);    		
    	}
    		
    	thrownObject();	
	}
}

function statRequirements() {
		
	if(arStReq > sTotal - stBonus || arpeReq > pTotal - peBonus || aragReq > aTotal - agBonus) {		
		if(arStReq > sTotal - stBonus) {
			gearStatReqTxt = "Requires atleast " + arStReq + " strength to equip.";
		}else if(arpeReq > pTotal - peBonus) {
			gearStatReqTxt = "Requires atleast " + arpeReq + " perception to equip.";			
		}else if(aragReq > aTotal - agBonus) {
			gearStatReqTxt = "Requires atleast " + aragReq + " agility to equip.";
		}

		tooltip6.set({
          animateFunction: "scalein",
          color: "terminal darkgreen",
          contentText: gearStatReqTxt,
          stickTo: "right",                        
          maxWidth: 130,
          target: event.target
        });/*Gear Stat Requirement tooltip*/

		tooltip6.mount();

		tooltip6.show();
		event.target.addEventListener('mousemove',function(){            
		    	tooltip6.hide();
		});
		
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
		arWt = 0;
		arStReq = 0;
		sneakAdjust = 0;
		arpeReq = 0;
		aragReq = 0;
		agBonus = 0;
		stBonus = 0;
		peBonus = 0;			
		lockpickAdjust = 0;
		stealingAdjust = 0;
		repairAdjust = 0;
		firstAidAdjust = 0;
		doctorAdjust = 0;
		scienceAdjust = 0;
		trapsMinesAdjust = 0;
		healthPercentAdjust = 0;
		healthFlatAdjust = 0;
		pCTAdjust = 0;
		pWatercAdjust = 0;
		pACAdjust = 0;
		pAPCTAdjust = 0;			
		arButton.innerHTML = "Equip";	
	
		normalDT.value = ugNormalDT + arNormalDT + racialDT || ugNormalDT + racialDT || arNormalDT + racialDT;
		normalDR.value = ugNormalDR + arNormalDR + racialDR || ugNormalDR + racialDR || arNormalDR + racialDR;
		laserDT.value = ugLaserDT + arLaserDT + racialDT || ugLaserDT + racialDT || arLaserDT + racialDT;
		laserDR.value = ugLaserDR + arLaserDR + racialDR || ugLaserDR + racialDR || arLaserDR + racialDR;
		fireDT.value = ugFireDT + arFireDT + racialDT || ugFireDT + racialDT || arFireDT + racialDT;
		fireDR.value = ugFireDR + arFireDR + racialDR || ugFireDR + racialDR || arFireDR + racialDR;
		plasmaDT.value = ugPlasmaDT + arPlasmaDT + racialDT || ugPlasmaDT + racialDT || arPlasmaDT + racialDT;
		plasmaDR.value = ugPlasmaDR + arPlasmaDR + racialDR || ugPlasmaDR + racialDR || arPlasmaDR + racialDR;
		explodeDT.value = ugExplodeDT + arExplodeDT + racialDT || ugExplodeDT + racialDT || arExplodeDT + racialDT;
		explodeDR.value = ugExplodeDR + arExplodeDR + racialDR|| ugExplodeDR + racialDR || arExplodeDR + racialDR;

		statTotals();
		secondaryStats();		
	}

	if(ugStReq > sTotal ) {
		gearStatReqTxt = "Requires atleast " + ugStReq + " strength to equip.";

		tooltip6.set({
          animateFunction: "scalein",
          color: "terminal darkgreen",
          contentText: gearStatReqTxt,
          stickTo: "right",                        
          maxWidth: 130,
          target: event.target
        });/*Gear Stat Requirement tooltip*/ 

		tooltip6.mount();

		tooltip6.show();
		event.target.addEventListener('mousemove',function(){            
		    	tooltip6.hide();
		});
		
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
		ugWt = 0;
		ugStReq = 0; 
		ugButton.innerHTML = "Equip";		 	
	
		normalDT.value = ugNormalDT + arNormalDT + racialDT || ugNormalDT + racialDT || arNormalDT + racialDT;
		normalDR.value = ugNormalDR + arNormalDR + racialDR || ugNormalDR + racialDR || arNormalDR + racialDR;
		laserDT.value = ugLaserDT + arLaserDT + racialDT || ugLaserDT + racialDT || arLaserDT + racialDT;
		laserDR.value = ugLaserDR + arLaserDR + racialDR || ugLaserDR + racialDR || arLaserDR + racialDR;
		fireDT.value = ugFireDT + arFireDT + racialDT || ugFireDT + racialDT || arFireDT + racialDT;
		fireDR.value = ugFireDR + arFireDR + racialDR || ugFireDR + racialDR || arFireDR + racialDR;
		plasmaDT.value = ugPlasmaDT + arPlasmaDT + racialDT || ugPlasmaDT + racialDT || arPlasmaDT + racialDT;
		plasmaDR.value = ugPlasmaDR + arPlasmaDR + racialDR || ugPlasmaDR + racialDR || arPlasmaDR + racialDR;
		explodeDT.value = ugExplodeDT + arExplodeDT + racialDT || ugExplodeDT + racialDT || arExplodeDT + racialDT;
		explodeDR.value = ugExplodeDR + arExplodeDR + racialDR|| ugExplodeDR + racialDR || arExplodeDR + racialDR;
		
		secondaryStats();
	} 
}

function undergarmentEquip() {		
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
			ugWt = 0;
			ugStReq = 0; 
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
			ugWt = 3;
			ugStReq = 1;
			ugButton.innerHTML = "Unequip: " + ugChange.value; 			    
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
			ugWt = 4;
			ugStReq = 2;
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
			ugWt = 8;
			ugStReq = 4;
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
			ugWt = 3;
			ugStReq = 2;
			ugButton.innerHTML = "Unequip: " + ugChange.value;
	        break;

	        default:
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
	

secondaryStats();
}

function armorEquip() {     
    switch (event.target.id != "raceSelector") {
    	case arChange.value == "None":	    		    
	        break;

	    case arButton.innerHTML == "Unequip: " + arChange.value:	        
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
			arWt = 0;
			arStReq = 0;
			sneakAdjust = 0;			
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
			arWt = 5;
			arStReq = 2;
			sneakAdjust = 0;
			arButton.innerHTML = "Unequip: " + arChange.value; 			    
	        break;

	    case arChange.value == "Leather Jacket":
	        arNormalDT = 0;
			arNormalDR = 20;
			arLaserDT = 0;
			arLaserDR = 0;
			arFireDT = 0;
			arFireDR = 10;
			arPlasmaDT = 0;
			arPlasmaDR = 0;
			arExplodeDT = 0;
			arExplodeDR = 10;
			arAC = 10;
			arRR = 0;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 5;
			arStReq = 2;
			sneakAdjust = 0;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Leather Armor":
	        arNormalDT = 2;
			arNormalDR = 25;
			arLaserDT = 0;
			arLaserDR = 10;
			arFireDT = 0;
			arFireDR = 15;
			arPlasmaDT = 0;
			arPlasmaDR = 10;
			arExplodeDT = 0;
			arExplodeDR = 15;
			arAC = 10;
			arRR = 0;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 8;
			arStReq = 3;
			sneakAdjust = 0;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Ghoul Armor":
	        arNormalDT = 11;
			arNormalDR = 24;
			arLaserDT = 0;
			arLaserDR = 20;
			arFireDT = 0;
			arFireDR = 10;
			arPlasmaDT = 0;
			arPlasmaDR = 10;
			arExplodeDT = 0;
			arExplodeDR = 20;
			arAC = 10;
			arRR = 0;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 10;
			arStReq = 2;
			sneakAdjust = 0;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Mutant Plate Armor":
	        arNormalDT = 5;
			arNormalDR = 28;
			arLaserDT = 0;
			arLaserDR = 20;
			arFireDT = 0;
			arFireDR = 5;
			arPlasmaDT = 0;
			arPlasmaDR = 20;
			arExplodeDT = 0;
			arExplodeDR = 25;
			arAC = 15;
			arRR = 0;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 40;
			arStReq = 6;
			sneakAdjust = 0;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Raider Armor":
	        arNormalDT = 3;
			arNormalDR = 30;
			arLaserDT = 0;
			arLaserDR = 15;
			arFireDT = 0;
			arFireDR = 20;
			arPlasmaDT = 0;
			arPlasmaDR = 20;
			arExplodeDT = 0;
			arExplodeDR = 20;
			arAC = 10;
			arRR = 0;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 15;
			arStReq = 4;
			sneakAdjust = 0;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Combat Leather Jacket":
	        arNormalDT = 2;
			arNormalDR = 35;
			arLaserDT = 0;
			arLaserDR = 15;
			arFireDT = 0;
			arFireDR = 25;
			arPlasmaDT = 0;
			arPlasmaDR = 10;
			arExplodeDT = 0;
			arExplodeDR = 15;
			arAC = 15;
			arRR = 0;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 7;
			arStReq = 3;
			sneakAdjust = 0;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Stealth Armor":
	        arNormalDT = 3;
			arNormalDR = 30;
			arLaserDT = 2;
			arLaserDR = 20;
			arFireDT = 2;
			arFireDR = 20;
			arPlasmaDT = 2;
			arPlasmaDR = 20;
			arExplodeDT = 2;
			arExplodeDR = 20;
			arAC = 25;
			arRR = 0;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 10;
			arStReq = 3;
			sneakAdjust = 15;			
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Leather Armor MK II":
	        arNormalDT = 3;
			arNormalDR = 30;
			arLaserDT = 1;
			arLaserDR = 25;
			arFireDT = 1;
			arFireDR = 30;
			arPlasmaDT = 1;
			arPlasmaDR = 25;
			arExplodeDT = 1;
			arExplodeDR = 25;
			arAC = 20;
			arRR = 0;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 10;
			arStReq = 3;
			sneakAdjust = 0;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Brotherhood Leather Armor MK II":
	        arNormalDT = 11;
			arNormalDR = 30;
			arLaserDT = 5;
			arLaserDR = 10;
			arFireDT = 5;
			arFireDR = 7;
			arPlasmaDT = 5;
			arPlasmaDR = 10;
			arExplodeDT = 5;
			arExplodeDR = 30;
			arAC = 20;
			arRR = 0;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 11;
			arStReq = 3;
			sneakAdjust = 0;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Metal Armor":
	        arNormalDT = 7;
			arNormalDR = 50;
			arLaserDT = 0;
			arLaserDR = 20;
			arFireDT = 0;
			arFireDR = 9;
			arPlasmaDT = 0;
			arPlasmaDR = 20;
			arExplodeDT = 4;
			arExplodeDR = 30;
			arAC = 10;
			arRR = 0;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 40;
			arStReq = 8;			
			sneakAdjust = -45;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Brotherhood Metal Armor":
	        arNormalDT = 20;
			arNormalDR = 30;
			arLaserDT = 10;
			arLaserDR = 10;
			arFireDT = 3;
			arFireDR = 0;
			arPlasmaDT = 5;
			arPlasmaDR = 5;
			arExplodeDT = 10;
			arExplodeDR = 10;
			arAC = 15;
			arRR = 0;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 45;
			arStReq = 8;
			sneakAdjust = -35;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Reaver Banding":
	        arNormalDT = 5;
			arNormalDR = 30;
			arLaserDT = 0;
			arLaserDR = 30;
			arFireDT = 0;
			arFireDR = 10;
			arPlasmaDT = 0;
			arPlasmaDR = 10;
			arExplodeDT = 0;
			arExplodeDR = 60;
			arAC = 20;
			arRR = 0;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 15;
			arStReq = 5;
			sneakAdjust = 0;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Superior Ghoul Armor":
	        arNormalDT = 20;
			arNormalDR = 30;
			arLaserDT = 0;
			arLaserDR = 20;
			arFireDT = 0;
			arFireDR = 30;
			arPlasmaDT = 0;
			arPlasmaDR = 20;
			arExplodeDT = 0;
			arExplodeDR = 20;
			arAC = 20;
			arRR = 0;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 8;
			arStReq = 2;
			sneakAdjust = 0;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Spiked Mutant Plate Armor":
	        arNormalDT = 10;
			arNormalDR = 60;
			arLaserDT = 0;
			arLaserDR = 40;
			arFireDT = 0;
			arFireDR = 15;
			arPlasmaDT = 0;
			arPlasmaDR = 40;
			arExplodeDT = 0;
			arExplodeDR = 40;
			arAC = 20;
			arRR = 0;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 50;
			arStReq = 10;
			sneakAdjust = 0;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Greater Banding":
	        arNormalDT = 10;
			arNormalDR = 40;
			arLaserDT = 0;
			arLaserDR = 30;
			arFireDT = 0;
			arFireDR = 20;
			arPlasmaDT = 0;
			arPlasmaDR = 20;
			arExplodeDT = 5;
			arExplodeDR = 70;
			arAC = 20;
			arRR = 0;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 18;
			arStReq = 4;
			sneakAdjust = 0;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Tesla Armor":
	        arNormalDT = 0;
			arNormalDR = 30;
			arLaserDT = 10;
			arLaserDR = 75;
			arFireDT = 0;
			arFireDR = 10;
			arPlasmaDT = 10;
			arPlasmaDR = 75;
			arExplodeDT = 0;
			arExplodeDR = 10;
			arAC = 15;
			arRR = 0;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 30;
			arWt = 20;
			arStReq = 3;
			sneakAdjust = -25;
			/*Reduces EMP dmg to cycborgs by 20%*/
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Brotherhood Tesla Armor":
	        arNormalDT = 20;
			arNormalDR = 20;
			arLaserDT = 25;
			arLaserDR = 30;
			arFireDT = 0;
			arFireDR = 10;
			arPlasmaDT = 25;
			arPlasmaDR = 30;
			arExplodeDT = 0;
			arExplodeDR = 10;
			arAC = 0;
			arRR = 0;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 30;
			arWt = 20;
			arStReq = 3;
			sneakAdjust = -25;
			/*Reduces EMP dmg to cycborgs by 20%*/
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Metal Armor MK II":
	        arNormalDT = 10;
			arNormalDR = 60;
			arLaserDT = 0;
			arLaserDR = 45;
			arFireDT = 0;
			arFireDR = 25;
			arPlasmaDT = 0;
			arPlasmaDR = 40;
			arExplodeDT = 10;
			arExplodeDR = 60;
			arAC = 20;
			arRR = 0;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 40;
			arStReq = 7;
			sneakAdjust = -30;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Brotherhood Metal Armor MK II":
	        arNormalDT = 30;
			arNormalDR = 30;
			arLaserDT = 20;
			arLaserDR = 10;
			arFireDT = 10;
			arFireDR = 0;
			arPlasmaDT = 20;
			arPlasmaDR = 10;
			arExplodeDT = 20;
			arExplodeDR = 20;
			arAC = 20;
			arRR = 0;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 40;
			arStReq = 7;
			sneakAdjust = -30;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Radiation Suit":
	        arNormalDT = 4;
			arNormalDR = 12;
			arLaserDT = 4;
			arLaserDR = 6;
			arFireDT = 4;
			arFireDR = 0;
			arPlasmaDT = 4;
			arPlasmaDR = 6;
			arExplodeDT = 4;
			arExplodeDR = 6;
			arAC = 10;
			arRR = 100;
			arPoisonResist = 0;
			arGasResist = 100;
			arElecResist = 0;
			arWt = 10;
			arStReq = 3;
			sneakAdjust = -30;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Combat Armor":
	        arNormalDT = 0;
			arNormalDR = 60;
			arLaserDT = 0;
			arLaserDR = 60;
			arFireDT = 0;
			arFireDR = 50;
			arPlasmaDT = 0;
			arPlasmaDR = 50;
			arExplodeDT = 0;
			arExplodeDR = 50;
			arAC = 30;
			arRR = 20;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 25;
			arStReq = 5;
			sneakAdjust = 0;	
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Brotherhood Combat Armor":
	        arNormalDT = 55;
			arNormalDR = 0;
			arLaserDT = 20;
			arLaserDR = 0;
			arFireDT = 20;
			arFireDR = 0;
			arPlasmaDT = 20;
			arPlasmaDR = 0;
			arExplodeDT = 20;
			arExplodeDR = 0;
			arAC = 30;
			arRR = 20;
			arPoisonResist = 0;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 25;
			arStReq = 5;
			sneakAdjust = 0;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Brotherhood Environmental Armor":
	        arNormalDT = 10;
			arNormalDR = 20;
			arLaserDT = 10;
			arLaserDR = 20;
			arFireDT = 5;
			arFireDR = 40;
			arPlasmaDT = 5;
			arPlasmaDR = 20;
			arExplodeDT = 10;
			arExplodeDR = 30;
			arAC = 20;
			arRR = 60;
			arPoisonResist = 30;
			arGasResist = 100;
			arElecResist = 0;
			arWt = 15;
			arStReq = 3;
			arpeReq = 0;
			aragReq = 0;
			agBonus = 0;
			stBonus = 0;
			peBonus = 0;
			sneakAdjust = 0;
			lockpickAdjust = -20;
			stealingAdjust = -20;
			repairAdjust = -20;
			firstAidAdjust = -30;
			doctorAdjust = -30;
			scienceAdjust = -20;						
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Pseudo-Chitin Armor":
	        arNormalDT = 5;
			arNormalDR = 48;
			arLaserDT = 5;
			arLaserDR = 48;
			arFireDT = 5;
			arFireDR = 48;
			arPlasmaDT = 5;
			arPlasmaDR = 48;
			arExplodeDT = 5;
			arExplodeDR = 48;
			arAC = 50;
			arRR = 40;
			arPoisonResist = 50;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 20;
			arStReq = 3;
			sneakAdjust = 0;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Crysalis Armor":
	        arNormalDT = 25;
			arNormalDR = 160;
			arLaserDT = 25;
			arLaserDR = 140;
			arFireDT = 25;
			arFireDR = 130;
			arPlasmaDT = 25;
			arPlasmaDR = 140;
			arExplodeDT = 25;
			arExplodeDR = 100;
			arAC = 80;
			arRR = 40;
			arPoisonResist = 50;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 90;
			arStReq = 3;			
			healthPercentAdjust = 0.66;	//-1/3 hp		
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Pseudo-Chitin Armor(Bonded)":
	        arNormalDT = 15;
			arNormalDR = 70;
			arLaserDT = 15;
			arLaserDR = 70;
			arFireDT = 15;
			arFireDR = 70;
			arPlasmaDT = 15;
			arPlasmaDR = 70;
			arExplodeDT = 15;
			arExplodeDR = 70;
			arAC = 18;
			arRR = 40;
			arPoisonResist = 50;
			arGasResist = 0;
			arElecResist = 0;
			arWt = 20;
			arStReq = 3;			
			healthPercentAdjust = 0.66;//-1/3 max hp
			healthFlatAdjust = 30;			
			arButton.innerHTML = "Fused: " + arChange.value;
	        break;

	    case arChange.value == "Brotherhood Environmental Armor MK II":
	        arNormalDT = 20;
			arNormalDR = 40;
			arLaserDT = 10;
			arLaserDR = 20;
			arFireDT = 15;
			arFireDR = 30;
			arPlasmaDT = 5;
			arPlasmaDR = 30;
			arExplodeDT = 0;
			arExplodeDR = 20;
			arAC = 25;
			arRR = 90;
			arPoisonResist = 50;
			arGasResist = 100;
			arElecResist = 0;
			arWt = 20;
			arStReq = 4;
			sneakAdjust = -50;					
			peBonus = -1;
			scienceAdjust = -10;
			lockpickAdjust = -20;
			stealingAdjust = -20;
			repairAdjust = -10;
			firstAidAdjust = -20;
			doctorAdjust = -20;				
			pCTAdjust = -10;
			pWatercAdjust = -10;
			pACAdjust = -10;
			pAPCTAdjust = -10;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Power Armor":
	        arNormalDT = 10;
			arNormalDR = 50;
			arLaserDT = 10;
			arLaserDR = 50;
			arFireDT = 10;
			arFireDR = 50;
			arPlasmaDT = 10;
			arPlasmaDR = 50;
			arExplodeDT = 10;
			arExplodeDR = 50;
			arAC = 30;
			arRR = 30;
			arPoisonResist = 15;
			arGasResist = 100;
			arElecResist = 0;
			arWt = 20;
			arStReq = 2;
			sneakAdjust = -75;			
			stBonus = 2;			
			scienceAdjust = -20;
			lockpickAdjust = -20;
			stealingAdjust = -20;
			repairAdjust = -20;
			firstAidAdjust = -20;
			doctorAdjust = -20;			
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Brotherhood Power Armor":
	        arNormalDT = 30;
			arNormalDR = 50;
			arLaserDT = 20;
			arLaserDR = 30;
			arFireDT = 10;
			arFireDR = 20;
			arPlasmaDT = 10;
			arPlasmaDR = 30;
			arExplodeDT = 20;
			arExplodeDR = 40;
			arAC = 30;
			arRR = 30;
			arPoisonResist = 15;
			arGasResist = 100;
			arElecResist = 0;
			arWt = 20;
			arStReq = 2;
			sneakAdjust = -75;
			arpeReq = 0;
			aragReq = 0;
			agBonus = 0;
			stBonus = 3;
			peBonus = -1;
			scienceAdjust = -20;
			lockpickAdjust = -20;
			stealingAdjust = -20;
			repairAdjust = -20;
			firstAidAdjust = -20;
			doctorAdjust = -20;				
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Stealth Power Armor":
	        arNormalDT = 10;
			arNormalDR = 40;
			arLaserDT = 10;
			arLaserDR = 40;
			arFireDT = 10;
			arFireDR = 40;
			arPlasmaDT = 10;
			arPlasmaDR = 40;
			arExplodeDT = 10;
			arExplodeDR = 40;
			arAC = 40;
			arRR = 50;
			arPoisonResist = 20;
			arGasResist = 100;
			arElecResist = 0;
			arWt = 20;
			arStReq = 0;			
			aragReq = 8;
			agBonus = 2;			
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "(CRRAAB) Power Armor":
	        arNormalDT = 14;
			arNormalDR = 45;
			arLaserDT = 14;
			arLaserDR = 45;
			arFireDT = 14;
			arFireDR = 45;
			arPlasmaDT = 14;
			arPlasmaDR = 45;
			arExplodeDT = 14;
			arExplodeDR = 45;
			arAC = 20;
			arRR = 100;
			arPoisonResist = 0;
			arGasResist = 100;
			arElecResist = 0;
			arWt = 20;
			arStReq = 0;
			sneakAdjust = -75;
			arpeReq = 8;			
			peBonus = 3;
			scienceAdjust = 35;
			lockpickAdjust = 35;
			stealingAdjust = 35;
			repairAdjust = 35;
			firstAidAdjust = 35;
			doctorAdjust = 35;			
			trapsMinesAdjust = 35;
			pCTAdjust = 35;
			pWatercAdjust = 35;
			pACAdjust = 35;
			pAPCTAdjust = 35;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Advanced Power Armor":
	        arNormalDT = 14;
			arNormalDR = 60;
			arLaserDT = 14;
			arLaserDR = 60;
			arFireDT = 14;
			arFireDR = 60;
			arPlasmaDT = 14;
			arPlasmaDR = 60;
			arExplodeDT = 14;
			arExplodeDR = 60;
			arAC = 35;
			arRR = 60;
			arPoisonResist = 30;
			arGasResist = 100;
			arElecResist = 0;
			arWt = 20;
			arStReq = 6;
			sneakAdjust = -75;
			stBonus = 4;
			scienceAdjust = -20;
			lockpickAdjust = -20;
			stealingAdjust = -20;
			repairAdjust = -20;
			firstAidAdjust = -20;
			doctorAdjust = -20;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Brotherhood Advanced Power Armor":
	        arNormalDT = 70;
			arNormalDR = 20;
			arLaserDT = 20;
			arLaserDR = 20;
			arFireDT = 20;
			arFireDR = 20;
			arPlasmaDT = 20;
			arPlasmaDR = 20;
			arExplodeDT = 30;
			arExplodeDR = 20;
			arAC = 35;
			arRR = 60;
			arPoisonResist = 30;
			arGasResist = 100;
			arElecResist = 0;
			arWt = 20;
			arStReq = 7;
			sneakAdjust = -75;
			stBonus = 4;			
			scienceAdjust = -20;
			lockpickAdjust = -20;
			stealingAdjust = -20;
			repairAdjust = -20;
			firstAidAdjust = -20;
			doctorAdjust = -20;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	    case arChange.value == "Advanced Power Armor MK II":
	        arNormalDT = 20;
			arNormalDR = 70;
			arLaserDT = 20;
			arLaserDR = 70;
			arFireDT = 20;
			arFireDR = 70;
			arPlasmaDT = 20;
			arPlasmaDR = 70;
			arExplodeDT = 20;
			arExplodeDR = 70;
			arAC = 45;
			arRR = 100;
			arPoisonResist = 40;
			arGasResist = 100;
			arElecResist = 0;
			arWt = 20;
			arStReq = 6;
			sneakAdjust = -75;
			stBonus = 4;			
			scienceAdjust = -10;
			lockpickAdjust = -10;
			stealingAdjust = -10;
			repairAdjust = -10;
			firstAidAdjust = -10;
			doctorAdjust = -10;
			arButton.innerHTML = "Unequip: " + arChange.value;
	        break;

	        default:
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

statTotals();	
secondaryStats();
}

