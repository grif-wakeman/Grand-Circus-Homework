const pigLatinTest = require("./pigLatin.js")

describe("pig latin", () => {

    // vowel tests

    test("apple should translate to appleway in pig latin", () => {
        expect(pigLatinTest.translatePigLatin("apple")).toEqual("appleway");
    });

    test("else should translate to elseway in pig latin", () => {
        expect(pigLatinTest.translatePigLatin("else")).toEqual("elseway");
    });
    
    test("ice should translate to iceway in pig latin", () => {
        expect(pigLatinTest.translatePigLatin("ice")).toEqual("iceway");
    });

    test("orange should translate to orangeway in pig latin", () => {
        expect(pigLatinTest.translatePigLatin("orange")).toEqual("orangeway");
    });

    test("umbrella should translate to umbrellaway in pig latin", () => {
        expect(pigLatinTest.translatePigLatin("umbrella")).toEqual("umbrellaway");
    });

    //consonant tests

    test("giraffe should translate to irrafegay in pig latin", () => {
        expect(pigLatinTest.translatePigLatin("giraffe")).toEqual("iraffegay");
    });

    test("pencil should translate to encilpay in pig latin", () => {
        expect(pigLatinTest.translatePigLatin("pencil")).toEqual("encilpay");
    });

    // two consonant test

    test("knife should translate to ifeknay in pig latin", () => {
        expect(pigLatinTest.translatePigLatin("knife")).toEqual("ifeknay");
    });

    // three consonant test

    test("split should translate to itsplay in pig latin", () => {
        expect(pigLatinTest.translatePigLatin("split")).toEqual("itsplay");
    });

    // lowercase string test

    test("the string entered into the function should output as lowercase", () => {
        expect(pigLatinTest.translatePigLatin("HAM")).toEqual("amhay");
    });

    test("an entered number should remain the same", () => {
        expect(pigLatinTest.translatePigLatin("123")).toEqual("123");
    });


});