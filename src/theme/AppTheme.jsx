import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { MyTheme } from "./MyTheme"

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={MyTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
