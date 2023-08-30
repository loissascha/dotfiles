import * as shared from './shared.js';
import { Launcher } from './shared.js';
import { Workspaces, Client } from './widgets/hyprland.js';
import { Separator } from '../modules/misc.js';
import { PanelIndicator as MediaIndicator } from './widgets/media.js';
import { PanelIndicator as NotificationIndicator } from './widgets/notifications.js';
import { DistroIcon } from '../modules/misc.js';
import { PanelButton as ColorPicker } from '../modules/colorpicker.js';
import { PanelButton as PowerMenu } from './widgets/powermenu.js';
import { PanelButton as DashBoard } from './widgets/dashboard.js';
import { PanelButton as ScreenRecord } from '../modules/screenrecord.js';
import { PanelButton as QuickSettings } from './widgets/quicksettings.js';
import { PanelButton as SearchButton } from './widgets/search.js';
const { Icon, Label, Box, Button } = ags.Widget;
const { SystemTray } = ags.Service;

/*const systemtray = Box({
  className: 'systemtray panel-button',
  connections: [[SystemTray, box => {
    const arr = SystemTray.items;
        box.children = arr.map(item => Button({
            //call the Activate function when icon is clicked
            //Note: if item.ItemIsMenu is true, left click should open menu
            onPrimaryClick: (_, event) => item.ActivateAsync(event.get_root_coords()[1], event.get_root_coords()[2]),
            //open menu on right click.
            //Note: if item.Menu is not set item.ContextMenuAsync(x, y) should be called.
            onSecondaryClick: (_, event) => item.AgsMenu.popup_at_pointer(event),
            //show icon with specific size
            child: SystemTray.get_icon(item),
            tooltipMarkup: SystemTray.get_tooltip_markup(item)
        }));
  }]],
});*/

const systemtray = Box({
  className: 'systemtray panel-button',
  connections: [[SystemTray, box => {
    box.children = SystemTray.items.map(item => Button({
      child: Icon(),
      onPrimaryClick: (_, event) => item.activate(event),
      onSecondaryClick: (_, event) => item.openMenu(event),
      connections: [[item, button => {
        button.child.icon = item.icon;
        button.tooltipMarkup = item.tooltipMarkup;
      }]],
    }));
    }
  ]]
});

const Bar = monitor => shared.Bar({
    anchor: 'top left right',
    monitor,
    start: [
        //Launcher({ child: DistroIcon() }),
        SearchButton(),
        Separator({ valign: 'center' }),
        Workspaces(),
        //Separator({ valign: 'center' }),
        //SearchButton(),
        Separator({ valign: 'center'}),
        Client(),
        //MediaIndicator({ hexpand: true, halign: 'end' }),
    ],
    center: [
        DashBoard(),
    ],
    end: [
        NotificationIndicator({ direction: 'right', hexpand: true, halign: 'start' }),
        ags.Widget.Box({ hexpand: true }),
        monitor == "2" ? systemtray : Box(),  // on which monitor id should the systemtray be (ids from hyprctl monitors)
        //Separator({ valign: 'center' }),
        ScreenRecord(),
        ColorPicker(),
        Separator({ valign: 'center' }),
        QuickSettings(),
        Separator({ valign: 'center' }),
        PowerMenu(),
    ],
});

export default monitors => ([
    ...monitors.map(mon => [
        Bar(mon),
        shared.Notifications(mon, 'slide_down', 'top'),
        shared.Desktop(mon),
        ...shared.Corners(mon),
        shared.OSDIndicator(mon),
        //shared.Dock(mon),
    ]),
    shared.Quicksettings({ position: 'top right' }),
    shared.Dashboard({ position: 'top' }),
]).flat(2);
