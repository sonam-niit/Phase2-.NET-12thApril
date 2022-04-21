///<reference path="Validation.ts"/>
namespace Validation{

    const numberRegexp= /^[0-9]+$/;

    export class ZipCodeValidator implements StringValidator{

        isAcceptable(s: string): boolean {
            return s.length===3 && numberRegexp.test(s);
        }

    }
}