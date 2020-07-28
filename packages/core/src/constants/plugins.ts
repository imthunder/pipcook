import { PluginTypeI } from '../types/plugins';

export const DATACOLLECT: PluginTypeI = 'dataCollect';
export const DATAACCESS: PluginTypeI = 'dataAccess';
export const DATAPROCESS: PluginTypeI = 'dataProcess';
export const GLOBALDATAPROCESS: PluginTypeI = 'globalDataProcess';
export const MODELLOAD: PluginTypeI = 'modelLoad';
export const MODELDEFINE: PluginTypeI = 'modelDefine';
export const MODELTRAIN: PluginTypeI = 'modelTrain';
export const MODELEVALUATE: PluginTypeI = 'modelEvaluate';
export const PLUGINS: PluginTypeI[] = [
  DATACOLLECT,
  DATAACCESS,
  DATAPROCESS,
  GLOBALDATAPROCESS,
  MODELLOAD,
  MODELDEFINE,
  MODELTRAIN,
  MODELEVALUATE
];
