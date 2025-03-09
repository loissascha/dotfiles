#!/bin/bash

# Project directories
PROJECT_DIR_1="/home/sascha/git/github/loissascha/expo-chores"

# Session name
SESSION="expo-chores"

# Check if the session already exists
tmux has-session -t $SESSION 2>/dev/null

if [ $? != 0 ]; then
  cd $PROJECT_DIR_1
  # Session does not exist, create it
  tmux new-session -d -s $SESSION -n "app"

  tmux new-window -t $SESSION -n "api"

  tmux new-window -t $SESSION -n "run / git"

fi

# Attach to the session
tmux attach -t $SESSION
