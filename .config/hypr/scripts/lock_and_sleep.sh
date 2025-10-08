#!/bin/bash

# Kill the main hypridle daemon to prevent conflicts
killall hypridle

# Lock the screen
loginctl lock-session &

# Run a temporary idle daemon that will turn off the screen after 2 seconds
# It will also turn it back on upon activity and then exit.
swayidle -w \
    timeout 20 'hyprctl dispatch dpms off' \
    resume 'hyprctl dispatch dpms on && killall -9 swayidle'

# The above swayidle command blocks until it is resumed.
# Once it exits (after you move your mouse/type), we restart the main hypridle daemon.
hypridle &
