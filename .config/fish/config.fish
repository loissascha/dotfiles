if status is-interactive
    # Commands to run in interactive sessions can go here


    alias ga="git add"
    alias gc="git commit -m"
    alias gp="git push"
    alias gb="git checkout -b"
    alias gitui="lazygit"
    alias multi="zellij"
    alias du="dust"
    alias runGodotMono="cd ~/Software/Godot_v4.2.2-stable_mono && nohup ./Godot_v4.2.2-stable_mono_linux.x86_64 & disown"
    alias vim="nvim"
    alias lvim="/home/sascha/.local/bin/lvim"
    alias cat="bat"
    alias benchmark="hyperfine"
    alias pianetdev="/home/sascha/git/toptech/pianet.sh"
    alias mangoverlaydev="/home/sascha/git/github/loissascha/mangoverlay.sh"
    #alias mc="yazi"
    #alias fm="yazi"
    
    export PiANetConnection='server=localhost;port=30306;database=piaNetTest;user=root;password=root'
    export PATH=$PATH:$HOME/.local/bin
    export PATH=$PATH:/usr/bin
    export PATH=$PATH:$HOME/.dotnet/tools:$HOME/go/bin:$HOME/.local/bin

    #fastfetch
    gofetch
end

#export MANGOHUD=1
#export ENABLE_VULKAN_LAYER_MANGOHUD=1

# bun
set --export BUN_INSTALL "$HOME/.bun"
set --export PATH $BUN_INSTALL/bin $PATH

starship init fish | source
