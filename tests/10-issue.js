/*!
 * Copyright (c) 2022-2023 Digital Bazaar, Inc. All rights reserved.
 */
import * as sl from '@digitalbazaar/vc-status-list';
import {getSlc, issueVc} from './helpers.js';
import {testCredential, testSlCredential} from './assertions.js';
import chai from 'chai';
import {filterByTag} from 'vc-api-test-suite-implementations';

const should = chai.should();

// only use implementations with `StatusList2021` issuers.
const {match} = filterByTag({
  property: 'issuers',
  tags: ['StatusList2021']
});
describe('StatusList2021 Credentials (Issue "statusPurpose: revocation")',
  function() {
    this.matrix = true;
    this.report = true;
    this.implemented = [...match.keys()];
    this.rowLabel = 'Test Name';
    this.columnLabel = 'Issuer';
    for(const [issuerName, {issuers}] of match) {
      describe(issuerName, function() {
        let issuerResponse;
        let err;
        let issuedVc;
        before(async function() {
          const issuer = issuers.find(issuer => issuer.tags.has('Revocation'));
          const {result, error, data} = await issueVc({issuer});
          err = error;
          issuerResponse = result;
          issuedVc = data;
        });
        it('MUST issue a VC with SL 2021 "credentialStatus" and ' +
          '"revocation" status purpose', async function() {
          this.test.cell = {columnId: issuerName, rowId: this.test.title};
          should.exist(issuerResponse);
          should.not.exist(err);
          issuerResponse.status.should.equal(201);
          should.exist(issuedVc, `Expected VC from ${issuerName} to exist.`);
          testCredential({credential: issuedVc});
        });
        // ensure that issued StatusList Credential contain correct properties
        it('MUST have correct properties when dereferencing ' +
          '"credentialStatus.statusListCredential"', async function() {
          this.test.cell = {columnId: issuerName, rowId: this.test.title};
          const {slc} = await getSlc({issuedVc});
          testSlCredential({slCredential: slc});
        });
        it('MUST be 16kb in size when "encodedList" is decoded',
          async function() {
            this.test.cell = {columnId: issuerName, rowId: this.test.title};
            const {slc: {credentialSubject}} = await getSlc({issuedVc});
            const {encodedList} = credentialSubject;
            // Uncompress encodedList
            const decoded = await sl.decodeList({encodedList});
            should.exist(decoded);
            // decoded size should be 16kb. For more info see
            // `credentialSubject.encoded` in
            // eslint-disable-next-line max-len
            // https://w3c-ccg.github.io/vc-status-list-2021/#statuslist2021credential
            const decodedSize = (decoded.length / 8) / 1024;
            decodedSize.should.equal(16);
          });
      });
    }
  });

describe('StatusList2021 Credentials (Issue "statusPurpose: suspension")',
  function() {
    this.matrix = true;
    this.report = true;
    this.implemented = [...match.keys()];
    this.rowLabel = 'Test Name';
    this.columnLabel = 'Issuer';
    for(const [issuerName, {issuers}] of match) {
      describe(issuerName, function() {
        let issuerResponse;
        let err;
        let issuedVc;
        before(async function() {
          const issuer = issuers.find(issuer => issuer.tags.has('Suspension'));
          const {result, error, data} = await issueVc({issuer});
          err = error;
          issuerResponse = result;
          issuedVc = data;
        });
        it('MUST issue a VC with SL 2021 "credentialStatus" and ' +
          '"suspension" status purpose', async function() {
          this.test.cell = {columnId: issuerName, rowId: this.test.title};
          should.exist(issuerResponse);
          should.not.exist(err);
          issuerResponse.status.should.equal(201);
          should.exist(issuedVc, `Expected VC from ${issuerName} to exist.`);
          testCredential({credential: issuedVc});
        });
        // ensure that issued StatusList Credential contain correct properties
        it('MUST have correct properties when dereferencing ' +
          '"credentialStatus.statusListCredential"', async function() {
          this.test.cell = {columnId: issuerName, rowId: this.test.title};
          const {slc} = await getSlc({issuedVc});
          testSlCredential({slCredential: slc});
        });
        it('MUST be 16kb in size when "encodedList" is decoded',
          async function() {
            this.test.cell = {columnId: issuerName, rowId: this.test.title};
            const {slc: {credentialSubject}} = await getSlc({issuedVc});
            const {encodedList} = credentialSubject;
            // Uncompress encodedList
            const decoded = await sl.decodeList({encodedList});
            should.exist(decoded);
            // decoded size should be 16kb
            const decodedSize = (decoded.length / 8) / 1024;
            decodedSize.should.equal(16);
          });
      });
    }
  });
