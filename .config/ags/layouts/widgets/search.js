const { App, Service } = ags;
const { exec, error } = ags.Utils;
const { Icon, Label, Box, Button } = ags.Widget;

export const PanelButton = () => Button({
    className: 'search-button panel-button',
    onClicked: 'fuzzel -w 50 -l 40 -b 241f1fe6 -s 000000e6 -r 15',
    child: Label('Search'),
});
