import { buildSchema } from 'type-graphql';
import { joinRoot } from './common/rootPath';
import { customAuthChecker } from '@utils/auth/authChecker';
import { glob as _glob } from 'glob';
import { promisify } from 'util';
import { allFields } from '@root/bot-client-gen/RegisterEntity';

const glob = promisify(_glob);

export const getSchema = async () => {
  const filenames = await glob(joinRoot('./modules/**/*.resolver.js'));

  filenames.push(joinRoot('./utils/RelationalPaginationResolvers.js'));

  const resolvers: any = filenames
    .map((filename) => Object.values(require(filename)))
    .flat();

  return buildSchema({
    resolvers,
    emitSchemaFile: joinRoot('../schema.gql'),
    authChecker: customAuthChecker,
  });
};

if (require.main === module) {
  process.env.BOT_CLIENT_MODE = 'true';
  getSchema().then(() => {
    console.log(allFields);

    process.exit();
  });
}
