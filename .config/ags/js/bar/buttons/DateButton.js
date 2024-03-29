import Clock from '../../misc/Clock.js';
import PanelButton from '../PanelButton.js';
import { App } from '../../imports.js';

export default ({ format = '%H:%M - %A %e.' } = {}) => PanelButton({
    className: 'dashboard panel-button',
    onClicked: () => App.toggleWindow('dashboard'),
    window: 'dashboard',
    content: Clock({ format }),
});
