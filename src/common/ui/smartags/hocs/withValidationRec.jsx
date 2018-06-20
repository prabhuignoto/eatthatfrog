import { compose, lifecycle } from 'recompose';
import _ from 'lodash';
import withValidation from './withValidationNew';

function hasDuplicates(collection) {
  const uniqueValues = _.chain(collection).map(x => x.name.toLowerCase()).uniq().value();
  return uniqueValues.length !== collection.length;
}

function getValidationResult(validationMessages) {
  const { foxes: allFoxes } = this.ref.current.state;
  const noFoxes = allFoxes.length < 1;
  const foundDuplicates = hasDuplicates(allFoxes);
  const isEmpty = _.some(allFoxes, x => !x.name);
  let message = null;

  if (foundDuplicates) {
    message = this.props.validationMessages.hasDuplicates;
  } else if (noFoxes) {
    message = validationMessages.itemsEmpty;
  } else if (isEmpty) {
    message = 'Cannot be empty';
  }

  return {
    error: Object.assign({}, this.state.error, {
      message,
    }),
  };
}

export default compose(lifecycle({
  componentWillReceiveProps(nextProps) {
    const [nPropsValidateInput, thisPropsValidateInput] = [
      nextProps.validateInput,
      this.props.validateInput,
    ];
    if (nPropsValidateInput && (thisPropsValidateInput !== nPropsValidateInput)) {
      this.setState(getValidationResult(this.props.validationMessages));
    }
  },
}))(withValidation);
