import {DistroIcon} from "../../modules/misc.js";

const { App, Service } = ags;
const { exec, error } = ags.Utils;
const { Icon, Label, Box, Button } = ags.Widget;

export const PanelButton = () => Button({
    className: 'search-button panel-button',
    onClicked: 'fuzzel -w 50 -l 40 -b 1e1e2ee6 -s 000000e6 -r 15 -m f38ba8e6 -C f38ba8e6 -B 3',
    child: Label('󰄛'),
    //child: DistroIcon()
});
