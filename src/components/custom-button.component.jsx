import React from 'react';
import { CustomButtonContainer } from '../style components/custom-button.styles';

const CustomButton = ({children, ...props}) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;