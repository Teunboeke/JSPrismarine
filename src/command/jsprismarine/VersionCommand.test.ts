const Command = require('./VersionCommand').default;
const packageFile = require('../../../package.json');
const identifiers = require('../../network/Identifiers').default;

describe('command', () => {
    describe('jsprismarine', () => {
        describe('VersionCommand', () => {
            const command = new Command();

            it('name & namespace should be set correctly', () => {
                expect(command.id).toBe('jsprismarine:version');
            });
        });
    });
});
