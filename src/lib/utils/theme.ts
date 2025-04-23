
import { blue } from './colors';
import { primaryFont } from './typography';

export const theme = {
    token: {
        colorPrimary: blue[300],
        fontFamily: primaryFont,
    },
    components: {
        Typography: {
            titleMarginTop: 0,
            titleMarginBottom: 0,
        },
        Input: {
            paddingBlock: 10,
            paddingInline: 16,
            hoverBorderColor: blue[200],
            activeBorderColor: blue[200]
        },
        Popover: {
            titleMinWidth: 320
        }
    }
}