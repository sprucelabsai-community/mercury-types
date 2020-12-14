import AbstractSpruceTest, { test, assert } from '@sprucelabs/test'
import eventContractUtil from '../../utilities/eventContract.utility'

export default class EventContractUtilityTest extends AbstractSpruceTest {
	@test()
	protected static canParseEventName() {
		const nameParts = eventContractUtil.splitEventNameWithOptionalNamespace(
			'test.event'
		)
		assert.isEqualDeep(nameParts, {
			eventName: 'event',
			eventNamespace: 'test',
		})
	}

	@test()
	protected static canJoinEventName() {
		const name = eventContractUtil.joinEventNameWithOptionalNamespace({
			eventNamespace: 'test',
			eventName: 'event',
		})
		assert.isEqual(name, 'test.event')
	}

	@test(
		'can generate response name from event',
		'test-event',
		'test-event:response'
	)
	@test(
		'can generate response name from event with namespace',
		'test.event',
		'test.event:response'
	)
	protected static canGenerateResponseEventName(
		eventName: string,
		expected: string
	) {
		const actual = eventContractUtil.generateResponseEventName(eventName)
		assert.isEqual(actual, expected)
	}
}
