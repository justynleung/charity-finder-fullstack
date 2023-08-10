import { Dispatch, SetStateAction, useLayoutEffect } from "react";

interface Props {
    isDark: Boolean
    setIsDark: Dispatch<SetStateAction<Boolean>>
}

const ThemeProvider: React.FC<Props> = ({ isDark, setIsDark }) => {

    const checkSysDefault = () => {
        useLayoutEffect(() => {
            let systemDefaultPreferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (systemDefaultPreferDark) {
                setIsDark(true)
            }
            if (!systemDefaultPreferDark) {
                setIsDark(false)
            }
        }, [])
    }

    checkSysDefault()
    return (
        <div className={`${isDark ? 'dark' : 'light'}`}></div>
    )
}

export default ThemeProvider;


