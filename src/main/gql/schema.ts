import { gql } from 'graphql-tag';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const schemaDir = join(__dirname, 'types');

// Get all files in the directory
const files = readdirSync(schemaDir);

// Filter the files based on the file extension
const graphqlFiles = files.filter((file: string) => file.endsWith('.graphql'));

// Loop over the graphql files and read their contents
const typeDefsArray = graphqlFiles.map((file: string) => {
  const filePath = join(schemaDir, file);
  return readFileSync(filePath, 'utf8');
});

// Combine the type definitions using gql
const typeDefs = gql(typeDefsArray.join('\n'));

export default typeDefs;
