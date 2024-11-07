#!/bin/bash

# Project directories
PROJECT_DIR_1="/home/sascha/git/toptech/PiANet/PiAPI/PiANetAPI"
PROJECT_DIR_2="/home/sascha/git/toptech/PiANet/PiAstro/PiAstro"
PROJECT_DIR_3="/home/sascha/git/toptech/go-pia-analyse"

cd /home/sascha/git/toptech/PiANet

# Session name
SESSION="pianet"

# Check if the session already exists
tmux has-session -t $SESSION 2>/dev/null

if [ $? != 0 ]; then
  # Session does not exist, create it
  tmux new-session -d -s $SESSION -n "API"

  # Window 1: First project
  tmux send-keys -t $SESSION "cd $PROJECT_DIR_1" C-m
  tmux split-window -h -t $SESSION
  tmux send-keys -t $SESSION "cd $PROJECT_DIR_1" C-m
  #tmux select-pane -t $SESSION.0
  tmux split-window -v -t $SESSION.1
  tmux send-keys -t $SESSION.2 "cd $PROJECT_DIR_1 && lazygit" C-m
  tmux select-pane -t $SESSION.0

  # Window 2: Second project
  tmux new-window -t $SESSION -n "Astro"
  tmux send-keys -t $SESSION:1 "cd $PROJECT_DIR_2" C-m
  tmux split-window -h -t $SESSION:1
  tmux send-keys -t $SESSION:1 "cd $PROJECT_DIR_2" C-m
  #tmux select-pane -t $SESSION:1.0
  tmux split-window -v -t $SESSION:1.1
  tmux send-keys -t $SESSION:1.2 "cd $PROJECT_DIR_2 && lazygit" C-m
  tmux select-pane -t $SESSION:1.0

  # Window 3: Go-Pia-Analyse
  tmux new-window -t $SESSION -n "Analyse"
  tmux send-keys -t $SESSION:2 "cd $PROJECT_DIR_3" C-m
  tmux split-window -h -t $SESSION:2
  tmux send-keys -t $SESSION:2 "cd $PROJECT_DIR_3" C-m
  tmux split-window -v -t $SESSION:2.1
  tmux send-keys -t $SESSION:2.2 "cd $PROJECT_DIR_3 && lazygit" C-m
  tmux select-pane -t $SESSION:2.0
fi

# Attach to the session
tmux attach -t $SESSION
