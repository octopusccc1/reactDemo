import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
let options = {
  sectionClassName:     'section',
  anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
  scrollBar:            false,
  navigation:           true,
  verticalAlign:        false,
  arrowNavigation:      true
};

class Door extends Component {
  static propTypes = {
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SectionsContainer className="container" {...options}>
          <Section className="custom-section" verticalAlign="true" color="#69D2E7">Page 1</Section>
          <Section color="#A7DBD8">Page 2</Section>
          <Section color="#E0E4CC">Page 3</Section>
        </SectionsContainer>
      </div>
    )
  }
}

export default Door;