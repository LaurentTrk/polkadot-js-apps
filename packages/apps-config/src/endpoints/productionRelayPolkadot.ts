// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types';

import { POLKADOT_GENESIS } from '../api/constants';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const prodParasPolkadot: EndpointOption[] = [
  {
    info: 'sublink',
    homepage: 'https://acala.network/',
    paraId: 2000,
    text: 'SubLink',
    providers: {
      'SubLink': 'wss://sublinkchain.ltk.codes'
    }
  },
  {
    info: 'defichain',
    homepage: 'https://acala.network/',
    paraId: 2001,
    text: 'DefiChain',
    providers: {
      'SubLink': 'wss://defichain.ltk.codes'  
    }
  }
];

export const prodRelayPolkadot: EndpointOption = {
  dnslink: 'polkadot',
  genesisHash: POLKADOT_GENESIS,
  info: 'polkadot',
  text: 'Relay Chain',
  providers: {
    SubLink: 'wss://relaychain.ltk.codes',
  },
  teleport: [1000],
  linked: [
    ...prodParasPolkadot
  ]
};
