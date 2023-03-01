import { render } from '@testing-library/react-native';
import OverlayLabel from '..';

describe('OverlayLabel', () => {
  it('should render with success', () => {
    const component = <OverlayLabel color="#fff" label="123" />;
    const { queryByTestId } = render(component);
    const container = queryByTestId('overlayLabelContainer');
    expect(container).toBeTruthy();
  });
});
