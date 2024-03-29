import { Utils } from './imports.js';
const WP = `/home/${Utils.USER}/Pictures/wallpapers-own/`;

/**
 * @param {Record<string, string>} scheme
 * @param {function(string): string} edit
 * @returns {Record<string, string>}
 */
const editScheme = (scheme, edit) => {
    /** @type {Record<string, string>} */
    const obj = {};
    Object.keys(scheme).forEach(color => {
        obj[color] = edit(scheme[color]);
    });
    return obj;
};

const gnome = {
    red: '#f66151',
    green: '#57e389',
    yellow: '#f6d32d',
    blue: '#62a0ea',
    magenta: '#c061cb',
    teal: '#5bc8aF',
    orange: '#ffa348',
};

const charm = {
    red: '#e55f86',
    green: '#00D787',
    yellow: '#EBFF71',
    blue: '#51a4e7',
    magenta: '#9077e7',
    teal: '#51e6e6',
    orange: '#E79E64',
};

const dark = {
    color_scheme: 'dark',
    bg_color: '#171717',
    fg_color: '#eee',
    hover_fg: '#f1f1f1',
    ...charm,
};

const light = {
    color_scheme: 'light',
    bg_color: '#fffffa',
    fg_color: '#141414',
    hover_fg: '#0a0a0a',
    ...editScheme(gnome, c => `darken(${c}, 8%)`),
};

const misc = {
    wm_gaps: 12,
    bar_gaps: 8,
    radii: 9,
    spacing: 9,
    shadow: 'rgba(0, 0, 0, .6)',
    drop_shadow: true,
    transition: 200,
    screen_corners: true,
    bar_style: 'normal',
    layout: 'topbar',
    desktop_clock: 'center center',
    font: 'Ubuntu Nerd Font',
    mono_font: 'Mononoki Nerd Font',
    font_size: 14,
};

const colors = {
    wallpaper_fg: 'white',
    hypr_active_border: 'rgba(3f3f3fFF)',
    hypr_inactive_border: 'rgba(3f3f3fDD)',
    accent: '$blue',
    accent_fg: '#141414',
    widget_bg: '$fg_color',
    widget_opacity: 94,
    active_gradient: 'to right, $accent, lighten($accent, 6%)',
    border_color: '$fg_color',
    border_opacity: 97,
    border_width: 1,
};

// themes
const kitty_dark = {
    wallpaper: WP + 'kitty.jpeg',
    name: 'kitty_dark',
    icon: '󰄛',
    ...dark,
    ...misc,
    ...colors,
};

const kitty_light = {
    wallpaper: WP + 'kitty.jpeg',
    name: 'kitty_light',
    icon: '󰄛',
    ...light,
    ...misc,
    ...colors,
    widget_bg: '$accent',
    widget_opacity: 84,
};

const leaves_dark = {
    ...kitty_dark,
    wallpaper: WP + 'leaves.jpg',
    name: 'leaves_dark',
    icon: '󰌪',
    accent: '$green',
    widget_opacity: 92,
    active_gradient: 'to right, $accent, darken($accent, 14%)',
    border_opacity: 86,
    bg_color: 'transparentize(#171717, 0.3)',
    hypr_active_border: 'rgba(57e389FF)',
    bar_style: 'floating',
    radii: 0,
    wallpaper_fg: 'white',
    additional_scss: `
        window#quicksettings .quicksettings {
            margin-right: $wm_gaps;
        }
    `,
};

const leaves_light = {
    ...leaves_dark,
    ...light,
    name: 'leaves_light',
    accent: 'darken($green, 10%)',
    bg_color: 'transparentize(#fff, 0.1)',
    active_gradient: 'to right, $accent, darken($accent, 6%)',
};

const ivory = {
    wallpaper: WP + 'ivory.png',
    name: 'ivory',
    icon: '󰟆',
    ...light,
    ...misc,
    ...colors,
    bg_color: '#fffff0',
    bar_style: 'separated',
    widget_bg: '$accent',
    widget_opacity: 64,
    drop_shadow: false,
    border_width: 2,
    border_opacity: 0,
    active_gradient: 'to right, $accent, darken($accent, 6%)',
    wallpaper_fg: '$bg_color',
    hypr_active_border: 'rgba(111111FF)',
    additional_scss: `
        window#quicksettings .quicksettings,
        window#dashboard .dashboard {
            margin-top: 0;
        }
    `,
};

const blackLove = {
    wallpaper: WP + '685192.jpg',
    name: 'blackLove',
    icon: 'B',
    ...dark,
    ...misc,
    ...colors,
    bg_color: '#000000',
    bar_style: 'normal',
    spacing: 5,
    wm_gaps: 8,
    bar_gaps: 5,
    accent: '#ffb259',
    border_color: '#000000',
    active_gradient: 'to right, $accent, darken($accent, 6%)',
    hypr_active_border: 'rgba(ffffffff)',
    hypr_inactive_border: 'rgba(000000ff)'
};

const cutefish = {
    ...kitty_dark,
    wallpaper: WP + 'cutefish.jpeg',
    name: 'cutefish',
    icon: '󰈺',
    accent: 'lighten($blue, 20%)',
    active_gradient: 'to right, $accent, lighten(mix($orange, $blue, 70%), 20%)',
    border_opacity: 94,
    brorder_width: 2,
    radii: 9,
    desktop_clock: 'end end',
    hypr_active_border: 'rgba(3f3f3fFF)',
    bg_color: 'transparentize(#171717, 0.3)',
};

const cherry = {
    ...kitty_dark,
    wallpaper: WP + 'cherry.png',
    name: 'cherry',
    icon: '',
    accent: '$blue',
    active_gradient: 'to right, $accent, lighten(mix($magenta, $blue, 70%), 18%)',
    brorder_width: 2,
    radii: 13,
    bg_color: 'transparentize(#171717, 0.3)',
};

const catppuccin_mocha_split_red = {
    name: 'mocha_split_red',
    wallpaper: WP + 'mazda-rx-7-fd-need-for-speed-ui.jpg',
    icon: '󰄛',
    ...dark,
    ...misc,
    ...colors,
    bg_color: 'transparentize(#1e1e2e, 0.3)',
    accent: '#f38ba8',
    border_color: '#313244',
    bar_style: 'separated',
    widget_bg: '#45475a',
    widget_opacity: 64,
    drop_shadow: false,
    border_width: 2,
    border_opacity: 0,
    radii: 9,
    spacing: 3,
    wm_gaps: 8,
    bar_gaps: 8,
    active_gradient: 'to right, $accent, darken($accent, 6%)',
    hypr_active_border: 'rgba(f38ba8ff)',
    hypr_inactive_border: 'rgba(11111bff)'
};

const catppuccin_mocha_red = {
    ...catppuccin_mocha_split_red,
    name: 'mocha_red',
    bar_style: 'normal',
    bg_color: 'transparentize(#1e1e2e, 0.4)',
    screen_corners: false,
    border_color: 'transparentize(#1e1e2e, 0.3)',
    radii: 0
};

const catppuccin_mocha_green = {
    ...catppuccin_mocha_red,
    wallpaper: WP + '1169180.jpg',
    name: 'mocha_green',
    accent: '#a6e3a1',
    hypr_active_border: 'rgba(a6e3a1ff)'
};


export default [
    kitty_dark,
    kitty_light,
    leaves_dark,
    leaves_light,
    ivory,
    cutefish,
    cherry,
    catppuccin_mocha_split_red,
    catppuccin_mocha_red,
    catppuccin_mocha_green,
    blackLove
];
