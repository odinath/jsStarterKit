import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
import {toUpperCase} from './utils/testUpperCase';

const { JSDOM } = jsdom;

describe('our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should have h1 that says Users', (done) => {
        const indexContent = fs.readFileSync('./src/index.html', 'utf-8');
        const dom = new JSDOM(indexContent);
        const h1 = dom.window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal("Users");
        done();
        dom.window.close();
    });
});

describe('our first function test', () => {
    it('should pass', () => {
        expect(toUpperCase('lorem ipsum')).to.equal("LOREM IPSUM");
    });
});
