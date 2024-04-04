import { IConfig } from './interfaces/config.interface';

export function config(): IConfig {
  const testing = process.env.NODE_ENV !== 'production';
  return {
    id: process.env.APP_ID,
    url: process.env.URL + 'maratib',
    port: parseInt(process.env.PORT, 10) || 3000,
    domain: process.env.DOMAIN,
    testing,
  };
}
