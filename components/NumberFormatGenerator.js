import React from 'react'
import NumberFormat from 'react-number-format';
import { Text } from 'react-native'

const NumberFormatGenerator = ({ value, emptySymbol, textStyle }) => {
    return (
        <NumberFormat
            value={value}
            displayType={'text'}
            thousandSeparator={true}
            thousandsGroupStyle={'lakh'}
            renderText={value => <Text style={textStyle}>{value ? value : emptySymbol || 0} জন</Text>}
        />
    )
}

export default NumberFormatGenerator
