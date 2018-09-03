var normalDT = document.getElementById("normalDT"),
normalDR = document.getElementById("normalDR"),
laserDT = document.getElementById("laserDT"),
laserDR = document.getElementById("laserDR"),
fireDT = document.getElementById("fireDT"),
fireDR = document.getElementById("fireDR"),
plasmaDT = document.getElementById("plasmaDT"),
plasmaDR = document.getElementById("plasmaDR"),
explodeDT = document.getElementById("explodeDT"),
explodeDR = document.getElementById("explodeDR")

/*normalDT = document.getElementById("normalDT"),
normalDT = document.getElementById("normalDT")*/;

let 	
ugNormalDT, 
ugNormalDR,
ugLaserDT,
ugLaserDR,
ugFireDT,
ugFireDR,
ugPlasmaDT,
ugPlasmaDR,
ugExplodeDT,
ugExplodeDR,
ugAC,
ugRR,
ugPoisonResist,
ugGasResist,
ugElecResist; /*Undergarment Resistance Values*/

let 	
arNormalDT, 
arNormalDR,
arLaserDT,
arLaserDR,
arFireDT,
arFireDR,
arPlasmaDT,
arPlasmaDR,
arExplodeDT,
arExplodeDR,
arAC,
arRR,
arPoisonResist,
arGasResist,
arElecResist; /*Armor Resistance Values*/

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
    
    switch (true) {
    case ugChange.value == "None" || ugButton.innerHTML == "Unequip: " + ugChange.value:
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
    }
    
    normalDT.value = ugNormalDT + arNormalDT || ugNormalDT;
	normalDR.value = ugNormalDR + arNormalDR || ugNormalDR;
	laserDT.value = ugLaserDT + arLaserDT || ugLaserDT;
	laserDR.value = ugLaserDR + arLaserDR || ugLaserDR;
	fireDT.value = ugFireDT + arFireDT || ugFireDT;
	fireDR.value = ugFireDR + arFireDR || ugFireDR;
	plasmaDT.value = ugPlasmaDT + arPlasmaDT || ugPlasmaDT;
	plasmaDR.value = ugPlasmaDR + arPlasmaDR || ugPlasmaDR;
	explodeDT.value = ugExplodeDT + arExplodeDT || ugExplodeDT;
	explodeDR.value = ugExplodeDR + arExplodeDR || ugExplodeDR;


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
    
    normalDT.value = ugNormalDT + arNormalDT || arNormalDT;
	normalDR.value = ugNormalDR + arNormalDR || arNormalDR;
	laserDT.value = ugLaserDT + arLaserDT || arLaserDT;
	laserDR.value = ugLaserDR + arLaserDR || arLaserDR;
	fireDT.value = ugFireDT + arFireDT || arFireDT;
	fireDR.value = ugFireDR + arFireDR || arFireDR;
	plasmaDT.value = ugPlasmaDT + arPlasmaDT || arPlasmaDT;
	plasmaDR.value = ugPlasmaDR + arPlasmaDR || arPlasmaDR;
	explodeDT.value = ugExplodeDT + arExplodeDT || arExplodeDT;
	explodeDR.value = ugExplodeDR + arExplodeDR || arExplodeDR;

	//ADD RACIAL RESISTS

secondarySkills();

}

