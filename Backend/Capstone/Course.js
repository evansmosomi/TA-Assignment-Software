
class Course{
  PotentialCandidates = [];
    constructor(Name, Min_Amount){

        this.Name = Name;
        this.Min_Amount = Min_Amount;
        
    }
 
    getCandidate(){
      return this.PotentialCandidates[0];
    }

    addChoice(Choice)
    {
      this.PotentialCandidates.push(Choice)
    }
    sortCandidates(){
      
      this.PotentialCandidates.sort(function(a, b) {
        
        return a.getWeight() - b.getWeight();
    });
    }
  
  };
  
  module.exports.Course = Course;