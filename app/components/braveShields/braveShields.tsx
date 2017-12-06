/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import BraveShieldsHeader from './braveShieldsHeader'
import BraveShieldsStats from './braveShieldsStats'
import BraveShieldsControls from './braveShieldsControls'
import BraveShieldsFooter from './braveShieldsFooter'
import * as shieldActions from '../../types/actions/shieldsPanelActions'
import { Tab } from '../../types/state/shieldsPannelState'

export interface Props {
  actions: {
    shieldsToggled: shieldActions.ShieldsToggled,
    blockAdsTrackers: shieldActions.BlockAdsTrackers,
    controlsToggled: shieldActions.ControlsToggled,
    httpsEverywhereToggled: shieldActions.HttpsEverywhereToggled,
    javascriptToggled: shieldActions.JavascriptToggled
  },
  shieldsPanelTabData: Tab
}

class BraveShields extends React.Component<Props, object> {
  render () {
    const { shieldsPanelTabData, actions } = this.props

    if (!shieldsPanelTabData) {
      return null
    }

    return (
      <div data-test-id='brave-shields-panel'>
        <BraveShieldsHeader
          shieldsEnabled={shieldsPanelTabData.shieldsEnabled}
          shieldsToggled={actions.shieldsToggled}
          hostname={shieldsPanelTabData.hostname}
        />
        <BraveShieldsStats
          shieldsEnabled={shieldsPanelTabData.shieldsEnabled}
          adsBlocked={shieldsPanelTabData.adsBlocked}
          trackingProtectionBlocked={shieldsPanelTabData.trackingProtectionBlocked}
          httpsEverywhereRedirected={shieldsPanelTabData.httpsEverywhereRedirected}
          javascriptBlocked={shieldsPanelTabData.javascriptBlocked}
        />
        <BraveShieldsControls
          shieldsEnabled={shieldsPanelTabData.shieldsEnabled}
          blockAdsTrackers={actions.blockAdsTrackers}
          adsTrackers={shieldsPanelTabData.adsTrackers}
          httpsEverywhere={shieldsPanelTabData.httpsEverywhere}
          javascript={shieldsPanelTabData.javascript}
          controlsToggled={actions.controlsToggled}
          httpsEverywhereToggled={actions.httpsEverywhereToggled}
          javascriptToggled={actions.javascriptToggled}
          controlsOpen={shieldsPanelTabData.controlsOpen}
        />
        <BraveShieldsFooter />
      </div>
    )
  }
}

export default BraveShields