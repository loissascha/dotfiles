// common
const WP = `/home/${ags.Utils.USER}/Pictures/Wallpapers/`;

const editScheme = (scheme, edit) => {
    const obj = {};
    Object.keys(scheme).forEach(color => obj[color] = edit(scheme[color]));
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
    red: '#e67090',
    green: '#43c383',
    yellow: '#d8e77b',
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
    wm_gaps: 22,
    bar_gaps: 22,
    radii: 9,
    spacing: 9,
    shadow: 'rgba(0, 0, 0, .6)',
    drop_shadow: true,
    transition: 200,
    screen_corners: true,
    bar_style: 'normal',
    layout: 'topbar',
    desktop_clock: 'center center',
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
    accent: '$red',
    widget_opacity: 92,
    active_gradient: 'to right, $accent, darken($accent, 14%)',
    border_opacity: 86,
    bg_color: 'transparentize(#171717, 0.3)',
    hypr_active_border: 'rgba(e67090FF)',
    bar_style: 'floating',
    radii: 9,
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
    bar_gaps: 12,
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

const catppuccin_latte_split_red = {
    name: 'latte_split_red',
    icon: '󰄛',
    ...light,
    ...misc,
    ...colors,
    bg_color: 'transparentize(#eff1f5, 0.3)',
    //fg_color: '#4c4f69',
    accent: '#d20f39',
    border_color: '#ccd0da',
    bar_style: 'separated',
    widget_bg: '#e6e9ef',
    widget_opacity: 64,
    drop_shadow: false,
    border_width: 2,
    border_opacity: 0,
    radii: 9,
    spacing: 9,
    wm_gaps: 22,
    bar_gaps: 12,
    active_gradient: 'to right, $accent, darken($accent, 6%)',
    hypr_active_border: 'rgba(d20f39ff)',
    hypr_inactive_border: 'rgba(ccd0daff)'
};

const catppuccin_latte_red = {
    ...catppuccin_latte_split_red,
    name: 'latte_red',
    bar_style: 'normal',
    screen_corners: false,
    bg_color: 'transparentize(#eff1f5, 0.5)',
    border_color: 'transparentize(#ccd0da, 0.5)'
};

const catppuccin_mocha_split_red = {
    name: 'mocha_split_red',
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
    spacing: 9,
    wm_gaps: 22,
    bar_gaps: 12,
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
};

const catppuccin_mocha_split_green = {
    ...catppuccin_mocha_split_red,
    name: 'mocha_split_green',
    accent: '#a6e3a1',
    hypr_active_border: 'rgba(a6e3a1ff)'
};

const catppuccin_mocha_green = {
    ...catppuccin_mocha_red,
    name: 'mocha_green',
    accent: '#a6e3a1',
    hypr_active_border: 'rgba(a6e3a1ff)'
};

const catppuccin_mocha_split_sky = {
    ...catppuccin_mocha_split_red,
    name: 'mocha_split_sky',
    accent: '#89dceb',
    hypr_active_border: 'rgba(89dcebff)'
};

const catppuccin_mocha_sky = {
    ...catppuccin_mocha_red,
    name: 'mocha_sky',
    accent: '#89dceb',
    hypr_active_border: 'rgba(89dcebff)'
};

const catppuccin_mocha_split_lavender = {
    ...catppuccin_mocha_split_red,
    name: 'mocha_split_lavender',
    accent: '#b4befe',
    hypr_active_border: 'rgba(b4befeff)'
};

const catppuccin_mocha_lavender = {
    ...catppuccin_mocha_red,
    name: 'mocha_lavender',
    accent: '#b4befe',
    hypr_active_border: 'rgba(b4befeff)'
};

export default [
    //kitty_dark,
    //kitty_light,
    //leaves_dark,
    //leaves_light,
    ivory,
    //cutefish,
    //cherry,
    catppuccin_mocha_red,
    catppuccin_mocha_green,
    catppuccin_mocha_sky,
    catppuccin_mocha_lavender,
    catppuccin_mocha_split_red,
    catppuccin_mocha_split_green,
    catppuccin_mocha_split_sky,
    catppuccin_mocha_split_lavender,
    catppuccin_latte_red,
    catppuccin_latte_split_red
];
