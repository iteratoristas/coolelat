function shuffle(array) {
    if (!array) return [];

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

export default function randomizer(questions) {
    const shuffledQuestions = shuffle(questions);

    return shuffledQuestions.map((item) => {
        let question = item;
        console.log(item)
        const shuffledOptions = shuffle(item.options);

        question.options = shuffledOptions;

        return question;
    });
}
