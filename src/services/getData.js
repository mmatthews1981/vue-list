// function getData() {
    // return {
    //     '1': { name: 'Number Uno', subtitle: 'The first one!' },
    //     '10': { name: 'Number Ten', subtitle: 'The tenth one!' },
    //     '2': { name: 'Johnny Magic', subtitle: 'Has a rad car.' },
    //     '33': { name: 'OK', subtitle: 'What?' },
    //     '4': { name: 'Hello World', subtitle: 'Hi tiny world.' },
    //     '555': { name: 'Cinco Cinco Cinco', subtitle: 'Sunday Sunday Sunday' },
    //     '6': { name: 'Person Six', subtitle: 'There is not enough data in the universe to describe this particular entry' },
    //     '7': { name: 'George M.', subtitle: '' },
    //     '8': { name: 'Michael J. Fox', subtitle: null },
    //     '9': { name: 'Captain C.', subtitle: 'Super Cool' },
    //     '000': { name: 'Edwin C.', subtitle: '___.___.___' },
    //     'a': { name: 'Josh I.', subtitle: 'The coolest.' },
    //     'b': { name: 'Todd_C', subtitle: 'Why?' },
    //     'aa': { name: 'Ol\' Hambone', subtitle: 13 },
    //     'cde': { name: 'Beef Supreme', subtitle: [] },
    //     'f': { name: 'Tim_ERIC', subtitle: 'A & B, 123' },
    //     'ghi': { name: '', subtitle: 'Who is this?' },
    //     'k': { name: 'someone Else', subtitle: { 'abc': 'ok' } },
    //     'hello': { name: 'Okee Dokey', subtitle: 'Artichokey' },
    //     'there!': { name: 'Half-Shark-Alligator-Half-Man', subtitle: 'Kool' },
    //     ' ': { name: '', subtitle: '098' },
    //     'nope': { name: null, subtitle: '' },
    //     'awesome': { name: 'The Champ', subtitle: 'ZZZBCBJJBJBEBFJBEWBFBEWWJBJBFEWFBEWJBFJJEBWJFEW#R#@J#BJQBBQWDWQWDBJBJBDQWBJBJEWFBF' },
    //   };
// }

class TheData {

    constructor(){
        this.data = {
            '1': { name: 'Number Uno', subtitle: 'The first one!' },
            '10': { name: 'Number Ten', subtitle: 'The tenth one!' },
            '2': { name: 'Johnny Magic', subtitle: 'Has a rad car.' },
            '33': { name: 'OK', subtitle: 'What?' },
            '4': { name: 'Hello World', subtitle: 'Hi tiny world.' },
            '555': { name: 'Cinco Cinco Cinco', subtitle: 'Sunday Sunday Sunday' },
            '6': { name: 'Person Six', subtitle: 'There is not enough data in the universe to describe this particular entry' },
            '7': { name: 'George M.', subtitle: '' },
            '8': { name: 'Michael J. Fox', subtitle: null },
            '9': { name: 'Captain C.', subtitle: 'Super Cool' },
            '000': { name: 'Edwin C.', subtitle: '___.___.___' },
            'a': { name: 'Josh I.', subtitle: 'The coolest.' },
            'b': { name: 'Todd_C', subtitle: 'Why?' },
            'aa': { name: 'Ol\' Hambone', subtitle: 13 },
            'cde': { name: 'Beef Supreme', subtitle: [] },
            'f': { name: 'Tim_ERIC', subtitle: 'A & B, 123' },
            'ghi': { name: '', subtitle: 'Who is this?' },
            'k': { name: 'someone Else', subtitle: { 'abc': 'ok' } },
            'hello': { name: 'Okee Dokey', subtitle: 'Artichokey' },
            'there!': { name: 'Half-Shark-Alligator-Half-Man', subtitle: 'Kool' },
            ' ': { name: '', subtitle: '098' },
            'nope': { name: null, subtitle: '' },
            'awesome': { name: 'The Champ', subtitle: 'ZZZBCBJJBJBEBFJBEWBFBEWWJBJBFEWFBEWJBFJJEBWJFEW#R#@J#BJQBBQWDWQWDBJBJBDQWBJBJEWFBF' },
          }   
    }
    getData() {
        return this.data;
    }
}

export {TheData}; // a list of exported variables