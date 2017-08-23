import createMuiTheme from 'material-ui/styles/theme'
import {
  lightGreen,
  green,
  blue,
  lightBlue,
  amber,
  brown,
  cyan,
  grey,
  teal,
  indigo,
  lime,
  yellow,
  orange,
  deepOrange,
} from 'material-ui/colors'


const getCustomTheme = (primary, secondary) => {
  const isSimple = primary === grey && secondary === lightBlue
  return {
    color: '#000',
    backgroundColor: primary[
    isSimple ? 0 : 50
    ],
    titleColor: primary[900],
    subColor: primary[50],

    backToTop: {
      color: grey[600]
    },
    breadcrumb: {
      color: grey[900]
    },
    catalog: {
      activeColor: secondary[700],
      activeBackgroundColor: isSimple ? secondary[50] : secondary[100],
      backgroundColor: isSimple ? grey[0] : primary[50],
      borderColor: isSimple ? grey[300] : grey[400],
      color: grey[800],
      hoverColor: primary[
      isSimple ? 0 : 50
      ],
    },
    comment: {
      borderColor: grey[
      isSimple ? 300 : 400
      ]
    },
    detailCatalog: {
      color: grey[700],
      titleColor: grey[1000]
    },
    langSwitch: {
      defaultColor: grey[600],
      defaultBackgroundColor: primary[
      isSimple ? 0 : 50
      ],
      hoverColor: grey[800],
      hoverBackgroundColor: primary[900]
    },
    listBox: {
      color: grey[700],
      titleColor: grey[1000],
    },
    newestColumn: {
      color: grey[900],
      titleColor: grey[1000],
      timeColor: grey[700],
      lineColor: isSimple ? grey[300] : grey[400]
    },
    tag: {
      activeBackgroundColor: secondary[700],
      activeColor: '#fff',
      backgroundColor: secondary[
      isSimple ? 50 : 100
      ],
      color: secondary[700],
    },
    themeSwitch: {
      defaultColor: primary[900],
      defaultBackgroundColor: primary[
      isSimple ? 0 : 50
      ],
      hoverColor: primary[800],
      hoverBackgroundColor: primary[900]
    },
  }
}

const themes = {
  spring() {
    return getCustomTheme(lightGreen, blue)
  },
  summer() {
    return getCustomTheme(lightBlue, blue)
    // return getCustomTheme(yellow, deepOrange)
  },
  autumn() {
    return getCustomTheme(amber, brown)
  },
  winter() {
    return getCustomTheme(grey, lightBlue)
  },
}

const customStyle = themes.spring()

// {
//   background: {
//     backgroundColor: customThemes.backgroundColor[key]
//   }
// tag: {
//   color: '108ee9',
//   activeColor: '#fff',
//   activeBackgroundColor: '#108ee9',
//   backgroundColor: '#d2eafb',
// }
// }

const defaultTheme = createMuiTheme()

const theme = createMuiTheme({
  ...defaultTheme,
  shadows: [
    "none",
  ],
  typography: {
    ...defaultTheme.typography,
    fontFamily: `Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif`,
    title: {
      ...defaultTheme.typography.title,
      fontFamily: `Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif`,
    },
    caption: {
      ...defaultTheme.typography.caption,
      fontFamily: `Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif`,
    },
    headline: {
      ...defaultTheme.typography.headline,
      fontFamily: `Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif`,
    },
    body1: {
      ...defaultTheme.typography.body1,
      fontFamily: `Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif`,
    },
    body2: {
      ...defaultTheme.typography.body2,
      fontFamily: `Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif`,
    },
    button: {
      ...defaultTheme.typography.button,
      fontFamily: `Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif`,
    },
  },
  palette: {
    ...defaultTheme.palette,
    text: {
      ...defaultTheme.palette.text,
      divider: customStyle.catalog.hoverColor,
    },
  },
  ...customStyle
})


export default theme