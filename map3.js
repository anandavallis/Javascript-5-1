
    <h2>Map Objects</h2>
    

   const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 }
 ];

  function createScoreLookUp(students) {
    const scoreMap = new Map();
    students.forEach(student => {
        scoreMap.set(student.name, student.score);
    });
     return function(name) {
        return scoreMap.get(name);
    }
  }

const looksUpScore = createScoreLookUp(students);
console.log(looksUpScore("Bob"));

   
