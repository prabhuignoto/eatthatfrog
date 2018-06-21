import { compose, withStateHandlers, withProps } from 'recompose';
import classNames from 'classnames';
import withControls from '../views/decorators/listItemWithControls';


export default function listWithControls(BaseComponent) {
  const intialState = ({ showControls = false, animationEnabled = false }) => ({
    showControls,
    animationEnabled,
  });

  const stateHandlers = {
    toggleControls: ({ showControls }) => () => ({
      showControls: !showControls,
      animationEnabled: true,
    }),
  };

  const props = ({
    showControls, animationEnabled, toggleControls, onComplete, onDelete, name,
  }) => ({
    listItemWrapperClass: classNames('list-item-wrapper', {
      'reduce-size': showControls,
      'original-size': !showControls,
    }),
    listControlsWrapper: classNames('list-controls-wrapper', {
      show: showControls,
      hide: !showControls,
    }),
    mainClass: classNames('list-with-controls', {
      'animation-enabled': animationEnabled,
    }),
    toggleControls,
    onComplete,
    onDelete,
    name,
  });

  return compose(
    withStateHandlers(intialState, stateHandlers),
    withProps(props),
  )(withControls(BaseComponent));

}
