import { Amplify } from 'aws-amplify';
import config from '../aws-exports.js';
import { generateClient } from 'aws-amplify/api';
import * as queries from './graphql/queries.js'

Amplify.configure(config);

const client = generateClient();

const data = await client.graphql({ query: queries.listMyPracTables });
data.data.listMyPracTables.items.forEach(element => {
    console.log(element)
});

