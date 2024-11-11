import type {ViewToken} from 'react-native';

export type InfoProps<T> = {
  viewableItems: Array<ViewToken<T>>;
  changed: Array<ViewToken<T>>;
};
