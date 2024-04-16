import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const feedOptionsSchema: SpruceSchemas.Mercury.v2020_12_25.FeedOptionsSchema = {
    id: 'feedOptions',
    version: 'v2020_12_25',
    namespace: 'Mercury',
    name: '',
    moduleToImportFromWhenRemote: '@sprucelabs/mercury-types',
    fields: {
        /** . A handlebarsjs template used to render the chat bubbles in the feed. You will have both the entire target and payload available to you in the template. See http://developer.spruce.bot for more details. */
        template: {
            type: 'text',
            hint: 'A handlebarsjs template used to render the chat bubbles in the feed. You will have both the entire target and payload available to you in the template. See http://developer.spruce.bot for more details.',
            options: undefined,
        },
        /** . */
        pathsToLinks: {
            type: 'text',
            isArray: true,
            minArrayLength: 0,
            options: undefined,
        },
        /** . */
        pathsToChoices: {
            type: 'text',
            isArray: true,
            minArrayLength: 0,
            options: undefined,
        },
        /** . */
        pathToContext: {
            type: 'text',
            options: undefined,
        },
    },
}

SchemaRegistry.getInstance().trackSchema(feedOptionsSchema)

export default feedOptionsSchema
