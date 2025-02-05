#!/bin/bash

# Project directories
PROJECT_DIR_1="/home/sascha/git/toptech/PiANet/PiAPI/PiANetAPI"


# Session name
SESSION="pianet_api"

# Check if the session already exists
tmux has-session -t $SESSION 2>/dev/null

if [ $? != 0 ]; then
	cd $PROJECT_DIR_1
  # Session does not exist, create it
  tmux new-session -d -s $SESSION -n "Code"

  tmux new-window -t $SESSION -n "Run"

  # Window 1: First project
  # tmux send-keys -t $SESSION:1 "cd $PROJECT_DIR_1" C-m
  # tmux split-window -h -t $SESSION
  # tmux send-keys -t $SESSION:1.1 "cd $PROJECT_DIR_1" C-m
  #tmux select-pane -t $SESSION.0
  # tmux split-window -v -t $SESSION.1
  # tmux send-keys -t $SESSION.2 "cd $PROJECT_DIR_1 && lazygit" C-m
  # tmux select-pane -t $SESSION.0

  # Window 2: Second project
  # tmux new-window -t $SESSION -n "Astro"
  # tmux send-keys -t $SESSION:2 "cd $PROJECT_DIR_2" C-m
  # tmux new-window -t $SESSION -n "Astro Run"
  # tmux send-keys -t $SESSION:3 "cd $PROJECT_DIR_2" C-m
  # tmux split-window -h -t $SESSION:3
  # tmux send-keys -t $SESSION:3 "cd $PROJECT_DIR_2" C-m
  #tmux select-pane -t $SESSION:1.0
  # tmux split-window -v -t $SESSION:1.1
  # tmux send-keys -t $SESSION:1.2 "cd $PROJECT_DIR_2 && lazygit" C-m
  # tmux select-pane -t $SESSION:1.0

  # Window 3: Go-Pia-Analyse
  # tmux new-window -t $SESSION -n "Analyse"
  # tmux new-window -t $SESSION -n "Analyse Run"
  # tmux send-keys -t $SESSION:2 "cd $PROJECT_DIR_3" C-m
  # tmux split-window -h -t $SESSION:2
  # tmux send-keys -t $SESSION:2 "cd $PROJECT_DIR_3" C-m
  # tmux split-window -v -t $SESSION:2.1
  # tmux send-keys -t $SESSION:2.2 "cd $PROJECT_DIR_3 && lazygit" C-m
  # tmux select-pane -t $SESSION:2.0
fi

# Attach to the session
tmux attach -t $SESSION
