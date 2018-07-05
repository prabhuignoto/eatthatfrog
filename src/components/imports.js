// ui modules
// import List from '../common/ui/list/views/list';
import List from '../common/ui/list/views/list';
import Popup from '../common/ui/popup/hocs/withEsc';
import NotificationCenter from '../common/ui/notification/notificationCenter';

import Button from '../common/ui/controls/button/default';
import Smartags from '../common/ui/smartags';
import RadioGroup from '../common/ui/radiogroup/hocs/radioGroup';
import ToggleSwitch from '../common/ui/toggle-switch/toggle-default';
import ToggleSwitchSimple from '../common/ui/toggle-switch';
import SearchBox from '../common/ui/searchbox';
import withValidation from '../common/ui/controls/inputs/hocs/validation';
import { TextInput, TextArea } from '../common/ui/exports';

export {
  List,
  NotificationCenter,
  Button,
  Popup,
  Smartags,
  RadioGroup,
  ToggleSwitch,
  SearchBox,
  ToggleSwitchSimple,
};

const [TextInputWithValidation, TextAreaWithValidation] = [
  withValidation(TextInput),
  withValidation(TextArea),
];
export {
  TextInput, TextArea, TextInputWithValidation, TextAreaWithValidation,
};
