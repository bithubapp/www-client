import 'steal-mocha';
import chai from 'chai';
import {ServiceConfig} from './service-config';

const assert = chai.assert;

let service;

xdescribe('models/serviceConfig', () => {
	beforeEach(() => {
		service = new ServiceConfig({});
	});
	it('does something', () => {
		assert.equals(service, true);
	});
});
