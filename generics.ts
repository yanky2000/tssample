// source = https://www.youtube.com/watch?v=eJ6R1knfsoc
// Use case of generics
// First we define "general" entity type, and later we specify sub entity with its own alias.

// its not intersection type (&)
export enum QuestionEnum {
    root = "root",
    nested = "nested",
}

// type Question<T extends QuestionEnum = QuestionEnum> = {
type Question<T = QuestionEnum> = {
    body: string;
    type: T;
};

type NestedQuestion = Question<QuestionEnum.nested>;
type RootQuestion = Question<QuestionEnum.root>;

const root = { body: "hellola", type: QuestionEnum.root };
const nested = { body: "hellola", type: QuestionEnum.nested };

// ! Beware that example below produces an error.
// const arrOfNested: (NestedQuestion )[] = [nested];

// We have to use union type for it to work
const arr: (NestedQuestion | RootQuestion)[] = [nested];

// type could be either 'root' or 'nested'
const fistQ: Question = { body: "hellola", type: QuestionEnum.nested };

// type here will accempt only 'nested'
const second: NestedQuestion = { body: "hellola", type: QuestionEnum.nested };
