module.exports = [{
  name: 'Digital Bazaar',
  implementation: 'Veres One (Q/A)',
  issuers: [
    {
      id: 'https://localhost:39443/issuers/z19yatFSxXPzL3JpSx9kWHWgz',
      endpoint: 'https://localhost:39443/issuers/z19yatFSxXPzL3JpSx9kWHWgz/credentials/issue',
      method: 'POST',
      zcap: {
        capability: '{"@context":["https://w3id.org/zcap/v1","https://w3id.org/security/suites/ed25519-2020/v1"],"id":"urn:uuid:aa1ac268-a8b5-4d14-86fb-7ee81d483db4","controller":"did:key:z6MkptjaoxjyKQFSqf1dHXswP6EayYhPQBYzprVCPmGBHz9S","parentCapability":"urn:zcap:root:https%3A%2F%2Flocalhost%3A39443%2Fissuers%2Fz19yatFSxXPzL3JpSx9kWHWgz","invocationTarget":"https://localhost:39443/issuers/z19yatFSxXPzL3JpSx9kWHWgz/credentials","expires":"2024-10-29T15:28:09Z","proof":{"type":"Ed25519Signature2020","created":"2023-10-30T15:28:09Z","verificationMethod":"did:key:z6MkqBNEnkYj1aMnfKmNLcyzKPo1vT43HGhd6WvsvvX3Ttz2#z6MkqBNEnkYj1aMnfKmNLcyzKPo1vT43HGhd6WvsvvX3Ttz2","proofPurpose":"capabilityDelegation","capabilityChain":["urn:zcap:root:https%3A%2F%2Flocalhost%3A39443%2Fissuers%2Fz19yatFSxXPzL3JpSx9kWHWgz"],"proofValue":"z3DFhaBRLBPdRwktfTHh88TvmEfGaj31TQVXbYZDZQiRkQgtjf28vZAXe4irGkcQeXLwgmmE2kHZpD5KJuchF3HkZ"}}',
        keySeed: 'KEY_SEED_DB'
      },
      tags: ['StatusList2021', 'Revocation', 'localhost']
    },
    {
      id: 'https://localhost:39443/issuers/z19puXc4xVDxvKqg7KgA63DBp',
      endpoint: 'https://localhost:39443/issuers/z19puXc4xVDxvKqg7KgA63DBp/credentials/issue',
      method: 'POST',
      zcap: {
        capability: '{"@context":["https://w3id.org/zcap/v1","https://w3id.org/security/suites/ed25519-2020/v1"],"id":"urn:uuid:8886231f-4cb3-4eff-a3f9-58b9725ea344","controller":"did:key:z6MkptjaoxjyKQFSqf1dHXswP6EayYhPQBYzprVCPmGBHz9S","parentCapability":"urn:zcap:root:https%3A%2F%2Flocalhost%3A39443%2Fissuers%2Fz19puXc4xVDxvKqg7KgA63DBp","invocationTarget":"https://localhost:39443/issuers/z19puXc4xVDxvKqg7KgA63DBp/credentials","expires":"2024-10-29T15:37:26Z","proof":{"type":"Ed25519Signature2020","created":"2023-10-30T15:37:26Z","verificationMethod":"did:key:z6MkqBNEnkYj1aMnfKmNLcyzKPo1vT43HGhd6WvsvvX3Ttz2#z6MkqBNEnkYj1aMnfKmNLcyzKPo1vT43HGhd6WvsvvX3Ttz2","proofPurpose":"capabilityDelegation","capabilityChain":["urn:zcap:root:https%3A%2F%2Flocalhost%3A39443%2Fissuers%2Fz19puXc4xVDxvKqg7KgA63DBp"],"proofValue":"z2P4mSW3JCi8hw9WGGaHRrjmgXDRqd1rFyMvDMirKLMjKJUXZbiS8C9jeeQ3cak7n1LgTbH1B88FZ62BQveWPn9xj"}}',
        keySeed: 'KEY_SEED_DB'
      },
      tags: ['StatusList2021', 'Suspension', 'localhost']
    }
  ],
  publishStatusLists: [{
    method: 'POST',
    zcap: {
      capability: '{"@context":["https://w3id.org/zcap/v1","https://w3id.org/security/suites/ed25519-2020/v1"],"id":"urn:uuid:2578a2e2-8317-4577-94f5-866c525e6fbf","controller":"did:key:z6MkptjaoxjyKQFSqf1dHXswP6EayYhPQBYzprVCPmGBHz9S","parentCapability":"urn:zcap:root:https%3A%2F%2Flocalhost%3A39443%2Fissuers%2Fz19yatFSxXPzL3JpSx9kWHWgz","invocationTarget":"https://localhost:39443/issuers/z19yatFSxXPzL3JpSx9kWHWgz/slcs","expires":"2024-10-29T15:28:09Z","proof":{"type":"Ed25519Signature2020","created":"2023-10-30T15:28:09Z","verificationMethod":"did:key:z6MkqBNEnkYj1aMnfKmNLcyzKPo1vT43HGhd6WvsvvX3Ttz2#z6MkqBNEnkYj1aMnfKmNLcyzKPo1vT43HGhd6WvsvvX3Ttz2","proofPurpose":"capabilityDelegation","capabilityChain":["urn:zcap:root:https%3A%2F%2Flocalhost%3A39443%2Fissuers%2Fz19yatFSxXPzL3JpSx9kWHWgz"],"proofValue":"zMJc97yrQkEymHLqrpV6Fw8Ld3fCezpaHUU9v7avGXC5F3vrEz6i3RxmAtp4wZVzSRNb8eVuAKax36MVdTdmPiYL"}}',
      keySeed: 'KEY_SEED_DB'
    },
    tags: ['StatusList2021', 'Revocation', 'localhost']
  }, {
    method: 'POST',
    zcap: {
      capability: '{"@context":["https://w3id.org/zcap/v1","https://w3id.org/security/suites/ed25519-2020/v1"],"id":"urn:uuid:36775688-d491-43f2-973a-a3b25db6ec08","controller":"did:key:z6MkptjaoxjyKQFSqf1dHXswP6EayYhPQBYzprVCPmGBHz9S","parentCapability":"urn:zcap:root:https%3A%2F%2Flocalhost%3A39443%2Fissuers%2Fz19puXc4xVDxvKqg7KgA63DBp","invocationTarget":"https://localhost:39443/issuers/z19puXc4xVDxvKqg7KgA63DBp/slcs","expires":"2024-10-29T15:37:26Z","proof":{"type":"Ed25519Signature2020","created":"2023-10-30T15:37:26Z","verificationMethod":"did:key:z6MkqBNEnkYj1aMnfKmNLcyzKPo1vT43HGhd6WvsvvX3Ttz2#z6MkqBNEnkYj1aMnfKmNLcyzKPo1vT43HGhd6WvsvvX3Ttz2","proofPurpose":"capabilityDelegation","capabilityChain":["urn:zcap:root:https%3A%2F%2Flocalhost%3A39443%2Fissuers%2Fz19puXc4xVDxvKqg7KgA63DBp"],"proofValue":"z5UVK8bFf3Ayi2UttVijXevmyjShX3Dv3mPAMJtaU6uDS9WqbHi9AviV5AhXgrtLpg4TVqaeS5X8j1taQ6GcgKzGx"}}',
      keySeed: 'KEY_SEED_DB'
    },
    tags: ['StatusList2021', 'Suspension', 'localhost']
  }],
  setStatusLists: [{
    endpoint: 'https://localhost:39443/issuers/z19yatFSxXPzL3JpSx9kWHWgz/credentials/status',
    method: 'POST',
    zcap: {
      capability: '{"@context":["https://w3id.org/zcap/v1","https://w3id.org/security/suites/ed25519-2020/v1"],"id":"urn:uuid:aa1ac268-a8b5-4d14-86fb-7ee81d483db4","controller":"did:key:z6MkptjaoxjyKQFSqf1dHXswP6EayYhPQBYzprVCPmGBHz9S","parentCapability":"urn:zcap:root:https%3A%2F%2Flocalhost%3A39443%2Fissuers%2Fz19yatFSxXPzL3JpSx9kWHWgz","invocationTarget":"https://localhost:39443/issuers/z19yatFSxXPzL3JpSx9kWHWgz/credentials","expires":"2024-10-29T15:28:09Z","proof":{"type":"Ed25519Signature2020","created":"2023-10-30T15:28:09Z","verificationMethod":"did:key:z6MkqBNEnkYj1aMnfKmNLcyzKPo1vT43HGhd6WvsvvX3Ttz2#z6MkqBNEnkYj1aMnfKmNLcyzKPo1vT43HGhd6WvsvvX3Ttz2","proofPurpose":"capabilityDelegation","capabilityChain":["urn:zcap:root:https%3A%2F%2Flocalhost%3A39443%2Fissuers%2Fz19yatFSxXPzL3JpSx9kWHWgz"],"proofValue":"z3DFhaBRLBPdRwktfTHh88TvmEfGaj31TQVXbYZDZQiRkQgtjf28vZAXe4irGkcQeXLwgmmE2kHZpD5KJuchF3HkZ"}}',
      keySeed: 'KEY_SEED_DB'
    },
    tags: ['StatusList2021', 'Revocation', 'localhost']
  }, {
    endpoint: 'https://localhost:39443/issuers/z19puXc4xVDxvKqg7KgA63DBp/credentials/status',
    method: 'POST',
    zcap: {
      capability: '{"@context":["https://w3id.org/zcap/v1","https://w3id.org/security/suites/ed25519-2020/v1"],"id":"urn:uuid:8886231f-4cb3-4eff-a3f9-58b9725ea344","controller":"did:key:z6MkptjaoxjyKQFSqf1dHXswP6EayYhPQBYzprVCPmGBHz9S","parentCapability":"urn:zcap:root:https%3A%2F%2Flocalhost%3A39443%2Fissuers%2Fz19puXc4xVDxvKqg7KgA63DBp","invocationTarget":"https://localhost:39443/issuers/z19puXc4xVDxvKqg7KgA63DBp/credentials","expires":"2024-10-29T15:37:26Z","proof":{"type":"Ed25519Signature2020","created":"2023-10-30T15:37:26Z","verificationMethod":"did:key:z6MkqBNEnkYj1aMnfKmNLcyzKPo1vT43HGhd6WvsvvX3Ttz2#z6MkqBNEnkYj1aMnfKmNLcyzKPo1vT43HGhd6WvsvvX3Ttz2","proofPurpose":"capabilityDelegation","capabilityChain":["urn:zcap:root:https%3A%2F%2Flocalhost%3A39443%2Fissuers%2Fz19puXc4xVDxvKqg7KgA63DBp"],"proofValue":"z2P4mSW3JCi8hw9WGGaHRrjmgXDRqd1rFyMvDMirKLMjKJUXZbiS8C9jeeQ3cak7n1LgTbH1B88FZ62BQveWPn9xj"}}',
      keySeed: 'KEY_SEED_DB'
    },
    tags: ['StatusList2021', 'Suspension', 'localhost']
  }],
  verifiers: [
    {
      id: 'https://localhost:40443/verifiers/z19xZS6GU35Vzf5vY8zKZAMm2',
      endpoint: 'https://localhost:40443/verifiers/z19xZS6GU35Vzf5vY8zKZAMm2/credentials/verify',
      zcap: {
        capability: '{"@context":["https://w3id.org/zcap/v1","https://w3id.org/security/suites/ed25519-2020/v1"],"id":"urn:uuid:c3f86bfb-ad31-45d4-99a0-c2497c7b3083","controller":"did:key:z6MkptjaoxjyKQFSqf1dHXswP6EayYhPQBYzprVCPmGBHz9S","parentCapability":"urn:zcap:root:https%3A%2F%2Flocalhost%3A40443%2Fverifiers%2Fz19xZS6GU35Vzf5vY8zKZAMm2","invocationTarget":"https://localhost:40443/verifiers/z19xZS6GU35Vzf5vY8zKZAMm2/credentials","expires":"2024-10-29T14:55:37Z","proof":{"type":"Ed25519Signature2020","created":"2023-10-30T14:55:37Z","verificationMethod":"did:key:z6Mkj7zeZR5TishKD7FHhkqdAAwU6gCKRKTrapGAFwpGWsSM#z6Mkj7zeZR5TishKD7FHhkqdAAwU6gCKRKTrapGAFwpGWsSM","proofPurpose":"capabilityDelegation","capabilityChain":["urn:zcap:root:https%3A%2F%2Flocalhost%3A40443%2Fverifiers%2Fz19xZS6GU35Vzf5vY8zKZAMm2"],"proofValue":"z5zVV1AP3q3mtxzmgJnQSU6uDnjaBgpLe16qpJv4YXWbYHDcimuv5dV3YQ5ncYEcb5h4Ycr3DhmSPLqVNS5jcUHf6"}}',
        keySeed: 'KEY_SEED_DB'
      },
      tags: ['localhost', 'StatusList2021', 'localhost']
    }]
}];
