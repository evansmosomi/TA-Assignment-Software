const { Weights } = require("./Weights");

class Choices{
    constructor(First_Name,Last_Name,Prof_Choice,LabInstruct_Choice,TA_Choice,TA_Passed,TA_Taught,TA_Major_Matches){

        this.First_Name = First_Name;
        this.Last_Name = Last_Name;

        this.Prof_Choice = Prof_Choice;
        this.LabInstruct_Choice = LabInstruct_Choice;
        this.TA_Choice = TA_Choice;

        this.TA_Passed = TA_Passed;
        this.TA_Taught = TA_Taught;
        this.TA_Major_Matches = TA_Major_Matches;
        this.assigned = false;
        this.Weight = Prof_Choice*Weights.Professor + LabInstruct_Choice*Weights.LabInstructer+ TA_Choice*Weights.TA +TA_Passed*Weights.Passed +  TA_Taught*Weights.Taught + TA_Major_Matches*Weights.Major;
    }
    getFullName(){
      return this.First_Name + " " + this.Last_Name
    }
    getWeight(){
      return this.Weight
    }

  
  };

  
  
  module.exports.Choices = Choices;