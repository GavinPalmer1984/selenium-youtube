const assert = require('assert');

describe('channel', () => {
    it('should have the right title', () => {
        browser.url('https://www.youtube.com/channel/UC6JhS4GvWf3AJfOTfkrse2w/videos');
        assert.equal('Simulation', $('#channel-title').getText());
    });

    it('should click latest video', () => {
        $('.ytd-thumbnail').waitForDisplayed();
        $$('.ytd-thumbnail')[0].click();
    });

    it('should skip ads', () => {
        $('#player').waitForDisplayed();
        console.log('gp1', new Date());
        browser.pause(2000);
        while ($$('.ad-showing').length) {
            console.log('gp2', new Date());
            browser.pause(1000);
        }
        console.log('gp3', new Date());
    });

    it('should click share', () => {
        browser.debug();
        // $$('.ytp-ad-skip-button-slot')[0].click(); // skip ad
        $('button[aria-label="Share"]').waitForDisplayed();
        $('button[aria-label="Share"]').click();
    });
});