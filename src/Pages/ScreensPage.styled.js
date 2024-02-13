import styled from 'styled-components';
import { pictures_mobile_1x } from 'images/mobile_1x/index'
import { pictures_mobile_2x } from 'images/mobile_2x/index'
import { pictures_tablet_1x } from 'images/tablet_1x/index'
import { pictures_tablet_2x } from 'images/tablet_2x/index'
import { pictures_desktop_1x } from 'images/desktop_1x/index'
import { pictures_desktop_2x } from 'images/desktop_2x/index'

export const ScreensPageWrapper = styled.div`
  position: relative;
  background-color: ${p => p.theme.violetColors.violetFill};
  background-size: cover;
  background-image: url(${ props => pictures_mobile_1x[props.back]});
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media only screen and (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
    background-image: url(${ props => pictures_mobile_2x[props.back]});
  }

  @media only screen and (min-width: 768px) {
    background-image: url(${ props => pictures_tablet_1x[props.back]});

    @media only screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
      background-image: url(${ props => pictures_tablet_2x[props.back]});
    }
  }

  @media only screen and (min-width: 1440px) {
    background-image: url(${ props => pictures_desktop_1x[props.back]});

    @media only screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
      background-image: url(${ props => pictures_desktop_2x[props.back]});
    }
  }
}
`;
