#!/usr/bin/env bash

function run {
  if ! pgrep $1 ;
  then
    $@&
  fi
}

run "xscreensaver -no-splash"
run "insync start"
run "lxpolkit"
run "flameshot"
run "variety"
run "pnmixer"
