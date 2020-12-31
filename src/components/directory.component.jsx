import React from 'react';
import '../assets/styles/directory.scss';
import MenuItem from './menu-items.component'
import { connect } from 'react-redux';
import {selectDirectorySection} from '../redux/directory/directory.selectors';
import {createStructuredSelector} from 'reselect';


const Directory = ({sections}) => (

  <div className='directory-menu'>
    {
      sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps}></MenuItem>))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps) (Directory);