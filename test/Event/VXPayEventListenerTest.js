import {assert}           from 'chai';
import {describe, it}     from 'mocha';
import sinon              from 'sinon';
import VXPayTestFx        from './../Fixtures/VXPayTestFx';
import VXPayEventListener from './../../src/VXPay/Event/VXPayEventListener';

describe('VXPayEventListener', () => {
	describe('#addEvent', () => {
		it('Should use addEventListener when possible', () => {
			const event   = 'load';
			const doc     = VXPayTestFx.getDocument();
			const element = doc.getElementById('body');
			const handler = () => {};

			// mock addEventListener
			sinon.spy(element, 'addEventListener');

			VXPayEventListener.addEvent(event, element, handler);

			// check called
			assert.isTrue(element.addEventListener.called);
			assert.equal(element.addEventListener.getCall(0).args[0], event);
			assert.equal(element.addEventListener.getCall(0).args[1], handler);
			assert.isObject(element.addEventListener.getCall(0).args[2]);
			assert.isTrue(element.addEventListener.getCall(0).args[2].passive);

			// restore mock
			element.addEventListener.restore();
		});
		it('IE is sooooo IE ....', () => {
			const event   = 'load';
			const doc     = VXPayTestFx.getDocument();
			const  element = doc.getElementById('body');
			const handler = () => {};

			// disable addEventListener
			element.addEventListener = false;

			// add attachEvent to match the IE API
			element.attachEvent = () => {};

			// mock addEventListener
			sinon.spy(element, 'attachEvent');

			VXPayEventListener.addEvent(event, element, handler);

			// check called
			assert.isTrue(element.attachEvent.called);
			assert.equal(element.attachEvent.getCall(0).args[0], VXPayEventListener.IE_PREFIX + event);
			assert.equal(element.attachEvent.getCall(0).args[1], handler);

			// restore mock
			element.attachEvent.restore();
		});
		it('If passed an Array, will just store handler', () => {
			const event   = 'load';
			const element = [];
			const handler = () => {};

			VXPayEventListener.addEvent(event, element, handler);

			assert.equal(element[event], handler);
		});
	});
	describe('#removeEvent', () => {
		it('Should use removeEventListener when possible', () => {
			const event   = 'load';
			const doc     = VXPayTestFx.getDocument();
			const element = doc.getElementById('body');
			const handler = () => {};

			// mock addEventListener
			sinon.spy(element, 'removeEventListener');

			VXPayEventListener.removeEvent(event, element, handler);

			// check called
			assert.isTrue(element.removeEventListener.called);
			assert.equal(element.removeEventListener.getCall(0).args[0], event);
			assert.equal(element.removeEventListener.getCall(0).args[1], handler);
			assert.isObject(element.removeEventListener.getCall(0).args[2]);
			assert.isTrue(element.removeEventListener.getCall(0).args[2].passive);

			// restore mock
			element.removeEventListener.restore();
		});
		it('IE is sooooo IE ....', () => {
			const event   = 'load';
			const doc     = VXPayTestFx.getDocument();
			const element = doc.getElementById('body');
			const handler = () => {};

			// disable addEventListener
			element.removeEventListener = false;

			// add attachEvent to match the IE API
			element.detachEvent = () => {};

			// mock addEventListener
			sinon.spy(element, 'detachEvent');

			VXPayEventListener.removeEvent(event, element, handler);

			// check called
			assert.isTrue(element.detachEvent.called);
			assert.equal(element.detachEvent.getCall(0).args[0], VXPayEventListener.IE_PREFIX + event);
			assert.equal(element.detachEvent.getCall(0).args[1], handler);

			// restore mock
			element.detachEvent.restore();
		});
		it('If passed an Array, will removehandler', () => {
			const event   = 'load';
			const element = [];
			const handler = () => {};

			VXPayEventListener.removeEvent(event, element, handler);

			assert.equal(element[event], null);
		});
	});
});
