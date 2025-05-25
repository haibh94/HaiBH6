class Question {
    constructor(q, index) {
        this.question = q.question;
        this.answers = q.answers;
        this.correctAnswer = q.correctAnswer;
        this.multi = q.multi;
        this.index = index;
    }

    render() {
        throw new Error('Subclass must override this method');
    }
}