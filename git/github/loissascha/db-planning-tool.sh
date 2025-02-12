#!/bin/bash

# Project directories
PROJECT_DIR_1="/home/sascha/git/github/loissascha/db-planning-tool"

# Session name
SESSION="db_planning_tool"

# Check if the session already exists
tmux has-session -t $SESSION 2>/dev/null

if [ $? != 0 ]; then
  cd $PROJECT_DIR_1
  # Session does not exist, create it
  tmux new-session -d -s $SESSION -n "frontend"

  tmux new-window -t $SESSION -n "backend"

  tmux new-window -t $SESSION -n "run"

fi

# Attach to the session
tmux attach -t $SESSION
