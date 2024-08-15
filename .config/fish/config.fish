if status is-interactive
    # Commands to run in interactive sessions can go here


    alias dotnet-shell="nix-shell ~/.nix-dotfiles/nix/shells/dotnet.nix --run fish"
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
    #alias mc="yazi"
    #alias fm="yazi"
    
    export PiANetConnection='server=localhost;port=30306;database=piaNetTest;user=root;password=root'
    export PATH=$PATH:$HOME/.local/bin
    export PATH=$PATH:/usr/bin
    export PATH=$PATH:$HOME/.dotnet/tools:$HOME/go/bin

    #fastfetch
    gofetch
end
