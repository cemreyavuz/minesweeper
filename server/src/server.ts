process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import IndexRoute from '@routes/index.route';
import PeersRoute from '@routes/peers.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new PeersRoute()]);

app.listen();
