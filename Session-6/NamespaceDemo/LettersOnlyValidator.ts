///<reference path="Validation.ts"/>

namespace Validation{

    const lettersRegexp= /^[A-Za-z]+$/;

    export class LettersOnlyVlidator implements StringValidator{

        isAcceptable(s: string): boolean {
            return lettersRegexp.test(s);
        }

    }
}