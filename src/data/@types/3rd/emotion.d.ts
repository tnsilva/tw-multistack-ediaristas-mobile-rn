import AppTheme from 'ui/themes/app-theme';
import App from '../../../../App';

type PaperThemeType = typeof AppTheme;

declare module '@emotion/react' {
    export interface Theme extends PaperThemeType{}
}