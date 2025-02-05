#!/bin/bash

# Project directories
PROJECT_DIR_1="/home/sascha/git/github/loissascha/go-mangohud-configurator/mangohud-configurator"

# Session name
SESSION="mangoverlay"

# Check if the session already exists
tmux has-session -t $SESSION 2>/dev/null

if [ $? != 0 ]; then
  cd $PROJECT_DIR_1
  # Session does not exist, create it
  tmux new-session -d -s $SESSION -n "code"

  # Window 1: First project
  # tmux send-keys -t $SESSION "cd $PROJECT_DIR_1" C-m
  # tmux split-window -h -t $SESSION
  # tmux send-keys -t $SESSION "cd $PROJECT_DIR_1" C-m
  #tmux select-pane -t $SESSION.0
  # tmux split-window -v -t $SESSION.1
  # tmux send-keys -t $SESSION.2 "cd $PROJECT_DIR_1 && lazygit" C-m
  # tmux select-pane -t $SESSION.0

fi

# Attach to the session
tmux attach -t $SESSION
