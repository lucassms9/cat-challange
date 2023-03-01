import { render, screen } from '@testing-library/react-native';

import IconButton from '..';

import CloseIcon from '../../../icons/x.svg';

describe('IconButton', () => {
  it('should render with success', () => {
    const component = <IconButton onPress={jest.fn()} icon={<CloseIcon />} />;
    const { queryByTestId, debug } = render(component);
    const container = queryByTestId('iconButtonContainer');
    expect(container).toBeTruthy();
  });
});
