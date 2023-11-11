export type QuizType = {
    questions:{
        question: string,
        questionPic: string,
        answers: string[],
        correctAnswer: number,
        messageForCorrectAnswer:string,
        messageForIncorrectAnswer:string,
        explanation:string,
        askOnSecond:number,

    }[];
}


export const quiz:QuizType = {
    questions: [
        {
          question:
            "How can you access the state of a component from inside of a member function?",
          questionPic: "https://dummyimage.com/600x400/000/fff&text=X", 
          answers: [
            "this.getState()",
            "this.prototype.stateValue",
            "this.state",
            "this.values",
          ],
          correctAnswer: 3,
          messageForCorrectAnswer: "Correct answer. Good job.",
          messageForIncorrectAnswer: "Incorrect answer. Please try again.",
          explanation:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          askOnSecond: 3,
        },
    ]
}