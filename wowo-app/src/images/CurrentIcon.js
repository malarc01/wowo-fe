import React, {PureComponent} from 'react';


class CurrentIcon extends PureComponent {
  render() {
    const {width='100%', fill1='#181919', fill2='#343332'} = this.props;

    return (
        <svg id="Layer_1" x="0px" y="0px" width={width} viewBox="0 0 97 97" style={{enableBackground:"new 0 0 97 97"}}>
            <g>
                <circle fill={fill1} cx="48.5" cy="48.5" r="47.850006"/>
                <path fill={fill2} d="M48.499969,22.649994c-7.649963,0-13.849976,6.200012-13.849976,13.849976l3.27002,8.929993
                    l10.579956,28.920044l10.580017-28.920044l3.27002-8.929993C62.350006,28.850006,56.149994,22.649994,48.499969,22.649994z
                    M48.499969,31.350006c2.840027,0,5.150024,2.309998,5.150024,5.149963c0,2.840027-2.309998,5.150024-5.150024,5.150024
                    c-2.839966,0-5.149963-2.309998-5.149963-5.150024C43.350006,33.660004,45.660004,31.350006,48.499969,31.350006z"/>
            </g>
        </svg>
    );
  }
}

export default CurrentIcon;