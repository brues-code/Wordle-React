import { Messages } from 'types/i18n';
import { Locales } from 'enums';

import en from './messages.en';

export const AppMessages: { [languageCode in Locales]: Messages } = { en };

export default AppMessages;
