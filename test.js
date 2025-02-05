function decideBicycleWinner(diary1, diary2, diary3) {
  // Helper function to calculate the total marks from a diary
  function calculateTotalMarks(diary) {
      return Object.values(diary).reduce((sum, mark) => sum + mark, 0);
  }

  // Calculate total marks for each son
  const firstSonMarks = calculateTotalMarks(diary1);
  const secondSonMarks = calculateTotalMarks(diary2);
  const thirdSonMarks = calculateTotalMarks(diary3);

  // Preloaded age table
  const ageTable = {
      'firstSonAge': 14,
      'secondSonAge': 9,
      'thirdSonAge': 8
  };

  // Find the maximum marks
  const maxMarks = Math.max(firstSonMarks, secondSonMarks, thirdSonMarks);

  // Determine the winner
  if (firstSonMarks === maxMarks && firstSonMarks >= secondSonMarks && firstSonMarks >= thirdSonMarks) {
      return 'I need to buy a bicycle for my first son.';
  } else if (secondSonMarks === maxMarks && secondSonMarks >= thirdSonMarks) {
      return 'I need to buy a bicycle for my second son.';
  } else if (thirdSonMarks === maxMarks) {
      return 'I need to buy a bicycle for my third son.';
  }

  // Handle ties (if needed)
  if (firstSonMarks === secondSonMarks && firstSonMarks === thirdSonMarks) {
      // All three have the same marks, choose the youngest
      const youngestSon = Math.min(ageTable.firstSonAge, ageTable.secondSonAge, ageTable.thirdSonAge);
      if (youngestSon === ageTable.thirdSonAge) {
          return 'I need to buy a bicycle for my third son.';
      } else if (youngestSon === ageTable.secondSonAge) {
          return 'I need to buy a bicycle for my second son.';
      } else {
          return 'I need to buy a bicycle for my first son.';
      }
  } else if (firstSonMarks === secondSonMarks) {
      // First and second son have the same marks, choose the younger one
      if (ageTable.firstSonAge < ageTable.secondSonAge) {
          return 'I need to buy a bicycle for my first son.';
      } else {
          return 'I need to buy a bicycle for my second son.';
      }
  } else if (secondSonMarks === thirdSonMarks) {
      // Second and third son have the same marks, choose the younger one
      if (ageTable.secondSonAge < ageTable.thirdSonAge) {
          return 'I need to buy a bicycle for my second son.';
      } else {
          return 'I need to buy a bicycle for my third son.';
      }
  } else if (firstSonMarks === thirdSonMarks) {
      // First and third son have the same marks, choose the younger one
      if (ageTable.firstSonAge < ageTable.thirdSonAge) {
          return 'I need to buy a bicycle for my first son.';
      } else {
          return 'I need to buy a bicycle for my third son.';
      }
  }
}

// Example Usage
const firstSonDiary = { 'algebra': 6, 'history': 8, 'physics': 9, 'geography': 2, 'chemistry': 9 };
const secondSonDiary = { 'math': 7, 'biology': 5, 'art': 10, 'music': 8 };
const thirdSonDiary = { 'english': 4, 'literature': 6, 'sports': 10, 'science': 7 };

console.log(decideBicycleWinner(firstSonDiary, secondSonDiary, thirdSonDiary));