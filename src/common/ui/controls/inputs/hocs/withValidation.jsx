import { compose, withStateHandlers } from 'recompose';
import ValidationView from './validation';

export default function withValidation(BaseComponent) {
  return ValidationView
}
