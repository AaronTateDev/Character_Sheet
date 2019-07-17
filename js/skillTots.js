let 
focusSet = document.getElementById("dmgRollField"),
hitCT = document.getElementById('hitCount'),
dmgDisp = document.getElementById('dmgDisplay'),
dmgTaken = document.getElementById('damage'),
dmgCalc = document.getElementById('dmgCalc'),
throwRng = document.getElementById('thrownRng'),
thrownWt = document.getElementById('thrownWeight'),
spoolButt = document.getElementById('spoolButton'),
tApSpool = document.getElementById('totalApSpool'),
apTotal = document.getElementById('totalAP'),
spoolInput = document.getElementById('spoolInput'),
spoolCounter = 0;

function skillTotals(){
      	
	spendPi = document.getElementById('spendPistolSkill');
	totPi = document.getElementById('totalPistolSkill');
	totPi.value = +spendPi.value /*+ designated variable*/;

	spendSMG = document.getElementById('spendSMGSkill');
	totSMG = document.getElementById('totalSMGSkill');
	totSMG.value = +spendSMG.value /*+ designated variable*/;

	spendAR = document.getElementById('spendARSkill');
	totAR = document.getElementById('totalARSkill');
	totAR.value = +spendAR.value /*+ designated variable*/;

	spendPr = document.getElementById('spendPrimSkill');
	totPr = document.getElementById('totalPrimSkill');
	totPr.value = +spendPr.value /*+ designated variable*/;

	spendTh = document.getElementById('spendThrowSkill');
	totTh = document.getElementById('totalThrowSkill');
	totTh.value = +spendTh.value /*+ designated variable*/;

	spendRi = document.getElementById('spendRifleSkill');
	totRi = document.getElementById('totalRifleSkill');
	totRi.value = +spendRi.value /*+ designated variable*/;

	spendSh = document.getElementById('spendShotgunSkill');
	totSh = document.getElementById('totalShotgunSkill');
	totSh.value = +spendSh.value /*+ designated variable*/;

	spendMG = document.getElementById('spendMgSkill');
	totMG = document.getElementById('totalMgSkill');
	totMG.value = +spendMG.value /*+ designated variable*/;

	spendGML = document.getElementById('spendG/MLaunchSkill');
	totGML = document.getElementById('totalG/MLaunchSkill');
	totGML.value = +spendGML.value /*+ designated variable*/;

	spendMo = document.getElementById('spendMortarSkill');
	totMo = document.getElementById('totalMortarSkill');
	totMo.value = +spendMo.value /*+ designated variable*/;

	spendFT = document.getElementById('spendFThrowerSkill');
	totFT = document.getElementById('totalFThrowerSkill');
	totFT.value = +spendFT.value /*+ designated variable*/;

	spendEp = document.getElementById('spendEPistolSkill');
	totEp = document.getElementById('totalEPistolSkill');
	totEp.value = +spendEp.value /*+ designated variable*/;

	spendER = document.getElementById('spendERifleSkill');
	totER = document.getElementById('totalERifleSkill');
	totER.value = +spendER.value /*+ designated variable*/;

	spendBEW = document.getElementById('spendBEWeapSkill');
	totBEW = document.getElementById('totalBEWeapSkill');
	totBEW.value = +spendBEW.value /*+ designated variable*/;

	spendMe = document.getElementById('spendMeleeSkill');
	totMe = document.getElementById('totalMeleeSkill');
	totMe.value = +spendMe.value /*+ designated variable*/;

	spendUn = document.getElementById('spendUnarmedSkill');
	totUn = document.getElementById('totalUnarmedSkill');
	totUn.value = +spendUn.value /*+ designated variable*/;

	spendDoc = document.getElementById('spendDoctorSkill');
	totDoc = document.getElementById('totalDoctorSkill');
	totDoc.value = +spendDoc.value + doctorAdjust;

	spendFA = document.getElementById('spendFAidSkill');
	totFA = document.getElementById('totalFAidSkill');
	totFA.value = +spendFA.value + firstAidAdjust;

	spendSn = document.getElementById('spendSneakSkill');
	totSn = document.getElementById('totalSneakSkill');
	totSn.value = +spendSn.value + sneakAdjust;

	spendLo = document.getElementById('spendLockpickSkill');
	totLo = document.getElementById('totalLockpickSkill');
	totLo.value = +spendLo.value + lockpickAdjust;

	spendSt = document.getElementById('spendStealSkill');
	totSt = document.getElementById('totalStealSkill');
	totSt.value = +spendSt.value + stealingAdjust;

	spendTM = document.getElementById('spendT/MSkill');
	totTM = document.getElementById('totalT/MSkill');
	totTM.value = +spendTM.value + trapsMinesAdjust;

	spendSc = document.getElementById('spendScienceSkill');
	totSc = document.getElementById('totalScienceSkill');
	totSc.value = +spendSc.value + scienceAdjust;

	spendRe = document.getElementById('spendRepairSkill');
	totRe = document.getElementById('totalRepairSkill');
	totRe.value = +spendRe.value + repairAdjust;

	spendCT = document.getElementById('spendP,C/TSkill');
	totCT = document.getElementById('totalP,C/TSkill');
	totCT.value = +spendCT.value + pCTAdjust;

	spendWa = document.getElementById('spendP,WSkill');
	totWa = document.getElementById('totalP,WSkill');
	totWa.value = +spendWa.value + pWatercAdjust;

	spendAi = document.getElementById('spendP,ASkill');
	totAi = document.getElementById('totalP,ASkill');
	totAi.value = +spendAi.value + pACAdjust;

	spendAPC = document.getElementById('spendP,APC/TSkill');
	totAPC = document.getElementById('totalP,APC/TSkill');
	totAPC.value = +spendAPC.value + pAPCTAdjust;

	spendSp = document.getElementById('spendSpeechSkill');
	totSp = document.getElementById('totalSpeechSkill');
	totSp.value = +spendSp.value /*+ designated variable*/;

	spendBa = document.getElementById('spendBarterSkill');
	totBa = document.getElementById('totalBarterSkill');
	totBa.value = +spendBa.value /*+ designated variable*/;

	spendGa = document.getElementById('spendGamblingSkill');
	totGa = document.getElementById('totalGamblingSkill');
	totGa.value = +spendGa.value /*+ designated variable*/;

	spendSu = document.getElementById('spendSurvivalSkill');
	totSu = document.getElementById('totalSurvivalSkill');
	totSu.value = +spendSu.value /*+ designated variable*/;

	spendTr = document.getElementById('spendTrackSkill');
	totTr = document.getElementById('totalTrackSkill');
	totTr.value = +spendTr.value /*+ designated variable*/;

    	
    
 }/*Skill Totals (changes from Armor/Items/Perks/Etc.)*/

document.addEventListener("click", function (event) {

	if (event.target.id == 'armorButton' || event.target.id == 'raceSelector') {
		skillTotals();

	}//click event for skill totals

	if (event.target.matches('.skName')) {
		skillTotals();		
	}//click event for skill totals

	if (event.target.id == 'damageCalcButton') {
		damageCalc();			
	}//click event for skill totals

	if (event.target.id == 'thrownButton' || event.target.id == 'dmgRollInput') {		
		initialDRoller();		
	}//click event for collected thrown objects

	if (event.target.id == 'spoolButton') {		
		spoolTracker();		
	}//click event for tracking combat AP spool
	

	if (event.target.id == document.getElementById("thrownWeight").id) {
		focusSet = document.getElementById("thrownWeight");		
	} 

	if (event.target.id == document.getElementById("dmgRollField").id) {
		focusSet = document.getElementById("dmgRollField");
	}

	if (event.target.id == document.getElementById("hitCount").id) {
		focusSet = document.getElementById("hitCount");
	}

	if (event.target.id == document.getElementById("damage").id) {
		focusSet = document.getElementById("damage");
	}

	if (event.target.id == document.getElementById("thrownMod").id) {
		focusSet = document.getElementById("thrownMod");
	}

}, false);

document.addEventListener("input", function (event) {

	if (event.target.name == 'skills' || event.target.name == 'qtyMod' ||
		event.target.name == 'qtyBase') {
		skillTotals();
	}

	if (event.target.id == 'thrownMod' || event.target.id == 'thrownWeight') {
		statTotals();
		if ((+document.getElementById('thrownMod').value + sTotal + 5) < document.getElementById('thrownWeight').value) {
			document.getElementById('thrownWeight').value = (+document.getElementById('thrownMod').value + sTotal + 5);
		}

        thrownObject();
	}//change event for collected thrown objects

	if (event.target.id == 'dmgTaken') {
		ouchDmg();
	}

	if (event.target.id == 'spoolInput' || event.target.id == 'modSequence' ) {
		spoolInputTracker();
	}

}, false);//click event for skill totals

document.addEventListener("keydown", function(event) {		
	if (event.keyCode === 13) {
		event.preventDefault();
		if (focusSet.id == document.getElementById("thrownWeight").id ||
			focusSet.id == document.getElementById("thrownMod").id) {
       	document.getElementById("thrownButton").click();
       }

       if (focusSet.id == document.getElementById("hitCount").id ||
			focusSet.id == document.getElementById("damage").id) {
       	document.getElementById("damageCalcButton").click();
       }

       if (focusSet.id == document.getElementById("dmgRollField").id) {
       	document.getElementById("dmgRollInput").click();
       }
  	}//Allows the use of Enter key in fields to activate buttons
});


function damageCalc() {
	switch (dmgCalc.value) {//((100-DR)/100)*DMG - DT(# of hits)
		case 'Normal':		
			dmgDT = normalDT.value;
			dmgDR = normalDR.value;
			break;

		case 'Laser':		
			dmgDT = laserDT.value;
			dmgDR = laserDR.value;
			break;

		case 'Fire':		
			dmgDT = fireDT.value;
			dmgDR = fireDR.value;
			break;

		case 'Plasma':		
			dmgDT = plasmaDT.value;
			dmgDR = plasmaDR.value;
			break;

		case 'Explode':
			dmgDT = explodeDT.value;
			dmgDR = explodeDR.value;
			break;

		default:
			dmgDT = 0;
			dmgDR = 0;
	}

	dmgDisp.innerHTML = "Take: " + Math.round(((100 - dmgDR)/100)*dmgTaken.value - dmgDT * hitCT.value) + 
		" " + dmgCalc.value.toLowerCase() +	" damage.";
	if (Math.round(((100 - dmgDR)/100)*dmgTaken.value - dmgDT * hitCT.value) < 0){ 
		dmgDisp.innerHTML = "Take: " + 0 + " " + dmgCalc.value.toLowerCase() + " damage.";
	}

	if (document.getElementById('taker').checked == true &&
		 Math.round(((100 - dmgDR)/100)*dmgTaken.value - dmgDT * hitCT.value) > 0 ) {
		document.getElementById('dmgTaken').value = +document.getElementById('dmgTaken').value + 
		Math.round(((100 - dmgDR)/100)*dmgTaken.value - dmgDT * hitCT.value);

		ouchDmg();
	}
}

function thrownObject() {
	quickMaths = sTotal + +document.getElementById('thrownMod').value - 5;
	if (quickMaths < 1) {		
		quickMaths = 1;		
	}

	document.getElementById('thrownWeight').max = +document.getElementById('thrownMod').value + sTotal + 5;	

	let thrownDieNum = quickMaths - 2;
	let thrownDieType;
	thrownBonusDmg = (quickMaths + +document.getElementById('modMeleeD').value) * thrownWt.value;
	throwRng.value = ((sTotal + +document.getElementById('thrownMod').value)  * 2) - (+thrownWt.value + 5);

	switch (true) {
		case (thrownWt.value < 6):
			thrownDieType = 4;
			break;

		case (thrownWt.value < 8):
			thrownDieType = 6;
			break;

		case (thrownWt.value < 10):
			thrownDieType = 8;
			break;

		case (thrownWt.value < 11):
			thrownDieType = 10;
			break;

		case (thrownWt.value < 17):
			thrownDieType = 12;
			break;

		case (thrownWt.value < 61):
			thrownDieType = 20;
			break;

		default:
		thrownDieType = 100;
	}

	if (thrownDieNum < 1) {
		thrownDieNum = 1;
	}

	document.getElementById('thrownButton').innerHTML = thrownDieNum + "d" + thrownDieType + " + " + thrownBonusDmg;
}

function initialDRoller() {
	if(event.target.id == 'thrownButton') {
		initialDieRoller = parsePrecedence(document.getElementById("thrownButton").innerHTML);
	}else if(event.target.id == 'dmgRollInput') {
		initialDieRoller = parsePrecedence(document.getElementById("dmgRollField").value);
	}
		
	document.getElementById("thrownResultTotal").innerHTML = initialDieRoller.total;
	document.getElementById("thrownRollResults").innerHTML = initialDieRoller.rolls.join(', ');

	if(document.getElementById("dmgRollField").value == false && event.target.id == 'dmgRollInput') {
		document.getElementById("thrownResultTotal").innerHTML = "Fail!";
		document.getElementById("thrownRollResults").innerHTML = "Input desired roll...";
	}
	document.getElementById("thrownRollResults").setAttribute('data-tooltip', document.getElementById("thrownRollResults").innerHTML);
	html5tooltips.refresh();
}

function ouchDmg() {

	document.getElementById('totalHP').innerHTML = document.getElementById('totalHealth').value -
	 document.getElementById('dmgTaken').value;
}


function spoolTracker() {
	switch (spoolCounter) {
		case 0:
			spoolButt.innerHTML = "1: " + (tApSpool.value - spoolInput.value).toFixed(1);
			if((tApSpool.value - spoolInput.value).toFixed(1) > apTotal.value  ){
				spoolButt.innerHTML = "1: " + (apTotal.value - spoolInput.value);	
			}
			spoolCounter = 1;
			break;

		case 1:
			spoolButt.innerHTML = "2: " + (tApSpool.value * 3 -	spoolInput.value).toFixed(1);
			if((tApSpool.value * 3 - spoolInput.value).toFixed(1) > apTotal.value  ){
				spoolButt.innerHTML = "2: " + (apTotal.value - spoolInput.value);
			}
			spoolCounter = 2;
			break;

		case 2:
			spoolButt.innerHTML = "Chaos: " + (apTotal.value - spoolInput.value);
			spoolCounter = 3;
			break;

		default:
			spoolButt.innerHTML = 'Fight!'
			spoolCounter = 0;console.log(spoolCounter);
	}
	spoolInput.focus();
}

function spoolInputTracker() {
	if (spoolCounter == 1) {
		spoolButt.innerHTML = "1: " + (tApSpool.value - spoolInput.value).toFixed(1);
	}else if (spoolCounter == 2) {
		spoolButt.innerHTML = "2: " + (tApSpool.value * 3 -	spoolInput.value).toFixed(1);
	}else if (spoolCounter == 3) {
		spoolButt.innerHTML = "Chaos: " + (apTotal.value - spoolInput.value);
	}		

}

/*-----------------------------------Dice Parser-------------------------------*/
//infix operator-precedence parser
//also supports a 'd' operator - a dice roll
var parsePrecedence = (function () {
//we don't care about whitespace. well, most whitespace
var whitespace = {
  ' ' : true,
  '\t' : true
};

//the operators we deal with
var operators = {
  '+' : {
    precedence : 1,
    exec : function ( a, b ) {
      return a + b;
    }
  },
  '-' : {
    precedence : 1,
    exec : function ( a, b ) {
      return a - b;
    }
  },
  '*' : {
    precedence : 2,
    exec : function ( a, b ) {
      return a * b;
    }
  },
  '/' : {
    precedence : 2,
    exec : function ( a, b ) {
      if ( b === 0 ) {
        throw new Error( 'Division by 0' );
      }
      return a / b;
    }
  },
  'd' : {
    precedence : 3,
    exec : function ( rolls, sides, rollsSoFar ) {
      if ( rolls > 1000 ) {
        throw new Error( 'Maximum roll count is 100' );
      }

      var ret = 0, roll;
      while ( rolls-- ) {
        roll = Math.floor( Math.random() * sides ) + 1;

        ret += roll;
        rollsSoFar.push( roll );
      }

      return ret;
    }
  }
};

var parser = {
  //not exactly stacks, but meh
  numberStack : null,
  operatorStack : null,
  rolls : null,

  //the source string and some metadata
  source : null,
  pos : 0,
  len : 0,
  lookahead : '',

  parse : function ( source ) {
    this.source = source;
    this.pos = 0;
    this.len = source.length;

    this.numberStack = [];
    this.operatorStack = [];
    this.rolls = [];

    this.tokenize();
    this.execute();

    //garbage collection, important for gianormo strings
    this.source = source = null;

    return {
      //the remaining number on the "stack" is the result
      total : this.numberStack[ 0 ],
      //we execute right->left, so the rolls array will be "backwards"
      rolls : this.rolls.reverse()
    };
  },

  //take the source string, and break it down into tokens
  tokenize : function () {
    var token, last;

    for ( ; this.pos < this.len; this.pos++ ) {
      this.lookahead = this.source[ this.pos ];

      if ( whitespace.hasOwnProperty(this.lookahead) ) {
        continue;
      }

      token = this.nextToken();

      if ( token.type === 'number' ) {
        this.numberStack.push( token.value );
      }

      else if ( token.type === 'operator' ) {
        last = this.operatorStack[ this.operatorStack.length - 1 ];

        //check for things like 1d2d3, which aren't valid
        if ( last && token.value === 'd' && last.value === 'd' ) {
          var itOnTheGround = new Error(
            'Unexpected unchainable operator d'
          );
          itOnTheGround.column = this.pos;

          throw itOnTheGround; //I'M AN ADULT!
        }

        this.operatorStack.push( token );
      }
    }

  },

  execute : function () {
    var idx;

    while ( (idx = this.operatorStack.length) ) {
      //execute, BACKWARDS! OH THE INSANITY
      while ( 0 <=-- idx ) {
        execute.call( this, this.operatorStack[idx], idx );
      }
    }

    function execute ( token, index ) {
      var last = this.operatorStack[ index + 1 ];

      //last one is more important than we are
      if ( last && last.precedence > token.precedence ) {
        //execute it
        this.operate( index + 1 );
      }
      //we're about to finish and the last one isn't as all-mighty as we
      // thought
      else if ( !index ) {
        //execute za operator!
        this.operate( index );
      }
    }
  },

  //fetch le token!
  nextToken : function () {
    var ch  = this.lookahead;
    var ret = {
      type : null,
      value : ch
    },
    res;

    //have we overflowed, while looking for something else?
    if ( this.pos >= this.len ) {
      throw new Error( 'Unexpected end of input' );
    }

    //is it a digit?
    else if ( ch >= 0 && ch < 10 ) {
      ret.type = 'number';
      res = this.fetchNumber();

      this.pos += res.length - 1;
      ret.value = res.value;
    }

    //is it an operator?
    else if ( operators.hasOwnProperty(ch) ) {
      ret.type = 'operator';
      ret.precedence = operators[ ch ].precedence;
    }

    //Y U TROLLZ!?!?
    else {
      var chuckNorris = new Error( 'Invalid character ' + ch );
      chuckNorris.column = this.pos;

      throw chuckNorris;
    }


    return ret;
  },

  operate : function ( index ) {
    //grab the two numbers we care about
    //since the source string looks like: 2 + 1
    // and the index param is actually the index of the operator to use,
    // we grab the index-th number and the index-th+1 number
    //in the above example, index = 0, we grab numberStack[0] and
    // numberStack[1]
    var couplet = this.numberStack.slice( index, index + 2 );
    //in addition to the numbers we operate on, there's also a dice-roll
    // operator, so we take it into consideration
    couplet.push( this.rolls );

    //arr.splice removes items and returns the removed items as an array
    //we remove the index-th item from the operatorStack and grab its
    // "value", which is the operator symbol (+, * etc)
    //when we have that value, we grab the corresponding operator object
    var op = operators[ this.operatorStack.splice(index, 1)[0].value ];

    //arr.splice, as well as removing items, can also add items
    //so, we slice-n-dice at the two numbers, grab the result of executing
    // the operator, and add that result where we finished slicing
    //for example:
    // [0, 1, 2].splice( 0, 2, 42 )
    //will make the array look like
    // [42, 2]
    this.numberStack.splice( index, 2, op.exec.apply(null, couplet) );
  },

  fetchNumber : function () {
    var offset = 0, num = '', ch;

    //keep eating digits until we find a non-digit
    while ( (ch = this.source[this.pos+offset]) >= 0 && ch < 10 ) {
      num += ch;
      offset++;
    }

    if ( num.length === 0 ) {
      throw new Error(
        'Incomplete operation: Expected number at ' + this.pos
      );
    }

    return {
      value : Number( num ),
      length : offset
    };
  }

};

//returns an object:
// total => result of all dice rolls and arithmetic operations
// rolls => array of results of each individual dice roll
return function ( source ) {
  return parser.parse( source );
};
}());

