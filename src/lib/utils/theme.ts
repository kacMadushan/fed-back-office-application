
import { clr_white, clr_zinc } from './colors';
import { primaryFont } from './typography';

export const theme = {
    token: {
        colorPrimary: clr_zinc[800],
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
            hoverBorderColor: clr_zinc[400],
            activeBorderColor: clr_zinc[400]
        },
        Table: {
            headerBg: clr_zinc[800],
            headerColor: clr_white,
            headerSplitColor: clr_zinc[600],
            cellFontSize: 14
        },
        Popover: {
            titleMinWidth: 320
        }
    }
}