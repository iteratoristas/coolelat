export function formatQuestionAndAnswer(question) {
    let testString = question.question;
    let testAnswer = question.answer;

    for (let i = 0; i < question.options.length; i++) {
        const element = question.options[i];
        const index = testString.indexOf(element.variable);
        const answerIndex = testAnswer.indexOf(element.variable);
    
        let value = element.min + Math.random() * element.max - 1;
    
        if (element.decimal === 0) {
          value = Math.trunc(value)
        } else {
          value = Math.floor(value * Math.pow(10, element.decimal)) / Math.pow(10, element.decimal)
        }
    
        testString = testString.substring(0, index) + value + testString.substring(index + element.variable.length);
        testAnswer = testAnswer.substring(0, answerIndex) + value + testAnswer.substring(answerIndex + element.variable.length);
    }

    return {answer: testAnswer, string: testString};
}

export function getVariables(question = "[length] x [width]") {
  const regex = new RegExp(/(\[[a-z]+\])+/gi);
  return question.match(regex)?.filter?.((item, index, array) => array.indexOf(item) === index);
}
