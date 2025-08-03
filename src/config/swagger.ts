import swaggerUi from 'swagger-ui-express';
import * as YAML from 'yamljs';
import * as path from 'path';

//Load 

const swaggerDoc = YAML.load(path.join(__dirname, '../../swagger.yaml'))

export {swaggerUi, swaggerDoc as specs};