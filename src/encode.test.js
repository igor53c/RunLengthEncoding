import { encode } from './encode';

test('Encode "aaa" to be "3a"', () => {
    expect(encode("aaa")).toBe("3a");
});

test('Encode "" to be ""', () => {
    expect(encode("")).toBe("");
});

test('Encode "aab" to be "2a1b"', () => {
    expect(encode("aab")).toBe("2a1b");
});

test('Encode "a" to be "1a"', () => {
    expect(encode("a")).toBe("1a");
});
