function whoseBicycle(diary1, diary2, diary3) {
    function calculateMarks(diary) {
        return Object.values(diary).reduce((sum, mark) => sum + mark, 0);
    }

    const firstSonMarks = calculateMarks(diary1);
    const secondSonMarks = calculateMarks(diary2);
    const thirdSonMarks = calculateMarks(diary3);

    const ageTable = {
        'firstSonAge': 14,
        'secondSonAge': 9,
        'thirdSonAge': 8
    };

    const marks = {
        'first': firstSonMarks,
        'second': secondSonMarks,
        'third': thirdSonMarks
    };

    const maxMarks = Math.max(...Object.values(marks));

    // Get the list of sons who have the highest marks
    let eligibleSons = Object.keys(marks).filter(son => marks[son] === maxMarks);

    // If more than one son has the highest marks, pick the youngest
    let youngestSon = eligibleSons.reduce((youngest, son) => {
        if (ageTable[`${son}SonAge`] < ageTable[`${youngest}SonAge`]) {
            return son;
        }
        return youngest;
    });

    return `I need to buy a bicycle for my ${youngestSon} son.`;
}
